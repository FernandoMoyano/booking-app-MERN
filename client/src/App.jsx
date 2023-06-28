import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
