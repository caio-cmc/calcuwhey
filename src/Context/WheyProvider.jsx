import React, { useState } from "react";
import WheyContext from "./WheyContext";

function WheyProvider({ children }) {
  const [comparison, setComparison] = useState(false);
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState();
  const [serving, setServing] = useState();
  const [protein, setProtein] = useState();
  const [price, setPrice] = useState();
  const [calculate, setCalculate] = useState(false);
  const [servingPrice, setServingPrice] = useState();
  const [servingQuant, setServingQuant] = useState();
  const [totalProtein, setTotalProtein] = useState();
  const [proteinConcentration, setProteinConcentration] = useState();
  const [proteinPrice, setProteinPrice] = useState();

  const getServingPrice = (weight, serving, price) => {
    const SP = (price * serving) / weight;
    setServingPrice(SP.toFixed(2));
  }

  const getServingQuant = (weight, serving) => {
    const SQ = weight / serving;
    setServingQuant(Math.round(SQ));
  }

  const getTotalProtein = (weight, serving, protein) => {
    const TP = (weight / serving) * protein;
    setTotalProtein(Math.round(TP));
  }

  const getProteinConcentration = (serving, protein) => {
    const PC = (protein * 100) / serving;
    setProteinConcentration(PC.toFixed(1));
  }

  const getProteinPrice = (weight, serving, protein, price) => {
    const TP = (weight / serving) * protein;
    const PP = (Math.round(TP) * price) / weight;
    setProteinPrice(PP.toFixed(2));
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
    proteinPrice
  }

  return (
    <WheyContext.Provider value={ WheyValue }>
      { children }
    </WheyContext.Provider>
  )
};

export default WheyProvider;