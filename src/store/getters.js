export default {
  getLastPayment(state) {
    return state.paymentHistory[state.paymentHistory.length - 1];
  }
};
