import Image from "next/image";
import ProductNav from "./product-nav";
import coffeeCup1 from "@/assets/1.jpg";
import coffeeCup2 from "@/assets/2.jpg";
import coffeeCup3 from "@/assets/3.jpg";
import coffeeCup4 from "@/assets/4.jpg";
import coffeeCup5 from "@/assets/5.jpg";
import coffeeCup6 from "@/assets/6.jpg";
import coffeeCup7 from "@/assets/7.jpg";
import coffeeCup9 from "@/assets/9.jpg";

const Products = () => {
  return (
    <div>
      <ProductNav />
      <div className="mt-8">
        <div className="grid grid-cols-4 grid-rows-3 gap-12 justify-center items-center">
            <Image className="col-span-2 row-span-2" quality={100} src={coffeeCup2} width={600} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup1} width={300} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup5} width={300} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup4} width={300} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup6} width={300} alt="cup" />
            <Image className="col-span-2 row-span-1" quality={100} src={coffeeCup9} width={600} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup3} width={300} alt="cup" />
            <Image className="col-span-1 row-span-1" quality={100} src={coffeeCup7} width={300} alt="cup" />
        </div>
      </div>
    </div>
  );
};
export default Products;
