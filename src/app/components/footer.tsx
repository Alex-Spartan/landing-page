import Image from "next/image";
import logo from "@/assets/11.png";
import svg from "@/assets/fb.svg";

const Footer = () => {
  return (
    <div className="bg-foreground pt-16 pb-2 flex flex-col gap-12 items-center justify-center">
      <div>
        <Image src={logo} width={50} alt="" />
      </div>
      <p className="max-w-[550px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam
        maxime perferendis laboriosam modi porro molestias sunt nesciunt ratione
        at!
      </p>
      <div className="flex gap-2 items-center justify-center">
        <div className="py-3 px-4 bg-gray-300 rounded-[100%]">
          <Image className="" src={svg} width={15} alt="" />
        </div>
        <div className="py-3 px-4 bg-gray-300 rounded-[100%]">
          <Image className="" src={svg} width={15} alt="" />
        </div>
        <div className="py-3 px-4 bg-gray-300 rounded-[100%]">
          <Image className="" src={svg} width={15} alt="" />
        </div>
        <div className="py-3 px-4 bg-gray-300 rounded-[100%]">
          <Image className="" src={svg} width={15} alt="" />
        </div>
        <div className="py-3 px-4 bg-gray-300 rounded-[100%]">
          <Image className="" src={svg} width={15} alt="" />
        </div>
      </div>
        <p className="text-sm">
            &copy; 2021 All rights reserved.
        </p>
    </div>
  );
};
export default Footer;
