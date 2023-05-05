import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import CalcButton from "./CalcButton";

function WheyForm(props) {
  const {
    comparison,
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
    servingPrice,
    servingQuant,
    totalProtein,
    proteinConcentration,
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
          required
        />
      </label>
      <label>
        Quantidade em gramas:
        <input
          type="number"
          value={ weight[i] }
          onChange={ handleWeight }
          required
        />
      </label>
      <label>
        Porção em gramas:
        <input
          type="number"
          value={ serving[i] }
          onChange={ handleServing }
          required
        />
      </label>
      <label>
        Proteína por porção:
        <input
          type="number"
          value={ protein[i] }
          onChange={ handleProtein }
          required
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={ price[i] }
          onChange={ handlePrice }
          required
        />
      </label>
      { !comparison && <CalcButton ind={ i } />}
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