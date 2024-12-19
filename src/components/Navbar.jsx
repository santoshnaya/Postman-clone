import { SiPostman } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-[60px] border flex items-center px-3 justify-between">
      <div className="flex items-center gap-4 pl-5">
        <SiPostman className="text-orange-500 w-10 h-10 items-center" />
        <div className="hidden md:block">
        <ul className="flex gap-4 text-gray-700">
          <li className="flex items-center gap-1">
            Product <MdKeyboardArrowDown />
          </li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Resource and Support</li>
          <li className="flex items-center gap-1">
            Public API Network <MdKeyboardArrowDown />
          </li>
        </ul>
        </div>
      </div>
      <div>
        <RxHamburgerMenu className="w-10 h-10 md:hidden " />
        <div className="hidden md:block">
        <div className="flex gap-4">
          <div className="border rounded-md">
            <button className="py-1 px-2">Contact Sales</button>
          </div>
          <div className="border rounded-md">
            <button className="py-1 px-2">Sing in</button>
          </div>
          <div className="border rounded-md">
            <button className="py-1 px-2 text-white bg-orange-500 rounded-md">
              Sing Up for Free
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
