import { BonecoGrande, BonecoPequeno } from "./components/Bonecos";
import "./style.css";

function App() {
  return (
    <main>
      <h1 className="titulo-1">Jogo de RPG - StickHero</h1>

      <div className="moldura" role="img" aria-label="Boneco pequeno">
        <BonecoPequeno />
      </div>

      <div className="moldura" role="img" aria-label="Boneco grande">
        <BonecoGrande />
      </div>

      <div className="container-bonecos">
        <div className="container-barra-de-vida">
          <div className="barra-de-vida-boneco-pequeno"></div>
          <div className="barra-de-vida-boneco-grande"></div>
        </div>
      </div>
      <p className="paragrafo"></p>

      <div className="acoes">
        <button className="botao-acao botao-atacar">Atacar</button>
        <button className="botao-acao botao-defender">Defender</button>
        <button className="botao-acao botao-curar">Curar</button>
      </div>
    </main>
  );
}

export default App;
