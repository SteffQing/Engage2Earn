import H1 from "../ElementsTag/H1Tag";
import Add from "../../Icons/Add";
import styles from "./Setup.module.css";
import P from "../ElementsTag/PTag";
import DataContainer from "./DataContainer";
import { useState } from "react";
import Modal from "./Modal";
export default function Index() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.Index}>
      <div className={styles.header}>
        <H1
          content="Setup Accounts"
          style={{ color: "rgba(242, 244, 245, 1)", fontSize: "28px" }}
        />
        <div onClick={() => setOpenModal(true)}>
          <Add />
          <P content="Bind New Account" />
        </div>
      </div>
      <DataContainer />
      {openModal ? <Modal setModal={setOpenModal} /> : null}
    </div>
  );
}
