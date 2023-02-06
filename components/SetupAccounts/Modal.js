import H1 from "../ElementsTag/H1Tag";
import Tiktok from "../../Icons/Bind/Tiktok";
import styles from "./Setup.module.css";
import P from "../ElementsTag/PTag";
import Close from "../../Icons/Bind/Close";
import Twitter from "../../Icons/Bind/Twitter";
import Facebook from "../../Icons/Bind/Facebook";
import Telegram from "../../Icons/Bind/Telegram";
import Instagram from "../../Icons/Bind/Instagram";
import GoTo from "../../Icons/GoTo";
import { useEffect, useRef } from "react";

export default function Modal({ setModal }) {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!menuRef.current.contains(e.target)) {
          setModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className={styles.Modal}>
      <div className={styles.modal} ref={menuRef}>
        <aside>
          <div>
            <H1 content="Bind New Account" />
            <Close onClick={() => setModal(false)} />
          </div>
          <P content="Please specify the platform to bind it." />
        </aside>
        <section>
          {socials.map((social) => (
            <div key={social.platform}>
              <aside>
                {social.icon}
                <H1 content={social.platform} />
              </aside>
              {social.available ? <GoTo /> : <span>Soon</span>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

let socials = [
  { icon: <Twitter />, platform: "twitter", available: true },
  { icon: <Facebook />, platform: "facebook", available: true },
  { icon: <Telegram />, platform: "telegram", available: true },
  { icon: <Instagram />, platform: "instagram", available: false },
  { icon: <Tiktok />, platform: "tiktok", available: false },
];
