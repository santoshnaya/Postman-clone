import { FaArrowRight } from 'react-icons/fa6'
import { BsApple } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex justify-center text-3xl font-semibold text-center py-11 pt-[80px] md:text-5xl">
        Download Postman
      </div>
      <div className="flex justify-center text-center px-5 text-[20px] md:px-[300px] md:font-light pb-10">
        Download the app to get started using Postman API Platform today. Or, if
        you prefer a browser experience, you can try the web version of postman.
      </div>

      {/*  */}
      <div className="md:flex md:grid-cols-2">
        {/* left side */}
        <div className="md:w-[40%] md:px-[20px] md:pl-[120px]">
          <div className="pt-10 px-5">
            <span className="font-bold text-xl pb-3">The Postman app</span>
            <p>
              Download the app to get started with the Postman API Platform.
            </p>
          </div>
          <div className="flex justify-center py-4">
            <div className="md:hidden border w-[80%] flex rounded-md  justify-center bg-orange-500">
              <button className="py-1 text-white md:hidden">
                Download the App
              </button>
            </div>
            <div className="flex justify-center items-center gap-4">
              <button className=" text-white hidden md:block bg-orange-500 px-11 py-3 rounded-md md:flex items-center gap-2">
                <BsApple />
                Mac Intel Chip
              </button>
              <button className="text-white hidden md:block bg-orange-500 px-11 py-3 rounded-md md:flex items-center gap-2">
                <BsApple />
                Mac Chip
              </button>
              {/* <button className="py-1 text-white hidden md:block bg-orange-500 px-[50px] rounded-md md:flex items-center gap-2"><BsApple /> Mac Apple Chip</button> */}
            </div>
          </div>
          <div className="px-5">
            <p className="md:hidden ">
              To experience the best the Postman app has to offer. Please
              donwload it on your desktop.
            </p>
            <p className="hidden md:block my-4 font-thin">
              By downloading and using Postman, I agree to the{' '}
              <span className="text-blue-400">Privacy Policy</span> and Terms.
            </p>
            <p className="text-blue-400 pt-3 flex items-center gap-2">
              Release Notes <FaArrowRight />
            </p>
            <p className="hidden md:block font-thin">
              Not your OS? Download for Windows (
              <span className="text-blue-400">x64</span>) or Linux (
              <span className="text-blue-400">x64, arm64</span>)
            </p>
          </div>

          {/*  */}
          <div className="flex py-5 pt-8 justify-center">
            <hr className="w-[90%]" />
          </div>

          {/*  */}
          <div className="px-5">
            <p className="text-xl font-semibold pb-3 pt-5">
              Postman on the web
            </p>
            <p>
              Access the postman API Platform through your web browser. Create a
              free account, and you're in.
            </p>
            <div className="border-gray-400 flex justify-center rounded-md mt-5 border-[2px]">
              <button className="py-1">Try the Web Version</button>
            </div>
          </div>

          <div className="flex py-5 justify-center pt-10">
            <hr className="w-[90%]" />
          </div>
          <div className="px-5 pt-7">
            <p className="text-xl font-semibold pb-3">Postman Enterprise</p>
            <p>
              Postman Enterprise is designed fo orgamization who need to deploy
              Postman at scale.
            </p>
            <p className="text-blue-400 pt-3 flex items-center gap-2">
              Learn more <FaArrowRight />
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="hidden md:block pt-10 md:w-[60%] absolute left-[600px]">
          <img
            src="https://voyager.postman.com/screen/postman-download-page-screenshot-v11.svg"
            alt=""
            className="ml-[100px]"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
