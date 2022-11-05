import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Acceuil from "./components/acceuil/Acceuil";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/profil" element={<Dashboard />} />
        <Route path="/reglage" />
        <Route path="communaute" />
      </Routes>
    </>
  );
}

export default App;
