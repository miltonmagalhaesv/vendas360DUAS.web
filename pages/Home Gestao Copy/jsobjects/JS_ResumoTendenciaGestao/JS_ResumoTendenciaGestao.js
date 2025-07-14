export default {
  getResumoTendencia: () => {
    const VV = Query_VendasMes_Gestao.data[0]?.total_vendido || 0;
    const DUP = Query_SomaPesoMes_Gestao.data[0]?.total_peso_mes || 1;
    const DUF = Query_PesoFuturo_Gestao.data[0]?.total_peso_futuro || 0;
    const meta = Query_MetaMes_Gestao.data[0]?.meta_valor || 1;

    const VD = VV / DUP;
    const tendencia = VD * DUF + VV;
    const percentual = (tendencia / meta) * 100;

    let situacao = "";
    let extraTexto = "";

    if (percentual < 85) {
      situacao = "📉 A tendência atual está distante da meta. Ainda dá tempo de replanejar e impulsionar os resultados.";
    } else if (percentual < 100) {
      situacao = "⚠️ O cenário mostra uma possível aproximação da meta. É hora de reforçar estratégias com o time.";
    } else {
      situacao = "🚀 Se mantido o ritmo, o time deve superar a meta do mês. Acompanhe de perto e celebre cada avanço.";
    }

    if (percentual < 100) {
      const falta = meta - tendencia;
      const extra_por_dia = DUF > 0 ? falta / DUF : 0;

      extraTexto = `<br><br>📌 Para atingir a meta, ainda faltam <b>${falta.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b>.<br>
        Isso representa um esforço médio adicional de <b>${extra_por_dia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b> por dia útil restante.`;
    }

    return `<div style="text-align:center; font-size:16px; line-height:1.4; font-family:sans-serif;">
      💡 Com uma média de <b>${VD.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b> por dia, a projeção indica 
      <b>${tendencia.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</b>, equivalente a <b>${percentual.toFixed(1)}%</b> da meta.<br>
      ${situacao}
      ${extraTexto}
    </div>`;
  }
}