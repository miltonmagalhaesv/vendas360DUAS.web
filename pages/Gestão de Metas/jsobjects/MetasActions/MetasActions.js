export default {
  async salvarMetas() {
    // Primeiro, verificar duplicidade antes de inserir
    // Executa uma query de validação para cada vendedor selecionado
    let duplicados = [];
    for (let id of MultiSelect_Vendedor.selectedOptionValues) {
      // Execute uma query de validação para este vendedor
      let result = await ValidarMeta.run({
        colaborador_id: id,
        loja_id: Select_PDV.selectedOptionValue,
        mes: Select_Mes.selectedOptionValue,
        ano: Select_Ano.selectedOptionValue,
      });
      if (result && result.length > 0) {
        // Duplicado encontrado
        duplicados.push({ id, nome_vendedor: result[0].nome_vendedor });
      }
    }

    if (duplicados.length > 0) {
      // Existe duplicidade! Abre modal de confirmação listando quem já tem meta cadastrada
      storeValue("duplicados_metas", duplicados);
      showModal('Modal_Duplicidade');
      return;
    }

    // Se não há duplicados, insere as metas normalmente
    await Promise.all(
      MultiSelect_Vendedor.selectedOptionValues.map(id =>
        InsertMeta.run({
          colaborador_id: id,
          loja_id: Select_PDV.selectedOptionValue,
          mes: Select_Mes.selectedOptionValue,
          ano: Select_Ano.selectedOptionValue,
          tipo_meta: Select_Tipo_Meta.selectedOptionValue,
          meta_valor: Input_Valor_Meta.text,
          observacao: Input_Observacao.text
        })
      )
    );
    showAlert('Metas salvas com sucesso!', 'success');
    closeModal('ModalCadastroMeta');
  }
}