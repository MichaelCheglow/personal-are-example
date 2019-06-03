<template>
  <input type="text" @input="handleInput" :value="partOfNumber" ref="input" />
</template>
<script>
  export default {
    name: "CreditCardNumberInput",
    props: {
      tabIndex: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        partOfNumber: ""
      };
    },
    methods: {
      handleInput(val) {
        let inputValue = val.target.value.replace(/\D/g, "");
        this.partOfNumber = val;
        if (inputValue.length > 4) {
          this.partOfNumber = inputValue.slice(0, 4);
          this.$emit("inputIsFilled", this.tabIndex);
        } else {
          this.partOfNumber = inputValue;
        }

        this.$emit("input", { index: this.tabIndex, value: this.partOfNumber });
      }
    }
  };
</script>
