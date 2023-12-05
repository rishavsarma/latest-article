import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image width={120} height={10} src={"/logo.svg"} alt="Logo" />
    </Link>
  );
};

export default Logo;
