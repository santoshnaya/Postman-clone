const Install = () => {
  return (
    <div className="pt-9 px-8">
      <div className="flex justify-center py-8">
        <hr className="w-[95%]" />
      </div>

      <div className="md:flex">
        <div className="md:w-[40%]"></div>
        <div className="md:w-[60%]">
          <p className="text-xl font-semibold pb-4 md:pl-8">
            Windows instllation
          </p>
          <div className="flex justify-center">
            <div className="w-[95%] h-[200px] md:h-[130px] rounded-lg bg-gray-100 flex flex-wrap text-wrap flex text-center items-center justify-center">
              curl -o- "https://dl-cli.pstmn.io/install/ <br />
              osx_arm64.sh" | sh
            </div>
          </div>
          <p className="text-xl font-semibold py-4 pt-8 md:pl-8">
            Mac (Apple silicon) installation
          </p>
          <div className="flex justify-center">
            <div className="w-[95%] h-[200px] md:h-[130px] rounded-lg bg-gray-100 flex flex-wrap text-wrap flex text-center items-center justify-center">
              curl -o- "https://dl-cli.pstmn.io/install/ <br />
              osx_arm64.sh" | sh
            </div>
          </div>
          <p className="text-xl font-semibold py-4 pt-8 md:pl-8">
            Mac (Intel) installation
          </p>
          <div className="flex justify-center">
            <div className="w-[95%] h-[200px] md:h-[130px] rounded-lg bg-gray-100 flex flex-wrap text-wrap flex text-center items-center justify-center">
              curl -o- "https://dl-cli.pstmn.io/install/ <br />
              osx_arm64.sh" | sh
            </div>
          </div>
          <p className="text-xl font-semibold py-4 pt-8 md:pl-8">
            Linux installation
          </p>
          <div className="flex justify-center">
            <div className="w-[95%] h-[200px] md:h-[130px] rounded-lg bg-gray-100 flex flex-wrap text-wrap flex text-center items-center justify-center">
              curl -o- "https://dl-cli.pstmn.io/install/ <br />
              osx_arm64.sh" | sh
            </div>
          </div>

          <button className="border ml-3 rounded-md border-gray-400 py-2 px-6 mt-10">
            Read the Installation Docs
          </button>
        </div>
      </div>
    </div>
  )
}
export default Install
