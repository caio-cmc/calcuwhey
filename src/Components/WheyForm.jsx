import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";

function WheyForm(props) {
  const {
    setComparison,
    brand,
    setBrand,
    weight,
    setWeight,
    serving,
    setServing,
    protein,
    setProtein,
    price,
    setPrice,
    calculate,
    setCalculate,
    getServingPrice,
    servingPrice,
    getServingQuant,
    servingQuant,
    getTotalProtein,
    totalProtein,
    getProteinConcentration,
    proteinConcentration,
    getProteinPrice,
    proteinPrice,
    updateArray
  } = useContext(WheyContext);

  const { ind } = props;
  const i = Number(ind);

  const handleBrand = (event) => {
    const { value } = event.target;
    const newValue = updateArray(brand, value, i);
    setBrand(newValue);
  }

  const handleWeight = (event) => {
    const { value } = event.target;
    const newValue = updateArray(weight, value, i);
    setWeight(newValue);
  }

  const handleServing = (event) => {
    const { value } = event.target;
    const newValue = updateArray(serving, value, i);
    setServing(newValue);
  }

  const handleProtein = (event) => {
    const { value } = event.target;
    const newValue = updateArray(protein, value, i);
    setProtein(newValue);
  }

  const handlePrice = (event) => {
    const { value } = event.target;
    const newValue = updateArray(price, value, i);
    setPrice(newValue);
  }

  const closeForm = (event) => {
    event.preventDefault();
    setComparison(false);
  }

  const handleCalc = (event) => {
    event.preventDefault();
    setCalculate(true);
    getServingPrice(weight[i], serving[i], price[i], i);
    getServingQuant(weight[i], serving[i], i);
    getTotalProtein(weight[i], serving[i], protein[i], i);
    getProteinConcentration(serving[i], protein[i], i);
    getProteinPrice(weight[i], serving[i], protein[i], price[i], i);
  }

  return (
    <form>
      { i === 1 &&
        <button onClick={ closeForm }>
          X
        </button>
      }
      <label>
        Marca:
        <input 
          type="text"
          value={ brand[i] }
          onChange={ handleBrand }
        />
      </label>
      <label>
        Quantidade em gramas:
        <input
          type="number"
          value={ weight[i] }
          onChange={ handleWeight }
        />
      </label>
      <label>
        Porção em gramas:
        <input
          type="number"
          value={ serving[i] }
          onChange={ handleServing }
        />
      </label>
      <label>
        Proteína por porção:
        <input
          type="number"
          value={ protein[i] }
          onChange={ handleProtein }
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={ price[i] }
          onChange={ handlePrice }
        />
      </label>
      <button onClick={ handleCalc }>
        Calcular
      </button>
      {
        calculate && (
          <div>
            <p>{ `Informações do whey ${ brand[i] }:` }</p>
            <p>{ `Rende ${ servingQuant[i] } porções por embalagem` }</p>
            <p>{ `Preço por porção: R$ ${ servingPrice[i] }` }</p>
            <p>{ `Cada embalagem possui ${ totalProtein[i] }g de proteína, tendo assim uma concentração de ${ proteinConcentration[i] }%` }</p>
            <p>{ `Você paga R$ ${proteinPrice[i]} só por a  proteína do produto` }</p>
          </div>
        )
      }
    </form>
  );
}

export default WheyForm;