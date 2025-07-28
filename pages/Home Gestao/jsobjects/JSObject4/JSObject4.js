export default {
  atualizarDadosDoMes: () => {
    // Dados principais de metas, vendas e cálculos base
    Query_MetaVendedorMes.clear(); Query_MetaVendedorMes.run();
    Query_VendasMes.clear(); Query_VendasMes.run();
    Query_QtdVendasMes.clear(); Query_QtdVendasMes.run();
    Query_VlrDia.clear(); Query_VlrDia.run();

    // Dados para cálculos de tendência
    Query_SomaPesoMes.clear(); Query_SomaPesoMes.run();

		// Dados de gestão
		Query_MetaMes_Gestao.clear(); Query_MetaMes_Gestao.run();
    Query_VendasMes_Gestao.clear(); Query_VendasMes_Gestao.run();
    Query_QtdVendasMes_Gestao.clear(); Query_QtdVendasMes_Gestao.run();
    Query_VlrDia_Gestao.clear(); Query_VlrDia_Gestao.run();
		VendasMes_PDV.clear();VendasMes_PDV.run();
		MetasMes_PDV.clear();MetasMes_PDV.run();
		KPI_Periodo_Atual.clear();KPI_Periodo_Atual.run();
		
  },

  btn_loginonClick: () => {
    if (verificarLogin.data.length > 0) {
      storeValue("colaborador_id", verificarLogin.data[0].id);
      storeValue("colaborador_nome", verificarLogin.data[0].nome);
      storeValue("colaborador_usuario", verificarLogin.data[0].nome_usuario);
      navigateTo("Home");
    } else {
      showAlert("Usuário ou senha incorretos", "error");
    }
  }
}
