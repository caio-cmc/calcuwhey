import WheyProvider from "./Context/WheyProvider";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <WheyProvider>
      <MainPage />
    </WheyProvider>
  );
}

export default App;
