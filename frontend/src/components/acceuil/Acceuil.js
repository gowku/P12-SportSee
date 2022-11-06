import { useNavigate } from "react-router-dom";

function Acceuil() {
  const navigate = useNavigate();
  const handleWitchUser = (id) => {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userId", id);
    navigate(`/profil/${id}`, { replace: true });
  };

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
    </main>
  );
}

export default Acceuil;
