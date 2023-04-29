import React, { useState } from "react";
import WheyContext from "./WheyContext";

function WheyProvider({ children }) {
  const [test, setTest] = useState(true);

  const WheyValue = {
    test,
    setTest
  }

  return (
    <WheyContext.Provider value={ WheyValue }>
      { children }
    </WheyContext.Provider>
  )
};

export default WheyProvider;