import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import "../Styles/Components/CalcButton.scss"

function CalcButton(props) {
  const {
    comparison,
    weight,
    serving,
    protein,
    price,
    calculate,
    setCalculate,
    resetForm,
    getResults,
    isDisabled
  } = useContext(WheyContext);

  const { ind } = props;

  const handleCalc = (event) => {
    event.preventDefault();
    if (comparison) {
      getResults(weight, serving, protein, price, ind);
      setCalculate(true);
    } else {
      getResults(weight[ind], serving[ind], protein[ind], price[ind], ind);
      setCalculate(true);
    }
  }

  return (
    <button className="form-button" onClick={ calculate ? resetForm : handleCalc } disabled={ isDisabled }>
      { calculate ? "Refazer" : "Calcular" }
    </button>
  );
}

export default CalcButton;