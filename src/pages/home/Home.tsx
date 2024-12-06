import WizardImg from "../../assets/img/home/iu2.png";
import "../../assets/css/home/home.css";
import OceanBg from "../../assets/img/home/Preview_143.png";
import Step from "./Step.tsx";
import { useNavigate } from "react-router-dom";

function createLightAnimation(buttonId: string) {
  const button = document.getElementById(buttonId);
  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", () => {
    const rect = button.getBoundingClientRect();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Nombre de particules à générer
    const particleCount = 500; // Ajuste pour plus ou moins de particules

    // 1. Créer des particules sur tout l'écran
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "light-particle";

      // Position aléatoire
      const randomX = Math.random() * screenWidth;
      const randomY = Math.random() * screenHeight;

      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;

      document.body.appendChild(particle);

      // Trajectoire finale vers le bas
      const finalY = Math.random() * screenHeight + 100; // Distance vers le bas (aléatoire)
      particle.style.setProperty("--finalY", `${finalY}px`);
    }

    // 2. Create expanding light effect
    const lightBall = document.createElement("div");
    lightBall.className = "light-ball";
    lightBall.style.left = `${rect.left + rect.width / 2}px`;
    lightBall.style.top = `${rect.top + rect.height / 2}px`;
    document.body.appendChild(lightBall);

    // Start expansion immediately
    setTimeout(() => {
      lightBall.style.transform = "scale(250)";
      lightBall.style.opacity = "0"; // Fade out
    }, 100);

    // Remove the light ball after animation
    setTimeout(() => {
      lightBall.remove();
      window.location.href = "/about";
    }, 5000); // Adjust for full animation + fade out
  });
}

function Home() {
  const navigate = useNavigate();

  const finishHearth = localStorage.getItem("heart");
  const finishPoumon = localStorage.getItem("poumon");
  const finishTemp = localStorage.getItem("temp");

  return (
    <div className={"home"} style={{ backgroundImage: `url(${OceanBg})` }}>
      <div style={{ backgroundImage: `url(${WizardImg}` }}>
        <Step
          orientation={
            finishPoumon == "1" && !(finishHearth == "1") ? "UP" : "HIDDEN"
          }
          severity={"danger"}
          id={"heart-button"}
          onClick={() => navigate("/mj")}
          disabled={finishPoumon == null}
        >
          Coeur
        </Step>
        <Step
          orientation={
            finishTemp == "1" && finishPoumon == null ? "DOWN" : "HIDDEN"
          }
          severity={"info"}
          id={"lungs-button"}
          onClick={() => navigate("/poumon")}
          disabled={finishTemp == null}
        >
          Poumons
        </Step>
        <Step
          orientation={finishTemp == null ? "LEFT" : "HIDDEN"}
          severity={"success"}
          id={"temperature-button"}
          onClick={() => navigate("/temperature")}
        >
          Température
        </Step>
        {finishHearth == "1" ? (
          <Step
            id="end"
            orientation={"RIGHT"}
            severity={"success"}
            onClick={() => createLightAnimation("end")}
          >
            Le voyage continue !!
          </Step>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
