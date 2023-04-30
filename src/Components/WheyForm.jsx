import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";

function WheyForm() {
  const { 
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
    proteinPrice
  } = useContext(WheyContext);

  const handleBrand = (event) => {
    const { value } = event.target;
    setBrand(value);
  }

  const handleWeight = (event) => {
    const { value } = event.target;
    setWeight(value);
  }

  const handleServing = (event) => {
    const { value } = event.target;
    setServing(value);
  }

  const handleProtein = (event) => {
    const { value } = event.target;
    setProtein(value);
  }

  const handlePrice = (event) => {
    const { value } = event.target;
    setPrice(value);
  }

  const handleCalc = (event) => {
    event.preventDefault();
    setCalculate(true);
    getServingPrice(weight, serving, price);
    getServingQuant(weight, serving);
    getTotalProtein(weight, serving, protein);
    getProteinConcentration(serving, protein);
    getProteinPrice(weight, serving, protein, price);
  }

  return (
    <form>
      <label>
        Marca:
        <input 
          type="text"
          value={ brand }
          onChange={ handleBrand }
        />
      </label>
      <label>
        Quantidade em gramas:
        <input
          type="number"
          value={ weight }
          onChange={ handleWeight }
        />
      </label>
      <label>
        Porção em gramas:
        <input
          type="number"
          value={ serving }
          onChange={ handleServing }
        />
      </label>
      <label>
        Proteína por porção:
        <input
          type="number"
          value={ protein }
          onChange={ handleProtein }
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={ price }
          onChange={ handlePrice }
        />
      </label>
      <button onClick={ handleCalc }>
        Calcular
      </button>
      {
        calculate && (
          <div>
            <p>{ `Informações do whey ${ brand }:` }</p>
            <p>{ `Rende ${ servingQuant } porções por embalagem` }</p>
            <p>{ `Preço por porção: R$ ${ servingPrice }` }</p>
            <p>{ `Cada embalagem possui ${ totalProtein }g de proteína, tendo assim uma concentração de ${ proteinConcentration }%` }</p>
            <p>{ `Você paga R$ ${proteinPrice} só por a  proteína do produto` }</p>
          </div>
        )
      }
    </form>
  );
}

export default WheyForm;