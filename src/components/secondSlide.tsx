import "./styles/SecondSlide.css";
import JsonTexts from "../Json/SecondSlide.json";

import { TbCake, TbSkull } from "react-icons/tb";
import { GiSecretBook } from "react-icons/gi";

function SecondSlide() {
  return (
    <div className="containerSeconSlide">
      <div className="boxIconAuthor">
        <img src={JsonTexts.icon} alt="iconAuthor" />
      </div>
      <div className="biographycAuthor">
        <div className="centerBiographycAuthor">
          <h1>{JsonTexts.henri_fayol.nombre}</h1>

          <div className="centerDateAuthor">
            <div className="dateAuthor">
              <div className="boxBirth">
                <div className="iconBith">
                  <TbCake style={{ color: "blue" }} className="iconBith" />
                </div>
                <p className="textBirth">{JsonTexts.henri_fayol.nacimiento}</p>
              </div>

              <div className="boxBirth">
                <div className="iconBith">
                  <TbSkull style={{ color: "red" }} className="iconBith" />
                </div>
                <p className="textBirth">
                  {JsonTexts.henri_fayol.fallecimiento}
                </p>
              </div>
            </div>
          </div>

          <div className="containerSchool">
            <div className="centerInfoSchool">
              <div className="supraCenterInfoSchool">
                <h2>Educacion</h2>
                <h3>{JsonTexts.henri_fayol.educacion.name}</h3>
                <div className="boxCenterIconSchool">
                  <img
                    className="iconSchool"
                    src={JsonTexts.henri_fayol.educacion.icon}
                    alt=""
                    width={100}
                  />
                </div>
              </div>
            </div>

            <div className="centerInfoBooks">
              <div className="supraCenterInfoBooks">
                <h2>Libros</h2>
                <div className="centerListBooks">
                  {JsonTexts.henri_fayol.libros.map((book) => (
                    <div className="containerBook">
                      <div className="centerContainerBook">
                        <div className="boxIconBook">
                          <GiSecretBook className="iconBook" />
                        </div>
                        <p className="nameBook">{book}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="containerFamily">
            <h1 className="titleFamily">Familia</h1>
            <div className="boxConyuge">
              <div className="btnInfo">
                <h3>Conyuge</h3>
                <p>{JsonTexts.henri_fayol.conyuge}</p>
              </div>

              {JsonTexts.henri_fayol.hijos.map((son) => (
                <>
                  <div className="btnInfo">
                    <h3>Hijo</h3>
                    <p>{son.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSlide;
