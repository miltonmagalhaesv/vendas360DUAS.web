export default {
  checkSession: () => {
    if (!appsmith.store.colaborador_nome || !appsmith.store.colaborador_id) {
      navigateTo("Login");
    }
  }
}