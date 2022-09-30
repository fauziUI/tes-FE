import image_event from "../assets/Event_Image.png";
import iconDate from "../assets/IconDate.svg";
import iconLocation from "../assets/IconLocation.svg";
import iconArrow from "../assets/IconArrow.svg";

export const EventPage = () => {
  return (
    <div className="bg-white h-full min-h-screen p-8">
      <div className="flex flex-col-reverse md:flex md:flex-row md:justify-around  lg:px-28 lg:py-20">
        <div className="text-center md:text-right mx-auto max-w-2xl">
          <h1 className="text-[#240D57] text-4xl md:text-5xl lg:text-6xl font-bold">
            Birthday Bash
          </h1>
          <h2 className="text-xl md:text-3xl my-8 text-[#828282]">
            <span>host by </span>
            <span className="font-bold">Elysia </span>
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={iconDate}
                alt="landing_page_image"
                className="mx-auto p-4 "
              />
              <div className="flex flex-col items-start">
                <div className="font-bold text-[#240D57]">18 August 6:00PM</div>
                <div className="text-[#4F4F4F]">
                  <span>to</span>
                  <span className="font-bold">19 August 1:00PM</span>
                  <span>UTC +10</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={iconArrow}
                alt="landing_page_image"
                className="mx-auto p-4 "
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={iconLocation}
                alt="landing_page_image"
                className="mx-auto p-4 "
              />
              <div className="flex flex-col items-start">
                <div className="font-bold text-[#240D57]">Street Name</div>
                <div className="text-[#4F4F4F]">Suburb, State, Postcode</div>
              </div>
            </div>
            <div>
              <img
                src={iconArrow}
                alt="landing_page_image"
                className="mx-auto p-4 "
              />
            </div>
          </div>
        </div>
        <img src={image_event} alt="landing_page_image" className="m-auto " />
      </div>

      <div className="text-center md:hidden">
        <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-16 rounded-xl text-white text-base">
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};
