export default {
  alterarSenha: async () => {
    const senhaAtual = Input_SenhaAtual.text;
    const novaSenha = Input_NovaSenha.text;
    const confirmarNovaSenha = Input_ConfirmaSenha.text;

    if (!senhaAtual || !novaSenha || !confirmarNovaSenha) {
      showAlert("Preencha todos os campos de senha.", "warning");
      return;
    }

    if (novaSenha !== confirmarNovaSenha) {
      showAlert("As novas senhas não coincidem.", "error");
      return;
    }

    try {
      await Query_AlterarSenha.run();

      if (Query_AlterarSenha.data && Query_AlterarSenha.data.length > 0) {
        showAlert("Senha atualizada com sucesso!", "success");
        closeModal("Modal_AlterarSenha");

        // 🧹 Limpa os campos do modal:
        Input_SenhaAtual.setValue("");
        Input_NovaSenha.setValue("");
        Input_ConfirmaSenha.setValue("");
      } else {
        showAlert("Senha atual incorreta.", "error");
      }
    } catch (error) {
      showAlert("Erro ao atualizar a senha.", "error");
      console.error("Erro ao alterar senha:", error);
    }
  }
};