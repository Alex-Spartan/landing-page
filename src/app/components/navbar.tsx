import Image from "next/image"
import M from "@/assets/10.png"

const Navbar = () => {
  return (
    <nav className="bg-foreground py-8 px-12 flex flex-row justify-between">
      <div><Image src={M} width={35} height={35} alt="image" /></div>
      <div className="">
        <ul className="flex gap-8">
          <li className="text-secondary font-semibold">Home</li>
          <li className="text-secondary font-semibold">About Us</li>
          <li className="text-secondary font-semibold">Services</li>
          <li className="text-secondary font-semibold">Portfolio</li>
          <li className="text-secondary font-semibold">Contact</li>
          <li className="text-secondary font-semibold">Blog</li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar