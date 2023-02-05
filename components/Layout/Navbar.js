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
import { useState } from "react";
import RightSideBar from "./RightSideBar";
export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1050px)");
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
  return (
    <nav className={styles.Navbar}>
      {isDesktop ? (
        <>
          <aside>
            {navLinks.map((navLink) => (
              <Link href={navLink} key={navLink}>
                <a>{navLink}</a>
              </Link>
            ))}
          </aside>
          {wallets}
        </>
      ) : isMobile ? (
        <div className={styles.mobile}>
          <Hamburger />
          <Link href="/">
            <a>
              <Image src="/logo.png" objectFit="contain" layout="fill" />
            </a>
          </Link>
          <div className={styles.viewExpansion}>
            {expandAccounts}
            <div className={styles.expandAccounts}>
              {openAccount ? <ExpandAccount accounts={wallets} /> : null}
            </div>
            <More onClick={() => setOpenRightSidebar(!openRightSidebar)} />
            <div className={styles.rightSideBar}>
              {openRightSidebar ? <RightSideBar links={navLinks} /> : null}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.viewExpansion}>
            {wallets}
            <More onClick={() => setOpenRightSidebar(!openRightSidebar)} />
            <div className={styles.rightSideBar}>
              {openRightSidebar ? <RightSideBar links={navLinks} /> : null}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

let navLinks = ["DeFi", "GameFi", "NFT", "LaunchPad", "Engage2Earn"];
