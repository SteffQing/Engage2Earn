import H1 from "../ElementsTag/H1Tag";
import Add from "../../Icons/Add";
import styles from "./Setup.module.css";
import P from "../ElementsTag/PTag";
import DataContainer from "./DataContainer";
export default function Index() {
  return (
    <div className={styles.Index}>
      <div className={styles.header}>
        <H1
          content="Setup Accounts"
          style={{ color: "rgba(242, 244, 245, 1)", fontSize: "28px" }}
        />
        <div>
          <Add />
          <P content="Bind New Account" />
        </div>
      </div>
      <DataContainer />
    </div>
  );
}
