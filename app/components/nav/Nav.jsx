import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="bg-transparent flex flex-row w-full justify-around items-center h-[76px]">
      <div>
        <Image src="/logo.png" alt="los angeles mountains" width={163} height={43} />
      </div>

      <ul className="links flex gap-[50px] text-[12px] text-[#414f6b]">
        <li>
          <Link href="#history">01. HISTORY</Link>
        </li>
        <li>
          <Link href="#team">02. TEAM</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
