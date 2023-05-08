import React, { useContext } from 'react';
import WheyContext from '../Context/WheyContext';
import WheyForm from '../Components/WheyForm';
import CalcButton from '../Components/CalcButton';

function MainPage() {
  const { comparison, setComparison, resetForm } = useContext(WheyContext);

  const HandleComp = (event) => {
    event.preventDefault();
    resetForm(event);
    setComparison(true);
  }

  return (
    <main>
      <div className="main-view">
        {/* header */}
        <h1>WheyCulator</h1>
        <p>Quer saber quanto custa a dose do seu whey? Qual a concentração dele? Saber qual o valor real da proteína? Comparar com outras marcas? É para isso que estamos aqui, para facilitar sua decisão e a sua vida!</p>
      </div>
      {/* descrições e informações */}
      {/* formulario de informações da proteína, usar o estado de comparação para renderizar ou não o segundo formulário */}
      <div>
        <WheyForm ind="0" />
        {
          comparison ? 
            <WheyForm ind="1" />
            :
            <button onClick={ HandleComp }>
              Comparar
            </button>
        }
      </div>
      {
        comparison && <CalcButton ind={["0", "1"]} />
      }
      {/* footer */}
    </main>
  );
}

export default MainPage;