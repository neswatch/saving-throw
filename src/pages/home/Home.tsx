import WizardImg from "../../assets/img/home/iu.png";
import "../../assets/css/home/home.css";
import OceanBg from "../../assets/img/home/Preview_143.png";
import Step from "./Step.tsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={"home"} style={{ backgroundImage: `url(${OceanBg})` }}>
      <div style={{ backgroundImage: `url(${WizardImg}` }}>
        <Step
          orientation={"UP"}
          severity={"danger"}
          id={"heart-button"}
          onClick={() => navigate("/mj")}
        >
          Coeur
        </Step>
        <Step
          orientation={"DOWN"}
          severity={"info"}
          id={"lungs-button"}
          onClick={() => navigate("/poumon")}
        >
          Poumons
        </Step>
        <Step
          orientation={"LEFT"}
          severity={"success"}
          id={"temperature-button"}
          onClick={() => navigate("/temperature")}
        >
          Température
        </Step>
      </div>
    </div>
  );
}

export default Home;
