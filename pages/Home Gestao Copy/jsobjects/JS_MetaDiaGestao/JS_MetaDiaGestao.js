export default {
  metaDiaGestao: () => {
    const M = Query_MetaDia_Gestao.data[0]?.meta_valor || 0;
    const FP = Query_FaturamentoAteDiaAnterio.data[0]?.faturamento_passado || 0;
    const DF = Query_PesoFuturo_ResumoDia.data[0]?.total_peso_futuro || 1;

    const NF = M - FP;
    const MD = DF > 0 ? NF / DF : 0;

    return MD;
  }
};