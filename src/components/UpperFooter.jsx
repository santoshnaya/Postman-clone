import { FaArrowRight } from "react-icons/fa6";

const UpperFooter = () => {
  return (
    <div className="w-full bg-blue-900 text-center px-4 mt-10 pb-10 md:flex">
          <div className="md:flex items-center">
          <div className="md:w-[80%] md:pl-[100px]">
        <p className="text-white text-[40px] font-extrabold pt-9">
          2024 State of the API report is here!
        </p>
        <p className="text-white pt-4">
          Discover key API trends from 5,600+ devs and API professionals in
          Postman's annual report.
        </p>
        <p className="text-red-500 pt-3 pl-2 flex items-center gap-2">
          Learn more <FaArrowRight />
        </p>
      </div>
      </div>
      <div>
        <img
          src="https://voyager.postman.com/illustration/state-of-api/postman-state-of-api-2024-illustration.svg"
          alt=""
        />
      </div>
       
    </div>
  );
};
export default UpperFooter;
