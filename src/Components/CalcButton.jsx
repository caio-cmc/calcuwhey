import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";

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
    getResults
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
    <button onClick={ calculate ? resetForm : handleCalc }>
      { calculate ? "Refazer" : "Calcular" }
    </button>
  );
}

export default CalcButton;