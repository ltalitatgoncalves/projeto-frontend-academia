// TreinoService.js
import Api from "../api";

class TreinoService extends Api {
  constructor() {
    super("treinos");
  }

  cadastrarTreino(treino, config) {
    return this.post("/cadastrarTreino", treino, config);
  }

  listarTreinos() {
    return this.get("/listarTreinos");
  }

  // Novo método para listar treinos por faixa
  listarTreinosPorFaixa(faixa) {
    return this.get(`/listarTreinosPorFaixa/${faixa}`);
    
  }

  editarTreino(id, treino, config) {
    return this.put(`/editarTreino/${id}`, treino, config);
  }

  obterTreinoPorId(id) {
    return this.get(`/listarTreinos/${id}`);
  }

  excluirTreino(id) {
    return this.delete(`/excluirTreino/${id}`);
  }
}

export default TreinoService;
