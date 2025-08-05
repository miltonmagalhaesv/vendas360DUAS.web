export default {
  registrarDias: async () => {
    await checkExistenciaMes.run();

    if (checkExistenciaMes.data[0].registros == 0) {
      try {
        await insertDiasMes.run();
        showAlert("Dias registrados com sucesso!", "success");

        // Atualiza a tabela
        await getHorarios.run();
      } catch (e) {
        showAlert("Erro ao registrar dias", "error");
      }
    } else {
      showAlert("Esse mês já foi registrado para esse ponto de venda.", "warning");
    }
  }
};