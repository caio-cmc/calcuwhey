import React, { useContext, useEffect } from "react";
import WheyContext from "../Context/WheyContext";
import WheyForm from "../Components/WheyForm";
import CalcButton from "../Components/CalcButton";
import Articles from "../Components/Articles";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ArmCurl from "../Images/arm-curl.png";
import { useInView } from "react-intersection-observer";
import "../Styles/Pages/MainPage.scss"

function MainPage() {
  const { comparison, setComparison, resetForm, setIsScrolled } = useContext(WheyContext);
  const { ref, inView } = useInView();

  useEffect(() => {
    setIsScrolled(inView);
  }, [setIsScrolled, inView]);

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
          <img className="main-curl fade-left" src={ ArmCurl } alt="Homem fazendo exercício de bíceps" />
          <h1 className="main-welcome-title"><span>CALCU</span>WHEY</h1>
          <p className="main-welcome-text">
            Quer saber quanto custa a dose do seu whey? Qual a concentração dele? Saber qual o valor real da proteína? Comparar com outras marcas?
            <br />
            Aqui está a CalcuWhey! Para facilitar sua decisão e a sua vida!
          </p>
        </div>
      </main>
      <div ref={ ref }>
        {/* descrições e informações */}
        <Articles />
        {/* formulario de informações da proteína, usar o estado de comparação para renderizar ou não o segundo formulário */}
        <section id="calculator" className="main-calculator">
          <div className="main-forms">
            <div className="forms-wrap">
              <WheyForm ind="0" />
              {
                comparison ? 
                  <WheyForm ind="1" />
                  :
                  <button data-testid="compare-test" className="compare-button" onClick={ HandleComp }>
                    Comparar
                  </button>
              }
            </div>
            <div className="main-forms-button">
              {
                comparison && <CalcButton ind={["0", "1"]} />
              }
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer /> 
      </div>
      
    </div>
  );
}

export default MainPage;