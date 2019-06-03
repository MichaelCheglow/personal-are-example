<template>
  <form class="form-payment-info" @submit.prevent="onSubmit">
    <div ref="inputWrap" class="form-payment-info__input-wrap">
      <input
        :class="{
          'input__error': $v.paymentInfo.$error, 
          'input__success': !$v.$anyError & $v.$dirty}"
        :value="$v.paymentInfo.$model"
        :placeholder="placeholder"
        class="input form-payment-info__input"
        type="text"
        @input="onInput"
      />
      <button class="form-payment-info__submit" type="submit">
        <i class="icon-enter-arrow"></i>
      </button>
    </div>
    <div v-if="$v.paymentInfo.$error" class="form-payment-info__error">
      <p>Осталось {{ paymentInfoLength - paymentInfo.length }} символ(ов)</p>
    </div>
  </form>
</template>
<script>
  import { TimelineLite } from "gsap";
  import { required, minLength } from "vuelidate/lib/validators";
  export default {
    name: "FormPaymentInfo",
    props: {
      paymentInfoLength: {
        type: Number,
        default: 1
      },
      paymentInfoName: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        paymentInfo: ""
      };
    },
    methods: {
      onInput(val) {
        this.paymentInfo = val.target.value;
        this.paymentInfo = val.target.value.replace(/\D/g, "");
      },

      onSubmit() {
        this.$v.paymentInfo.$touch();
        if (this.$v.$invalid) {
          const inputWrap = this.$refs.inputWrap;
          const timeline = new TimelineLite();
          timeline
            .to(inputWrap, 0.075, { x: 10 })
            .to(inputWrap, 0.075, { x: -8 })
            .to(inputWrap, 0.075, { x: 6 })
            .to(inputWrap, 0.075, { x: -4 })
            .to(inputWrap, 0.075, { x: 2 })
            .to(inputWrap, 0.075, { x: 0 });
        } else {
          this.$emit("change", {
            key: this.paymentInfoName,
            value: this.paymentInfo
          });
        }
      }
    },
    validations() {
      return {
        paymentInfo: {
          required,
          minLength: minLength(this.paymentInfoLength)
        }
      };
    }
  };
</script>
