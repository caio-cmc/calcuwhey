import React, { useContext } from "react";
import WheyContext from "../Context/WheyContext";
import CalcButton from "./CalcButton";
import "../Styles/Components/WheyForm.scss"

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
    updateArray,
    resetForm
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
    resetForm(event);
    setComparison(false);
  }

  return (
    <form className="whey-main">
      <div className={`whey-conditionals-${ind}`}>
        { i === 1 &&
          <button onClick={ closeForm } className="whey-closebtn">
            X
          </button>
        }
        {
          calculate ? (
            <div className="whey-info-wrap">
              <p className="whey-info">{ `Informações do whey ${ brand[i] }:` }</p>
              <p className="whey-info">{ `Rende ${ servingQuant[i] } porções por embalagem` }</p>
              <p className="whey-info">{ `Preço por porção: R$ ${ servingPrice[i] }` }</p>
              <p className="whey-info">{ `Cada embalagem possui ${ totalProtein[i] }g de proteína, tendo assim uma concentração de ${ proteinConcentration[i] }%` }</p>
              <p className="whey-info">{ `Você paga R$ ${proteinPrice[i]} só pela proteína do produto` }</p>
            </div>
          )
        :
          (
            <div className="whey-form-main">
              <label className="whey-labels">
                Marca:
                <br />
                <input
                  className="whey-inputs" 
                  type="text"
                  value={ brand[i] }
                  onChange={ handleBrand }
                  required
                  />
              </label>
              <label className="whey-labels">
                Quantidade em gramas:
                <br />
                <input
                  className="whey-inputs"
                  type="number"
                  value={ weight[i] }
                  onChange={ handleWeight }
                  required
                  />
              </label>
              <label className="whey-labels">
                Porção em gramas:
                <br />
                <input
                  className="whey-inputs"
                  type="number"
                  value={ serving[i] }
                  onChange={ handleServing }
                  required
                  />
              </label>
              <label className="whey-labels">
                Proteína por porção:
                <br />
                <input
                  className="whey-inputs"
                  type="number"
                  value={ protein[i] }
                  onChange={ handleProtein }
                  required
                  />
              </label>
              <label className="whey-labels">
                Preço:
                <br />
                <input
                  className="whey-inputs"
                  type="number"
                  value={ price[i] }
                  onChange={ handlePrice }
                  required
                  />
              </label>
            </div>
        ) }
        { !comparison && <CalcButton ind={ i } />}
      </div>
    </form>
  );
}

export default WheyForm;