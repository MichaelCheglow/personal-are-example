<template>
  <div class="credit-card-number">
    <CreditCardNumberInput
      v-for="index in 4"
      :key="new Date().getTime() + index"
      :ref="`creditNumberInput-${index}`"
      :tab-index="index"
      @inputIsFilled="focusNextCreditCardNumberInput"
      @input="updateNumber"
    />
  </div>
</template>
<script>
  import CreditCardNumberInput from "@/components/CreditCardNumberInput.vue";
  export default {
    name: "CreditCardNumber",
    components: {
      CreditCardNumberInput
    },
    data() {
      return {
        subNumber: ['', '', '', '']
      }
    },
    computed: {
      number () {
        return this.subNumber.join('')
      }
    },
    methods: {
      updateNumber (data) {
        this.subNumber.splice(data.index - 1, 1, data.value)
        this.$nextTick(() => {
          this.$emit('input', this.number)
        })
      },

      focusNextCreditCardNumberInput (tabIndex) {
        if (tabIndex === 4) return
        this.$nextTick(() => {
          this.$refs[`creditNumberInput-${tabIndex + 1}`][0].$refs.input.focus()
        })
      }
    }
  };
</script>
