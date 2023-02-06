import styles from "./Layout.module.css";
import Wallet from "../../Icons/Wallet";
import Blockie from "../../Icons/Blockie";
import More from "../../Icons/More";
import BSC from "../../Icons/BSC";
import Hamburger from "../../Icons/Hamburger";
import ArrowDown from "../../Icons/ArrowDown";
import ExpandAccount from "./ExpandAccount";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import RightSideBar from "./RightSideBar";
import Dot from "../../Icons/Dot";
import Close from "../../Icons/Bind/Close";
import Sidebar from "./Sidebar";
export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1100px)");
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [openRightSidebar, setOpenRightSidebar] = useState(false);
  const [openLeftSidebar, setOpenLeftSidebar] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  let wallets = (
    <aside>
      <div className={styles.address}>
        <Blockie />
        <span>0x573e...806b</span>
        <More />
      </div>
      <div className={styles.balance}>
        <Wallet />
        <div>Wallet Balance</div>
      </div>
      <div className={styles.network}>
        <BSC />
        <ArrowDown />
      </div>
    </aside>
  );
  let expandAccounts = (
    <span onClick={() => setOpenAccount(!openAccount)}>
      <Blockie />
      <ArrowDown />
    </span>
  );
  let exRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!exRef.current.contains(e.target)) {
          setOpenAccount(false);
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
  let sideBar = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!sideBar.current.contains(e.target)) {
          setOpenRightSidebar(false);
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
    <nav className={styles.Navbar}>
      {isDesktop ? (
        <>
          <aside>
            {navLinks.map((navLink, i) => (
              <Link href={navLink} key={navLink}>
                <a>
                  {navLink}
                  {i === 1 ? <Dot /> : null}
                </a>
              </Link>
            ))}
          </aside>
          {wallets}
        </>
      ) : isMobile ? (
        <div className={styles.mobile}>
          <span onClick={() => setOpenLeftSidebar(!openLeftSidebar)}>
            {openLeftSidebar ? <Close /> : <Hamburger />}
          </span>
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                objectFit="contain"
                layout="fill"
                alt="Logo"
              />
            </a>
          </Link>
          <div className={styles.viewExpansion}>
            {expandAccounts}
            <div className={styles.expandAccounts}>
              {openAccount ? (
                <ExpandAccount accounts={wallets} exRef={exRef} />
              ) : null}
            </div>
            <More onClick={() => setOpenRightSidebar(!openRightSidebar)} />
            <div className={styles.rightSideBar}>
              {openRightSidebar ? (
                <RightSideBar links={navLinks} barRef={sideBar} />
              ) : null}
            </div>
          </div>
          <div className={styles.viewSidebar}>
            {openLeftSidebar ? <Sidebar setBar={setOpenLeftSidebar} /> : null}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.viewExpansion}>
            {wallets}
            <More onClick={() => setOpenRightSidebar(!openRightSidebar)} />
            <div className={styles.rightSideBar}>
              {openRightSidebar ? (
                <RightSideBar links={navLinks} barRef={sideBar} />
              ) : null}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

let navLinks = ["DeFi", "GameFi", "NFT", "LaunchPad", "Engage2Earn"];
