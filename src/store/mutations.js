export default {
  togglePaymentSucceed(state) {
    state.isPaymentSucceed = !state.isPaymentSucceed;
  },

  loadPaymentHistory(state, history) {
    state.paymentHistory.splice(0, 0, ...history);
  },

  pushPaymentToHistory(state, payment) {
    state.paymentHistory.push(payment);
  }
};
