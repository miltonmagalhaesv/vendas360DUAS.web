export default {
  metaDiaResumo: () => {
    const VM = Query_MetaVendedorMes.data[0]?.meta_valor || 0;
    const VV = Query_VendasMes.data[0]?.total_vendido || 0;
    const VD_Hoje = Query_VendasHoje.data[0]?.total_vendido_dia || 0; // <- Aqui é a mudança
    const DUF = Query_PesoFuturo.data[0]?.total_peso_futuro || 1;

    const VF = VM - VV;
    const metaDia = VF / DUF;
    const faltanteHoje = metaDia - VD_Hoje;

    return {
      metaDia,
      VD_Hoje,
      faltanteHoje,
      frase: faltanteHoje <= 0
        ? "✅ Você já bateu a meta do dia! Agora é hora de superar!"
        : "⚡ Hoje você precisa vender <b>" + faltanteHoje.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + "</b> para seguir no ritmo certo."
    };
  }
}