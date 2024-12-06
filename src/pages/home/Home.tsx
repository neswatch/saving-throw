import WizardImg from "../../assets/img/home/iu2.png";
import "../../assets/css/home/home.css";
import OceanBg from "../../assets/img/home/Preview_143.png";
import Step from "./Step.tsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const finishHearth = localStorage.getItem("heart");
  const finishPoumon = localStorage.getItem("poumon");
  const finishTemp = localStorage.getItem("temp");

  return (
      <div className={"home"} style={{backgroundImage: `url(${OceanBg})`}}>
        <div style={{backgroundImage: `url(${WizardImg}`}}>
          <Step
              orientation={(finishPoumon=="1" && !(finishHearth=="1"))?"UP":"HIDDEN"}
              severity={"danger"}
              id={"heart-button"}
              onClick={() => navigate("/mj")}
              disabled={finishPoumon==null}
          >
            Coeur
          </Step>
          <Step
              orientation={(finishTemp=="1" && finishPoumon==null)?"DOWN":"HIDDEN"}
              severity={"info"}
              id={"lungs-button"}
              onClick={() => navigate("/poumon")}
              disabled={finishTemp==null}
          >
            Poumons
          </Step>
          <Step
              orientation={(finishTemp==null)?"LEFT":"HIDDEN"}
              severity={"success"}
              id={"temperature-button"}
              onClick={() => navigate("/temperature")}
          >
            Température
          </Step>
            {
                (finishHearth=="1")?
                    <Step orientation={"RIGHT"} severity={"success"}  >
                        Le voyage continue !!
                    </Step>
                    :
                    ""
            }

        </div>
        <div id="ecoindex-badge"></div>
        <script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
      </div>
  );
}

export default Home;
