import Link from "next/link";
import styles from "./Layout.module.css";
export default function RightSideBar({ links }) {
  return (
    <aside>
      {links.map((navLink) => (
        <Link href={navLink} key={navLink}>
          <a>{navLink}</a>
        </Link>
      ))}
    </aside>
  );
}
