import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="header absolute top-0 w-full">
      <nav className="bg-transparent flex flex-row w-full justify-around">
        <div className="pt-[8px]">
          <Image src="/simple-logo.png" alt="los angeles mountains" width={43} height={43} />
        </div>

        <ul className="links flex gap-[50px] underline text-[12px] text-[#fefeff] pt-[26px]">
          <li>
            <Link href="#history">01. HISTORY</Link>
          </li>
          <li>
            <Link href="#team">02. TEAM</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
