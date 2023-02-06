import styles from "./Layout.module.css";
import Image from "next/image";
import Account from "../../Icons/Account";
import Portal from "../../Icons/Portal";
import Participation from "../../Icons/Participation";
import Link from "next/link";
import P from "../ElementsTag/PTag";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
export default function Sidebar() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={styles.Sidebar}>
      {!isMobile ? (
        <Link href="/">
          <a className={styles.logo}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                layout="fill"
                objectFit="contain"
                alt="Logo"
              />
            </div>
          </a>
        </Link>
      ) : (
        <div className={styles.logo}></div>
      )}
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.link} key={link.link}>
            <a className={styles.linksAside}>
              <div className={styles.linksDiv}>
                {link.icon}
                <P content={link.name} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

let links = [
  { icon: <Account />, name: "Setup Accounts", link: "/accounts" },
  { icon: <Portal />, name: "Engage Portal", link: "/portal" },
  {
    icon: <Participation />,
    name: "Past Participation",
    link: "participation",
  },
];
