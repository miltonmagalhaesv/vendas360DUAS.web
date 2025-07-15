export default {
  // Hoje
  setHoje: async () => {
    DatePicker_Inicial.setValue(moment().startOf("day").toDate());
    DatePicker_Final.setValue(moment().endOf("day").toDate());
    await JSObject4.atualizarDadosDoMes();
  },
  // Ontem
  setOntem: async () => {
    DatePicker_Inicial.setValue(moment().subtract(1, "day").startOf("day").toDate());
    DatePicker_Final.setValue(moment().subtract(1, "day").endOf("day").toDate());
    await JSObject4.atualizarDadosDoMes();
  },
  // Última semana
  setUltimaSemana: async () => {
  // Pega a data de hoje
  const hoje = moment();

  // Descobre o início da semana atual (segunda-feira)
  const inicioSemanaAtual = hoje.clone().startOf("week").add(1, "days"); // startOf("week") é domingo, então soma 1 dia

  // Início da semana passada = início da semana atual - 7 dias
  const inicioSemanaPassada = inicioSemanaAtual.clone().subtract(7, "days");

  // Fim da semana passada = início da semana atual - 1 dia (domingo)
  const fimSemanaPassada = inicioSemanaAtual.clone().subtract(1, "days").endOf("day");

  DatePicker_Inicial.setValue(inicioSemanaPassada.toDate());
  DatePicker_Final.setValue(fimSemanaPassada.toDate());
  await JSObject4.atualizarDadosDoMes();
},
  // Este mês
  setEsteMes: async () => {
    DatePicker_Inicial.setValue(moment().startOf("month").toDate());
    DatePicker_Final.setValue(moment().endOf("day").toDate());
    await JSObject4.atualizarDadosDoMes();
  },
  // Último mês
  setUltimoMes: async () => {
    DatePicker_Inicial.setValue(moment().subtract(1, "month").startOf("month").toDate());
    DatePicker_Final.setValue(moment().subtract(1, "month").endOf("month").toDate());
    await JSObject4.atualizarDadosDoMes();
  },
  // Últimos 3 meses
  setUltimos3Meses: async () => {
  const hoje = moment();

  // Últimos 3 meses: abril, maio, junho
  const inicio = hoje.clone().subtract(3, "months").startOf("month"); // 1º de abril
  const fim = hoje.clone().subtract(1, "months").endOf("month"); // 30 de junho

  DatePicker_Inicial.setValue(inicio.toDate());
  DatePicker_Final.setValue(fim.toDate());
  await JSObject4.atualizarDadosDoMes();
},
  // Este ano
  setEsteAno: async () => {
    DatePicker_Inicial.setValue(moment().startOf("year").toDate());
    DatePicker_Final.setValue(moment().endOf("day").toDate());
    await JSObject4.atualizarDadosDoMes();
  },
}