import {Routes,Route}from "react-router-dom"
import IndexPages from "./pages/IndexPages";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPages/>}></Route>
    </Routes>
   
  );
}

export default App;
