import React, { useState } from "react";
import WheyContext from "./WheyContext";

function WheyProvider({ children }) {
  const [comparison, setComparison] = useState(false);
  const [brand, setBrand] = useState(["", ""]);
  const [weight, setWeight] = useState(["", ""]);
  const [serving, setServing] = useState(["", ""]);
  const [protein, setProtein] = useState(["", ""]);
  const [price, setPrice] = useState(["", ""]);
  const [calculate, setCalculate] = useState(false);
  const [servingPrice, setServingPrice] = useState(["", ""]);
  const [servingQuant, setServingQuant] = useState(["", ""]);
  const [totalProtein, setTotalProtein] = useState(["", ""]);
  const [proteinConcentration, setProteinConcentration] = useState(["", ""]);
  const [proteinPrice, setProteinPrice] = useState(["", ""]);

  const updateArray = (array, value, index) => {
    let dumArr = array.slice();
    dumArr[index] = value;
    return dumArr;
  }

  const getServingPrice = (weight, serving, price, index) => {
    const SP = (price * serving) / weight;
    const newValue = updateArray(servingPrice, SP.toFixed(2), index);
    setServingPrice(newValue);
  }

  const getServingQuant = (weight, serving, index) => {
    const SQ = weight / serving;
    const newValue = updateArray(servingQuant, Math.round(SQ), index);
    setServingQuant(newValue);
  }

  const getTotalProtein = (weight, serving, protein, index) => {
    const TP = (weight / serving) * protein;
    const newValue = updateArray(totalProtein, Math.round(TP), index);
    setTotalProtein(newValue);
  }

  const getProteinConcentration = (serving, protein, index) => {
    const PC = (protein * 100) / serving;
    const newValue = updateArray(proteinConcentration, PC.toFixed(1), index);
    setProteinConcentration(newValue);
  }

  const getProteinPrice = (weight, serving, protein, price, index) => {
    const TP = (weight / serving) * protein;
    const PP = (Math.round(TP) * price) / weight;
    const newValue = updateArray(proteinPrice, PP.toFixed(2), index);
    setProteinPrice(newValue);
  }

  const WheyValue = {
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
  }

  return (
    <WheyContext.Provider value={ WheyValue }>
      { children }
    </WheyContext.Provider>
  )
};

export default WheyProvider;