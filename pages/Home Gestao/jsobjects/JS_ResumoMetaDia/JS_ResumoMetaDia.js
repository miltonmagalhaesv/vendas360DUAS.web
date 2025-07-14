export default {
  gerarResumoMeta: () => {
    const VM = Query_MetaDia_Gestao.data[0]?.meta_valor || 0;
    const VP = Query_FaturamentoAteDiaAnterio.data[0]?.faturamento_passado || 0;
    const DF = Query_PesoFuturo_ResumoDia.data[0]?.total_peso_futuro || 1;
    const vendidoHoje = Query_VendasHoje_Gestao.data[0]?.total_vendido_dia || 0;

    const NF = VM - VP;
    const metaDia = DF > 0 ? NF / DF : 0;
    const metaAtualizada = Math.max(metaDia - vendidoHoje, 0);
    const percentual = metaDia > 0 ? (vendidoHoje / metaDia) * 100 : 0;

    const dataSelecionada = moment(DatePicker_ResumoDia.selectedDate);
    const hoje = moment();
    const dataFormatada = dataSelecionada.format("DD/MM/YYYY");

    const ehHoje = dataSelecionada.isSame(hoje, "day");

    const texto = `<div style='text-align:center; font-size:13px; line-height:1.5;'>
      ${
        ehHoje
          ? `Hoje, sua meta de vendas está em <span style="color:#2D6CDF;">${metaDia.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</span>.`
          : `No dia <span style="color:#2D6CDF;">${dataFormatada}</span>, a meta prevista era de <span style="color:#2D6CDF;">${metaDia.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</span>.`
      }<br>
      ${
        ehHoje
          ? `Até o momento, foram vendidos <span style="color:#2D6CDF;">${vendidoHoje.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</span>, o que equivale a <span style="color:#2D6CDF;">${percentual.toFixed(1)}%</span> da meta.<br>`
          : `Neste dia, foram vendidos <span style="color:#2D6CDF;">${vendidoHoje.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</span>, o que representou <span style="color:#2D6CDF;">${percentual.toFixed(1)}%</span> da meta.<br>`
      }
      ${
        metaAtualizada > 0
          ? ehHoje
            ? `Ainda restam <span style="color:#E86E2E; font-size:16px;">${metaAtualizada.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</span> para que a meta seja totalmente alcançada.<br>
               <span style="font-style: italic;">Ainda dá tempo de chegar lá.</span>`
            : `Faltou <span style="color:#E86E2E; font-size:16px;">${metaAtualizada.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</span> para que a meta fosse totalmente alcançada.`
          : `<span style="color:green;">Meta atingida — excelente desempenho!</span>`
      }
    </div>`;

    return texto;
  }
};