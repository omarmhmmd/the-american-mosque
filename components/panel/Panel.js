import styles from "./panel.module.css";
import Text from "../../structure/text/Text.js";

export default function Panel({ page, blocks }) {
  console.log(page);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sticky}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <Text text={page.properties.Title.title} />
            </h1>
            <h1 className={styles.sub}>
              <Text text={page.properties.Subtitle.rich_text} />
            </h1>
          </header>
          <div className={styles.imgGrid}>
            {page.properties["Files & media"].files.map((img) => {
              return <img src={img.file.url} />;
            })}
          </div>
          <div className={styles.info}>
            <div className={styles.text}>
              {/* <hr></hr> */}
              <h1 className={styles.infoHeader}>Colophon</h1>
              <p style={{ paddingBottom: "8px" }}>
                <Text text={page.properties.Author.rich_text} />
              </p>
              <p style={{ paddingBottom: "8px" }}>
                <Text text={page.properties.Note.rich_text} />
              </p>
              <p>
                <Text text={page.properties.Colophon.rich_text} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
