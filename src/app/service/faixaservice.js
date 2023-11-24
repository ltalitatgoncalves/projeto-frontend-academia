// TreinoService.js
import Api from "../api";

class FaixaService extends Api {
  constructor() {
    super("faixas");
  }


  listarFaixas() {
    return this.get("/listarFaixas");
  }

 
}

export default FaixaService;
