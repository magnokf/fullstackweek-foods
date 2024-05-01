import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <div className="h-[30px] w-[100px]">
        <Link
          href="/"
          className="relative flex h-full w-full items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="FSW Foods"
            fill
            className="object-cover"
            sizes={"100%"}
          />
        </Link>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
