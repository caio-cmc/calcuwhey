import React from "react";
import Whey from "../Images/whey.png";
import Tabela from "../Images/tabela.png";
import "../Styles/Components/Articles.scss"

function Articles() {
  return (
    <section id="howto" className="articles-main">
      <article className="article">
        <h3 className="title">O que é whey protein?</h3>
        <p className="text">Whey protein é um suplemento popular que oferece uma série de benefícios para a saúde. Como uma fonte de proteína de alta qualidade, ele contém aminoácidos essenciais e BCAAs que promovem o crescimento muscular, a recuperação pós-treino e auxiliam na perda de peso controlando o apetite. Além disso, o whey protein é facilmente absorvido, fornecendo nutrientes essenciais para a reparação muscular e reduzindo o tempo de recuperação. O suplemento também possui efeitos positivos na saúde óssea, aumentando a absorção de cálcio e melhorando a densidade óssea. Além disso, o whey protein contém compostos bioativos que fortalecem o sistema imunológico, ajudando a proteger contra doenças. No geral, o whey protein é uma escolha popular para aqueles que buscam melhorar sua composição corporal, desempenho atlético e saúde geral.</p>
        <p className="text disclaimer">*Sempre consulte seu nutricionista antes de iniciar o uso de qualquer tipo de suplementação.</p>
      </article>
      <aside className="article">
        <h3 className="title">Como usar a Wheyculator</h3>
        <p className="text">Não sabe como achar as informações para usar nossa Wheyculator? É muito simples, basta escolher seu whey favorito, seguir nosso passo-a-passo e nós fazemos todas as contas chatas para você!</p>
        <div className="article-images">
          <img className="article-image" src={ Whey } alt="Embalagem de whey protein" />
          <img className="article-image" src={ Tabela } alt="Tabela nutricional de whey protein" />
        </div>
        <ol className="list">
          <li>Peso total da embalagem (em gramas)</li>
          <li>Peso de cada porção</li>
          <li>Quantidade de proteína por porção</li>
          <li>Pesquisar o preço na sua loja de confiança</li>
        </ol>
      </aside>
    </section>
  );
}

export default Articles;