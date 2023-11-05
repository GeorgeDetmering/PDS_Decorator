// Interface que define o contrato para um sanduíche.
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
  }
  
  // Classe base que implementa o sanduíche de frango assado.
  class FrangoAssado implements Sanduiche {
    getDescricao(): string {
      return 'Sanduíche de frango assado';
    }
  
    getCusto(): number {
      return 4.50;
    }
  }
  
  // Decorator para adicionar peperoni ao sanduíche.
  class Peperoni implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}
  
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ', peperoni';
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  // Decorator para adicionar queijo mussarela ralado ao sanduíche.
  class QueijoMussarelaRalado implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}
  
    getDescricao(): string {
      return this.sanduiche.getDescricao() + ', queijo mussarela ralado';
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 2.00;
    }
  }
  
  // Função para imprimir as informações do sanduíche.
  function imprimirSanduiche(sanduiche: Sanduiche) {
    console.log(`${sanduiche.getDescricao()} custa $${sanduiche.getCusto().toFixed(2)}`);
  }
  
  // Crie um sanduíche de frango assado base.
  const sanduiche = new FrangoAssado();
  
  // Decore o sanduíche com peperoni e queijo mussarela ralado.
  const sanduicheDecorado = new QueijoMussarelaRalado(new Peperoni(sanduiche));
  
  // Imprima as informações do sanduíche decorado.
  imprimirSanduiche(sanduicheDecorado);
  