import JsonTexts from "../Json/ThreeSlideTexts.json";
import "./styles/ThreeSlide.css";

function ThreeSlide() {
  return (
    <>
      <div className="containerThreeSlide">
        <div className="centerContainerSlide">
          <div className="subBoxFayo">
            <div className="boxFayo">
              <h1>Teoria del fayolismo</h1>
              <p>{JsonTexts.teoria_fayolismo.descripcion}</p>
              <div className="listGroups">
                {JsonTexts.teoria_fayolismo.grupos.map((group) => (
                  <p className="namesGroup">{group.name}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="subBoxFayo">
            <div className="boxFayo">
              <h1>Porque surgio el Fayolismo</h1>
              <p>{JsonTexts.teoria_fayolismo.surgimiento}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeSlide;
