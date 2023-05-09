import WheyProvider from "./Context/WheyProvider";
import MainPage from "./Pages/MainPage";
import "./Styles/General.scss"

function App() {
  return (
    <WheyProvider>
      <MainPage />
    </WheyProvider>
  );
}

export default App;
