import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
