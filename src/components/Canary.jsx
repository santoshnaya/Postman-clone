const Canary = () => {
  return (
    <div className="pt-8 w-full">
    <div className="flex justify-center">
    <hr className="w-[83%]"/>
    </div>

    <div className="md:grid grid-cols-2 w-full py-10">
        <div className="md:w-[400] flex justify-center md:justify-evenly">
        <img src="https://voyager.postman.com/illustration/download-postman-canary-illustration.svg" alt="" className="w-[280px]"/>
        </div>

        <div className="px-6 md:pr-[70px]">
                  <p className="text-2xl font-semibold pb-3">Postman Canary</p>
                  <p className="font-semibold pb-3">Be the  first to experience new Postman features</p>
            <p>If you want to be first in line to experience new features, download our latest Canary builds available for a sneak peek. They are designed for early adopters, and may sometimes break.</p>
            <button className="border py-1 px-7 mt-3 border-gray-600 rounded-md">Download Postman Canary</button>
        </div>
    </div>
    <div className="flex justify-center py-10">
    <hr className="w-[83%]"/>
    </div>

    <div className="md:grid grid-cols-2 w-full pt-6">
        <div className="md:w-[400] flex justify-center md:justify-evenly">
        <img src="https://voyager.postman.com/illustration/postman-toolbox-api-platform-illustration.svg" alt="" className="w-[280px]"/>
        </div>

        <div className="px-6 md:pr-[70px]">
            <p className="text-2xl font-semibold pb-3">Newman command line tool</p>
                  <p>Newman is a command-line collection runner for Postman. It allows you to effortlessly run and test a Postman Collection directly from the command-line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.</p>
            <button className="border py-1 px-7 mt-3 border-gray-600 rounded-md">Read the Docs</button>
        </div>
    </div>
    
    

</div>
  )
}
export default Canary