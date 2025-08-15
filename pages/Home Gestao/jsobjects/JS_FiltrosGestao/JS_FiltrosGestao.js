export default {
  atualizarDadosPorLoja: () => {
    const lojas = Select_Lojas.selectedOptionValues;

    if (!lojas || lojas.length === 0) return;

    Query_VendasMes_Gestao.run();
    Query_MetaMes_Gestao.run();
    Query_QtdVendasMes_Gestao.run();
    Query_VlrDia_Gestao.run();
    Query_SomaPesoMes_Gestao.run();
    Query_PesoFuturo_Gestao.run();
    Query_MetaDia_Gestao.run();
    Query_VendasHoje_Gestao.run();
		KPI_Acumulado_Ano.run();
		KPI_Media_Ano.run();
		KPI_Periodo_Anterior.run();
		KPI_Periodo_Atual.run()
  },

  onPageLoad: () => {
    if (appsmith.store.perfil_usuario === "gestao" && 
        Array.isArray(appsmith.store.pontos_venda) &&
        appsmith.store.pontos_venda.length > 0) {
      Select_Lojas.setSelectedOptions(appsmith.store.pontos_venda);
      JS_FiltrosGestao.atualizarDadosPorLoja();
    }
  }
};