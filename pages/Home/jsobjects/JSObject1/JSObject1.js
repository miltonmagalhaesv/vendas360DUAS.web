export default {
  logout: () => {
    removeValue("colaborador_id");
    removeValue("colaborador_nome");
    navigateTo("Login"); // redireciona para a tela de login
  }
}