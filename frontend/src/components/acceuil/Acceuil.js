import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Acceuil() {
  const navigate = useNavigate();
  const handleWitchUser = (id) => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userId", id);
    navigate(`/profil/${id}`, { replace: true });
  };
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  console.log(checked);

  useEffect(() => {
    localStorage.setItem("useMockedData", checked);
  }, [checked]);

  return (
    <main className="acceuil">
      <div className="acceuil_container">
        <button
          onClick={() => {
            handleWitchUser(12);
          }}
        >
          User 12
        </button>
        <button
          onClick={() => {
            handleWitchUser(18);
          }}
        >
          User 18
        </button>
      </div>
      <div>
        <form>
          <label id="data-mocked"> Utiliser les données mocké ?</label>
          <input type="checkbox" id="data-mocked" checked={checked} onChange={handleChange}></input>
        </form>
      </div>
    </main>
  );
}

export default Acceuil;
