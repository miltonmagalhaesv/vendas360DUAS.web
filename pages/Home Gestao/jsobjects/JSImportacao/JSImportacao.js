export default {
  formatarDataImportacao: () => {
    const data = getUltimaImportacao.data[0]?.data_impo;
    if (!data) return "Data não disponível";

    return moment(data).format("DD/MM/YYYY [às] HH:mm");
  }
}