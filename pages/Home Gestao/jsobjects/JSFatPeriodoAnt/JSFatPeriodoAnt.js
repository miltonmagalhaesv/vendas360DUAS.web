export default {
  periodoAnterior: () => {
    const inicio = moment(DatePicker_Inicial.selectedDate).subtract(1, "year").startOf("day");
    const fim = moment(DatePicker_Final.selectedDate).subtract(1, "year").endOf("day");
    return {
      de: inicio.format("YYYY-MM-DD"),
      ate: fim.format("YYYY-MM-DD")
    };
  }
}