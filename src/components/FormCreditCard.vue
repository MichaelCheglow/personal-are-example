<template>
  <form
    class="form-credit-card"
    @submit.prevent="submitForm"
  >
    <div class="form-credit-card__front">
      <div class="form-credit-card__card-number">
        <label class="form-credit-card__validity-title">Номер карты</label>
        <div class="form-credit-card__card-number-inputs">
          <CreditCardNumber @input="newNumber => {form.number = newNumber}"/>
        </div>
        <p
          v-if="!$v.form.number.required && $v.form.number.$dirty"
          class="form-credit-card__error"
        >
          Это поле является обязательным
        </p>
        <p
          v-if="!$v.form.number.minLength && $v.form.number.$dirty"
          class="form-credit-card__error"
        >
          Номер должен состоять из 16 цифр. Осталось {{16 - form.number.length}} 
          {{form.number.length === 1 ? 'цифра': 'цифр'}}
        </p>
      </div>
      <div class="form-credit-card__validity">
        <label class="form-credit-card__validity-title">Срок действия</label>
        <DropdownMenu
          class="form-credit-card__dropdown"
          :config="monthConfig"
          @setSelectedOption="option => {form.month = option.value}"
        />
        <DropdownMenu
          class="form-credit-card__dropdown"
          :config="yearConfig"
          @setSelectedOption="option => {form.year = option.value}"
        />
      </div>
      <p
        v-if="($v.form.month.$dirty || $v.form.month.$dirty) && 
          (!$v.form.month.required || !$v.form.year.required)"
        class="form-credit-card__error"
      >
        Эти поля являются обязательными 
      </p>
      <input
        :value="form.cardOwner"
        class="form-credit-card__input"
        type="text"
        placeholder="Держатель карты"
        @input="leaveOnlyLetters"
      />
      <p
        v-if="!$v.form.cardOwner.required && $v.form.cardOwner.$dirty"
        class="form-credit-card__error"
      >
        Это поле является обязательным
      </p>
      <p
        v-if="!$v.form.cardOwner.minLength && $v.form.cardOwner.$dirty"
        class="form-credit-card__error"
      >
        Минимальная длина 3 символа.
      </p>
    </div>
    <div class="form-credit-card__back">
      <div class="form-credit-card__cvv2">
        <label class="form-credit-card__validity-title">Код CVV2 / CVC2</label>
        <input
          :value="form.cvv2Code"
          type="text"
          class="form-credit-card__input"
          @input="leaveOnlyNumbers"
        />
        <p
          v-if="!$v.form.cvv2Code.required && $v.form.cvv2Code.$dirty"
          class="form-credit-card__error"
        >
          Это поле является обязательным
        </p>
        <p
          v-if="(!$v.form.cvv2Code.minLength || !$v.form.cvv2Code.maxLength) && 
            $v.form.cvv2Code.$dirty"
          class="form-credit-card__error"
        >
          Должно быть ровно 3 символа.
        </p>
      </div>
    </div>
    <button class="btn-submit form-credit-card__submit" type="submit">Оплатить</button>
  </form>
</template>
<script>
const year = new Date().getFullYear()
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import DropdownMenu from '@/components/DropdownMenu.vue'
import CreditCardNumber from '@/components/CreditCardNumber.vue'
export default {
  name: 'FormCreditCard',
  components: {
    DropdownMenu,
    CreditCardNumber
  },
  data () {
    return {
      form: {
        number: '',
        month: '',
        year: '',
        cardOwner: '',
        cvv2Code: ''
      }
    }
  },
  computed: {
    monthConfig () {
      return { 
        options: this.range(1, 12),
        placeholder: this.form.month,
        prefix: '',
        width: 70
      }
    },
    yearConfig () {
      return {
        options: this.range(year, year + 10),
        placeholder: this.form.year,
        prefix: '',
        width: 86
      }
    }
  },
  methods: {
    range (start, end) {
      return Array(end - start + 1).fill().map((_, idx) => ({value: `${start + idx}`}))
    },

    leaveOnlyLetters (val) {
      // window.console.log(val)
      this.form.cardOwner = val.target.value
      this.form.cardOwner = val.target.value.replace(/[^A-Za-z]/g,'')
    },

    leaveOnlyNumbers (val) {
      this.form.cvv2Code = val.target.value
      this.form.cvv2Code = val.target.value.replace(/\D/g,'')     
    },

    submitForm () {
      this.$v.form.$touch();
      if (this.$v.$invalid) return
      this.$emit('form-is-ready', this.form)
    }
  },
  validations: {
    form: {
      number: { required, minLength: minLength(16) },
      month: { required },
      year: { required },
      cardOwner: { required, minLength: minLength(4) },
      cvv2Code: { required, minLength: minLength(3), maxLength: maxLength(3) }
    }
  }
}
</script>
