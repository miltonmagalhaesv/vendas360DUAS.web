export default {
  getResumoTendencia: () => {
    const VV = Query_VendasMes.data[0]?.total_vendido || 0;
    const DUP = Query_SomaPesoMes.data[0]?.total_peso_mes || 1;
    const DUF = Query_PesoFuturo.data[0]?.total_peso_futuro || 0;
    const meta = Query_MetaVendedorMes.data[0]?.meta_valor || 1;

    const VD = VV / DUP;
    const tendencia = VD * DUF + VV;
    const percentual = (tendencia / meta) * 100;

    let situacao = "";
    let extraTexto = "";

    if (percentual < 85) {
      situacao = "Parece distante da meta, mas ainda dá tempo de virar o jogo.";
    } else if (percentual < 100) {
      situacao = "Você está pertinho da meta — foco nos próximos dias!";
    } else {
      situacao = "🚀 Assim você vai ultrapassar a meta. Continue firme!";
    }

    if (percentual < 100) {
      const falta = meta - tendencia;
      const extra_por_dia = falta / DUF;

      extraTexto = `<br><br>🎯 Pra bater a meta, faltam <b>${falta.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b>.<br>
      Isso significa vender cerca de <b>${extra_por_dia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b> a mais por dia.`;
    }

    return `<div style='text-align:center; font-size:13px; line-height:1.3; margin-top:0; margin-bottom:0;'>
      📊 Com uma média de <b>${VD.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b> por dia, 
      sua tendência de venda aponta para <b>${tendencia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b> — 
      <b>${percentual.toFixed(1)}%</b> da meta.
      ${situacao}
      ${extraTexto}
    </div>`;
  }
};