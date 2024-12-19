const Code = () => {
  return (
      <div className="pt-8 w-full">
          <div className="flex justify-center">
          <hr className="w-[83%]"/>
          </div>

          <div className="md:grid grid-cols-2 w-full py-10">
              <div className="md:w-[400] flex justify-center md:justify-evenly">
              <img src="https://voyager.postman.com/illustration/vs-code-postman-illustration.svg" alt="" className="w-[280px]"/>
              </div>

              <div className="px-6 md:pr-[70px]">
                  <p className="text-2xl font-semibold pb-3">Postman VS Code extension</p>
                  <p>The Postman VS Code extension enables you to develop and test your APIs in Postman directly from Visual Studio Code. This streamlines your development workflow because you can quickly test your APIs in the same application you're using to develop. You can also use the extension to organize your API requests in Postman Collections, and share them with your team using workspaces.</p>
                  <button className="border py-1 px-7 mt-3 border-gray-600 rounded-md">Get the Extension</button>
              </div>
          </div>
          <div className="flex justify-center py-10">
          <hr className="w-[83%]"/>
          </div>

          <div className="md:grid grid-cols-2 w-full pt-6">
              <div className="md:w-[400] flex justify-center md:justify-evenly">
              <img src="https://voyager.postman.com/illustration/desktop-agent-postman-illustration.svg" alt="" className="w-[280px]"/>
              </div>

              <div className="px-6 md:pr-[70px]">
                  <p className="text-2xl font-semibold pb-3">Postman desktop agent</p>
                  <p>If you are using the Postman web client, you will need to also download the Postman desktop agent. The Postman agent overcomes the Cross-Origin Resource Sharing (CORS) limitations of browsers, and facilitates API request sending from your browser version of Postman. <span className="text-blue-400">Read the blog post.</span></p>
                  <button className="border py-1 px-7 mt-3 border-gray-600 rounded-md">Download Postman Agent</button>
              </div>
          </div>
          <div className="flex justify-center py-10">
          <hr className="w-[83%]"/>
          </div>

          <div className="md:grid grid-cols-2 w-full pt-6">
              <div className="md:w-[400] flex justify-center md:justify-evenly">
              <img src="https://voyager.postman.com/illustration/postman-cli-illustration-2.svg" alt="" className="w-[280px]"/>
              </div>

              <div className="px-6 md:pr-[70px]">
                  <p className="text-2xl font-semibold pb-3">Postman CLI</p>
                  <p className="text-xl">New!</p>
                  <p>The Postman CLI is the command-line companion that is developed, supported, and signed by Postman. It enables you to run collections, lint API schemas, run security and governance checks, and log in and out. All test results will be automatically pushed to the app.</p>
                  {/* <button className="border py-1 px-7 mt-3 border-gray-600 rounded-md">Download Postman Agent</button> */}
              </div>
          </div>

    </div>
  )
}
export default Code