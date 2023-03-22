import Essay from "../components/essay/Essay.js";
import Panel from "../components/panel/Panel.js";
import styles from "./layout.module.css";

export default function Layout({ page, blocks }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.essay}>
          <Essay page={page} blocks={blocks} />
        </div>
        <div className={styles.panel}>
          <Panel page={page} />
        </div>
      </div>
      <div className={styles.mobile}>
        <Panel page={page} />
        <Essay page={page} blocks={blocks} />
      </div>
    </>
  );
}
