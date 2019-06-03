<template>
  <div class="page page-payment-success">
    <div class="page-payment-success__wrap">
      <h1 class="page-title">Оплата прошла успешно.</h1>
      <h2 class="page-subtitle">Данные по оплате</h2>
      <table class="table-payment-info">
        <tr>
          <td class="page-info__title">Номер счета</td>
          <td>{{ getLastPayment.accountNumber }}</td>
        </tr>
        <tr>
          <td class="page-info__title">Cумма платежа</td>
          <td>{{ getLastPayment.amountOfPayment }}</td>
        </tr>
        <tr>
          <td class="page-info__title">Имя держателя</td>
          <td>{{ getLastPayment.cardOwner }}</td>
        </tr>
        <tr>
          <td class="page-info__title">Дата транзакции</td>
          <td>
            {{ formatDate(getLastPayment.date) }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from "vuex";
  export default {
    name: "PagePaymentSuccess",
    data() {
      return {
        months: [
          "января",
          "февраля",
          "марта",
          "апреля",
          "мая",
          "июня",
          "июля",
          "августа",
          "сентября",
          "ноября",
          "декабря"
        ]
      };
    },
    computed: {
      ...mapGetters(["getLastPayment"])
    },
    methods: {
      ...mapMutations(["togglePaymentSucceed"]),

      formatDate(timestamp) {
        let date = new Date(timestamp);
        return `${date.getDate()} ${
          this.months[date.getMonth()]
        } ${date.getFullYear()}`;
      }
    },
    created() {
      this.togglePaymentSucceed();
    }
  };
</script>
