import JsonTexts from "../Json/FisrtSlideTexts.json";
import "./styles/FirstSlide.css";

function FirstSlide() {
  return (
    <>
      <div className="containerFirstSlide">
        <div className="centerFirstSlide">
          <div className="boxTexts">
            <div className="centerBoxTexts">
              <h1 className="titleTopic">
                Que es la {Object.keys(JsonTexts)[0]}
              </h1>
              <p>{JsonTexts.organizacion.descripcion}</p>
            </div>
          </div>

          <div className="iconBoxSlide">
            <img
              className="iconSlide01"
              src={JsonTexts.organizacion.icon}
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSlide;
