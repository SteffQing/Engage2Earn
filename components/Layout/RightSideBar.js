import Link from "next/link";
export default function RightSideBar({ links, barRef }) {
  return (
    <aside ref={barRef}>
      {links.map((navLink) => (
        <Link href={navLink} key={navLink}>
          <a>{navLink}</a>
        </Link>
      ))}
    </aside>
  );
}
