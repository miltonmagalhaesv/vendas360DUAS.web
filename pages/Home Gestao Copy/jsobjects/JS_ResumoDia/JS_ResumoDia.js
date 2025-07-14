export default {
  atualizarResumoDia: async () => {
    try {
      await Promise.all([
        Query_VendasHoje_Gestao.run(),
        Query_FaturamentoAteDiaAnterio.run(),
        Query_FaturamentoAteDiaSelecio.run(),
        Query_MetaMes_Gestao.run(),
        Query_PesosDiasPassados_Gestao.run(),
        Query_PesoFuturo_ResumoDia.run(),
        Query_MetaDia_Gestao.run(),
        Query_PesosDiasFuturos_Gestao.run()
      ]);
      
      showAlert("Resumo do dia atualizado com sucesso.", "success");
      
    } catch (error) {
      showAlert("Erro ao atualizar o resumo do dia. Verifique as conexões.", "error");
      console.error("Erro ao atualizar resumo do dia:", error);
    }
  }
};