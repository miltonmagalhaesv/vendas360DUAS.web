export default {
  menu: [
    {
      label: "Home",
      icon: "home",
      page: "Home"
    },
    {
      label: "Análises",
      icon: "bar-chart",
      page: "Analises"
    },
    {
      label: "Metas",
      icon: "target",
      subMenu: [
        { label: "Ver Metas", page: "VerMetas" },
        { label: "Análise de Metas", page: "AnaliseMetas" },
        { label: "Cadastrar Meta", page: "CadastrarMeta" }
      ]
    }
  ]
}