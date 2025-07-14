export default {
  getTendenciaVenda: () => {
    const VV = Query_VendasMes_Gestao.data[0]?.total_vendido || 0;
    const DUP = Query_SomaPesoMes_Gestao.data[0]?.total_peso_mes || 1;
    const DUF = Query_PesoFuturo_Gestao.data[0]?.total_peso_futuro || 0;

    const VD = VV / DUP;
    const tendencia = VD * DUF + VV;

    return "<div style='display:flex; flex-direction:column; align-items:center; line-height:1.2;'>\
              <span style='font-size:18px; font-weight:bold;'>" +
              tendencia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +
              "</span>\
              <span style='font-size:14px; margin-top:4px;'>Tendência de Venda</span>\
            </div>";
  },

  getTendenciaAtingimento: () => {
    const VV = Query_VendasMes_Gestao.data[0]?.total_vendido || 0;
    const DUP = Query_SomaPesoMes_Gestao.data[0]?.total_peso_mes || 1;
    const DUF = Query_PesoFuturo_Gestao.data[0]?.total_peso_futuro || 0;
    const meta = Query_MetaMes_Gestao.data[0]?.meta_valor || 1;

    const VD = VV / DUP;
    const tendencia = VD * DUF + VV;
    const percentual = (tendencia / meta) * 100;

    return percentual.toFixed(1);
  },

  getBateMetaTexto: () => {
    const VV = Query_VendasMes_Gestao.data[0]?.total_vendido || 0;
    const DUP = Query_SomaPesoMes_Gestao.data[0]?.total_peso_mes || 1;
    const DUF = Query_PesoFuturo_Gestao.data[0]?.total_peso_futuro || 0;
    const meta = Query_MetaMes_Gestao.data[0]?.meta_valor || 1;

    const VD = VV / DUP;
    const tendencia = VD * DUF + VV;
    const ating = tendencia / meta;

    const texto = ating >= 1
      ? "✅ Sim"
      : ating >= 0.95
      ? "🟡 Quase lá!"
      : "❌ Não";

    return "<div style='display:flex; flex-direction:column; align-items:center; line-height:1.2;'>\
              <span style='font-size:14px;'>Vai Bater a Meta?</span>\
              <span style='font-size:18px; font-weight:bold; margin-top:8px;'>" + texto + "</span>\
            </div>";
  }
};