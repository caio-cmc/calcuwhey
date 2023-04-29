import React, { useContext } from 'react';
import WheyContext from '../Context/WheyContext';

function MainPage() {
  const { test, setTest } = useContext(WheyContext);

  const testmaker = () => {
    if (test) {
      setTest(false);
    } else {
      setTest(true);
    }
  }

  return (
    <main>
      <button onClick={ testmaker }>
        { `teste ${ test }` }
      </button>
    </main>
  );
}

export default MainPage;