import React, { useContext } from 'react';
import WheyContext from '../Context/WheyContext';
import WheyForm from '../Components/WheyForm';
import CalcButton from '../Components/CalcButton';
import Articles from '../Components/Articles';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../Styles/Pages/MainPage.scss"

function MainPage() {
  const { comparison, setComparison, resetForm } = useContext(WheyContext);

  const HandleComp = (event) => {
    event.preventDefault();
    resetForm(event);
    setComparison(true);
  }

  return (
    <div className="entire-page">
      <main id="main" className="main-view">
        {/* header */}
        <Header />
        <div className="main-welcome">
          <h1 className="main-welcome-title">WheyCulator</h1>
          <p className="main-welcome-text">Quer saber quanto custa a dose do seu whey? Qual a concentração dele? Saber qual o valor real da proteína? Comparar com outras marcas? É para isso que estamos aqui, para facilitar sua decisão e a sua vida!</p>
        </div>
      </main>
      {/* descrições e informações */}
      <Articles />
      {/* formulario de informações da proteína, usar o estado de comparação para renderizar ou não o segundo formulário */}
      <section id="calculator">
        <WheyForm ind="0" />
        {
          comparison ? 
            <WheyForm ind="1" />
            :
            <button onClick={ HandleComp }>
              Comparar
            </button>
        }
        {
          comparison && <CalcButton ind={["0", "1"]} />
        }
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default MainPage;