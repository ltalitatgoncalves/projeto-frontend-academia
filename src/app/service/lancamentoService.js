// import Api from '../api'

// import ErrosValidacaoException from './errosValidacao'

// class LancamentoService extends Api {
//   constructor(){
//     super('/api/lancamentos');
//   }

//   getMonths(){
//     return [
//       { label: 'Selecione o mês',  value: '' },
//       { label: 'Janeiro',    value: 1  },
//       { label: 'Fevereiro',  value: 2  },
//       { label: 'Março',      value: 3  },
//       { label: 'Abril',      value: 4  },
//       { label: 'Maio',       value: 5  },
//       { label: 'Junho',      value: 6  },
//       { label: 'Julho',      value: 7  },
//       { label: 'Agosto',     value: 8  },
//       { label: 'Setembro',   value: 9  },
//       { label: 'Outubro',    value: 10 },
//       { label: 'Novembro',   value: 11 },
//       { label: 'Dezembro',   value: 12 },
//     ];
//   }

//   getTypeLaunch(){
//     return [
//       { label: 'Selecione a Faixa',  value: '' },
//       { label: 'Branca',    value: 'Branca'  },
//       { label: 'Amarela ',    value: 'Amarela '  },
//       { label: 'Laranja',    value: 'Laranja'  },
//       { label: 'Verde ',    value: 'Verde'  },
//       { label: 'Azul',    value: 'BraAzulnca'  },
//       { label: 'Roxo',    value: 'Roxo'  },
//       { label: 'Marrom',    value: 'Marrom'  },
//       { label: 'Preta',    value: 'Preta'  },
      
//     ];
//   }

//   salvar(lancamento) {
//     return this.post('/', lancamento);
//   }

//   atualizar(lancamento){
//     return this.put(`/${lancamento.id}`, lancamento);
//   }

//   consultar(filtro) {

//     let params = `?usuario=${filtro.usuario}`;

//     if(filtro.nome) 
//       params += `&ano=${filtro.nome}`;

//     if(filtro.faixa)
//       params += `&mes=${filtro.faixa}`;

//     // if(filtro.tipoLancamento)
//     //   params += `&tipo=${filtro.tipoLancamento}`;

//     // if(filtro.descricao)
//     //   params += `&descricao=${filtro.descricao}`;

//     return this.get(params);
//   }

//   alterarStatus(id, status){
//     return this.put(`/${id}/atualizar-status`, { status });
//   }

//   deleteById(id){
//     return this.delete(`/${id}`);
//   }

//   getById(id) {
//     return this.get(`/${id}`);
//   }

//   validateFields(lancamento){
//     const erros = []

//     if(!lancamento.nome){
//       erros.push('Informe o nome')
//     }

//     if(!lancamento.faixa){
//       erros.push( 'Informe a faixa');
//     }
      
//     // if(!lancamento.mes){
//     //   erros.push('Informe o mês');
//     // }

//     // if(!lancamento.valor){
//     //   erros.push('Informe o valor');
//     // }

//     // if(!lancamento.tipo){
//     //   erros.push('Informe o tipo de lancamento');
//     // }

//     if(erros && erros.length > 0){
//       throw new ErrosValidacaoException(erros)
//     }
//   }

// }

// export default LancamentoService;