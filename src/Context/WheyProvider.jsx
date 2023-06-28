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
  
  const resetForm = (event) => {
    const defaultState = ["", ""];
    event.preventDefault();
    setWeight(defaultState);
    setServing(defaultState);
    setProtein(defaultState);
    setPrice(defaultState);
    setBrand(defaultState);
    setServingPrice(defaultState);
    setServingQuant(defaultState);
    setTotalProtein(defaultState);
    setProteinConcentration(defaultState);
    setProteinPrice(defaultState);
    setCalculate(false);
  }
  
  const getServingPrice = (weight, serving, price, index) => {
    if (index.length > 1) {
      let arr = [];
      index.map((i) => {
        const SP = (price[i] * serving[i]) / weight[i];
        return arr.push(SP.toFixed(2));
      });
      setServingPrice(arr);
    } else {
      const SP = (price * serving) / weight;    
      const newValue = updateArray(servingPrice, SP.toFixed(2), index);
      setServingPrice(newValue);
    }
  }

  const getServingQuant = (weight, serving, index) => {
    if (index.length > 1) {
      let arr = [];
      index.map((i) => {
        const SQ = weight[i] / serving[i];
        return arr.push(Math.round(SQ));
      });
      setServingQuant(arr);
    } else {
      const SQ = weight / serving;   
      const newValue = updateArray(servingQuant, Math.round(SQ), index);
      setServingQuant(newValue);
    }
  }

  const getTotalProtein = (weight, serving, protein, index) => {
    if (index.length > 1) {
      let arr = []
      index.map((i) => {
        const TP = (weight[i] / serving[i]) * protein[i];
        return arr.push(Math.round(TP));
      })
      setTotalProtein(arr);
    } else {
      const TP = (weight / serving) * protein;
      const newValue = updateArray(totalProtein, Math.round(TP), index);
      setTotalProtein(newValue);
    }
  }

  const getProteinConcentration = (serving, protein, index) => {
    if (index.length > 1) {
      let arr = []
      index.map((i) => {
        const PC = (protein[i] * 100) / serving[i];
        return arr.push(PC.toFixed(1));
      })
      setProteinConcentration(arr);
    } else {
      const PC = (protein * 100) / serving;
      const newValue = updateArray(proteinConcentration, PC.toFixed(1), index);
      setProteinConcentration(newValue);
    }
  }

  const getProteinPrice = (weight, serving, protein, price, index) => {
    if (index.length > 1) {
      let arr = []
      index.map((i) => {
        const TP = (weight[i] / serving[i]) * protein[i];
        const PP = (Math.round(TP) * price[i]) / weight[i];
        return arr.push(PP.toFixed(2));
      })
      setProteinPrice(arr);
    } else {
      const TP = (weight / serving) * protein;
      const PP = (Math.round(TP) * price) / weight;
      const newValue = updateArray(proteinPrice, PP.toFixed(2), index);
      setProteinPrice(newValue);
    }
  }

  const getResults = (weight, serving, protein, price, index) => {
    getServingPrice(weight, serving, price, index);
    getServingQuant(weight, serving, index);
    getTotalProtein(weight, serving, protein, index);
    getProteinConcentration(serving, protein, index);
    getProteinPrice(weight, serving, protein, price, index);
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
    servingPrice,
    servingQuant,
    totalProtein,
    proteinConcentration,
    proteinPrice,
    updateArray,
    resetForm,
    getResults
  }

  return (
    <WheyContext.Provider value={ WheyValue }>
      { children }
    </WheyContext.Provider>
  )
};

export default WheyProvider;