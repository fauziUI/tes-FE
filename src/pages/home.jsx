import image_LP from "../assets/image_LP.svg";
export const HomePage = () => {
  return (
    <div className="bg-[#F6F2FF] h-full min-h-screen p-8">
      <div className="flex flex-col-reverse md:flex md:flex-row md:justify-around items-center lg:px-28 lg:py-20">
        <img src={image_LP} alt="landing_page_image" className="mx-auto p-4 " />
        <div className="text-center md:text-right mx-auto max-w-2xl">
          <h1 className="text-[#240D57] text-4xl md:text-5xl lg:text-6xl font-bold">
            <div>Imagine if</div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
              Snapchat
            </span>
            <div> had events.</div>
          </h1>
          <h2 className="text-xl md:text-3xl my-8 text-[#240d57]">
            <div>
              Easily host and share events with your friends across any social
              media.
            </div>
          </h2>
          <div className="hidden md:flex justify-end">
            <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-10 lg:px-16  rounded-xl text-white text-xl">
              🎉 Create my event
            </button>
          </div>
        </div>
      </div>

      <div className="text-center md:hidden">
        <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-16 rounded-xl text-white text-base">
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};
