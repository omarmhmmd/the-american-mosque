import styles from "./panel.module.css";
import Text from "../../structure/text/Text.js";
import Image from 'next/image'

export default function Panel({ page, blocks }) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sticky}>
          <div className={styles.sticky}>
            <header className={styles.header}>
              <h1 className={styles.title}>
                <Text text={page.properties.Title.title} />
              </h1>
              <h1 className={styles.sub}>
                <Text text={page.properties.Subtitle.rich_text} />
              </h1>
              {/* <h3 className={styles.author}>
                Omar Mohammad
              </h3> */}
            </header>
            <div className={styles.imgSingle}>
              {page.properties.Pic.files.map((img) => {
                return (
                  <Image src={img.external.url}
                    width={600}
                    height={800}
                  />
                )
                // return <img src={img.file.url} />;
              })}
            </div>
            {/* <div className={styles.imgGrid}>
              {page.properties.Pic.files.map((img) => {
                return (
                  <Image src={img.external.url}
                    width={600}
                    height={800}
                  />
                )
                // return <img src={img.file.url} />;
              })}
            </div> */}
            <div className={styles.text}>
              {/* <h1 className={styles.infoHeader}>Info</h1> */}
              <p style={{ paddingBottom: "8px" }}>
                <Text text={page.properties.Author.rich_text} />
              </p>
              <p style={{ paddingBottom: "0px" }}>
                <Text text={page.properties.Info.rich_text} />
              </p>
              {/* <h1 className={styles.infoHeader}>Colophon</h1>
                <p>
                  <Text text={page.properties.Colophon.rich_text} />
                </p> */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
