import styles from "./styles/HeroinSection.module.css";
import JsonTexts from "../Json/HeroinSectionTexts.json";

function HeroinSection() {
  return (
    <>
      <main className={styles.MainBanner}>
        <section className={styles.sectionBanner}>
          <div className={styles.boxBanner}>
            <h1 className={styles.textBanner}>
              <span className={styles.spanBanner}>
                <img src={JsonTexts.icon} width={350} />
              </span>
              <span className={styles.spanBanner} style={{ fontWeight: "400" }}>
                {JsonTexts.Titulo}
              </span>
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroinSection;
