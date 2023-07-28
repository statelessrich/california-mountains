import Image from "next/image";

function Footer() {
  return (
    <footer className="footer flex flex-col justify-center text-center gap-3 py-[17px] items-center px-3 sm:flex-row sm:justify-around text-[#63769d]">
      <div>
        <Image src="/logo-dark.png" alt="los angeles mountains" width={163} height={43} />
      </div>
      <span className="font-black italic">COPYRIGHT 2016. ALL RIGHTS RESERVED.</span>
    </footer>
  );
}

export default Footer;
