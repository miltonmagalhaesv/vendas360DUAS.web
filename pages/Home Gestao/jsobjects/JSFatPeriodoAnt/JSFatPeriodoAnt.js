export default {
  periodoAnterior: () => {
    // Pega datas selecionadas
    const atualInicio = moment(DatePicker_Inicial.selectedDate);
    const atualFim = moment(DatePicker_Final.selectedDate);

    // Primeiro e último dia do mês do período atual
    const primeiroDiaAtual = atualInicio.clone().startOf("month");
    const ultimoDiaAtual = atualInicio.clone().endOf("month");

    // Se período selecionado termina no último dia do mês...
    let anteriorFim;
    if (atualFim.isSame(ultimoDiaAtual, "day")) {
      // ...então pega o último dia do mês anterior
      anteriorFim = atualFim.clone().subtract(1, "month").endOf("month");
    } else {
      // ...senão, só espelha o mesmo dia
      anteriorFim = atualFim.clone().subtract(1, "month");
    }

    // Sempre pega o dia inicial espelhado
    const anteriorInicio = atualInicio.clone().subtract(1, "month");

    return {
      de: anteriorInicio.startOf("day").format("YYYY-MM-DD"),
      ate: anteriorFim.endOf("day").format("YYYY-MM-DD"),
    };
  }
}