<template>
  <div class="page-payment-history">
    <h1 class="page-title">История платежей</h1>
    <h2 v-if="!paymentHistory.length" class="page-subtitle">
      Заказов пока нет
    </h2>
    <table v-else class="table-payment-history page-payment-history__table">
      <thead class="table-payment-history__head">
        <th class="table-payment-history__head-colm">#</th>
        <th class="table-payment-history__head-colm">Номер счета</th>
        <th class="table-payment-history__head-colm">Сумма платежа</th>
        <th class="table-payment-history__head-colm">Имя держателя</th>
        <th class="table-payment-history__head-colm">Дата оплаты</th>
      </thead>
      <tbody>
        <tr
          v-for="(payment, index) in paymentHistory"
          :key="payment.accountNumber + payment.date"
          class="table-payment-history__row"
        >
          <td class="table-payment-history__cell">{{ index + 1 }}</td>
          <td class="table-payment-history__cell">
            {{ payment.accountNumber }}
          </td>
          <td class="table-payment-history__cell">
            {{ payment.amountOfPayment }}
          </td>
          <td class="table-payment-history__cell">{{ payment.cardOwner }}</td>
          <td class="table-payment-history__cell">
            {{ formatDate(payment.date) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Ноября",
    "Декабря"
  ];

  import { mapState } from "vuex";
  export default {
    name: "PagePaymentsHistory",
    computed: {
      ...mapState(["paymentHistory"])
    },
    methods: {
      formatDate(timestamp) {
        let date = new Date(timestamp);
        return `${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`;
      }
    }
  };
</script>
