export default {
  btn_loginonClick: () => {
    if (verificarLogin.data.length > 0) {
      const user = verificarLogin.data[0];

      storeValue("colaborador_id", user.id);
      storeValue("colaborador_nome", user.nome);
      storeValue("colaborador_usuario", user.nome_usuario);
      storeValue("perfil_usuario", user.perfil); // <- NOVO
			storeValue("pontos_venda", user.pontos_venda_visualizacao || []);

      // Redirecionar com base no perfil
      if (user.perfil === "gestao") {
        navigateTo("Home Gestao");
      } else {
        navigateTo("Home");
      }

      // Modal de meta-dia (apenas para operação, opcional)
      if (user.perfil === "operacao") {
        setTimeout(() => {
          showModal("Modal_MetaDia");
        }, 500);
      }
    } else {
      showAlert("Usuário ou senha incorretos", "error");
    }
  }
};