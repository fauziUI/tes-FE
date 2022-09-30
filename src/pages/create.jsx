import { useState, useEffect, useContext } from "react";
import image_TP from "../assets/Party.png";
import { InputText } from "../components/inputText";
import { InputDate } from "../components/inputDate";
import { DataContext } from "../store/dataEvent";

export const CreatePage = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const { allState } = useContext(DataContext);
  const {
    startDate,
    endDate,
    setEventName,
    setHostName,
    setStartDate,
    setEndDate,
    setLocation,
    setPhoto,
  } = allState;

  const [state, setState] = useState({
    eventName: "",
    email: "",
    noHP: "",
    noIdentitas: "",
    noNPWP: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    setState({
      ...state,
      [name]: value,
    });
  }

  function onClick(event) {}

  const fileSelectedHandler = (event) => {
    if (event.target.files[0]) {
      let preview = document.getElementById("imgPreview");
      let src = URL.createObjectURL(event.target.files[0]);
      // setLink(src);
      // setFotoKTP(true);
    }

    setState({
      ...state,
    });
  };

  return (
    <div className="bg-white w-full h-full min-h-screen p-8">
      <h1 className="text-[#240D57] text-3xl md:text-5xl lg:text-6xl font-bold text-center my-4">
        Create Your Event
      </h1>
      <div className="md:flex justify-center lg:py-20">
        <div className="text-center">
          <img
            src={image_TP}
            alt="landing_page_image"
            className="cursor-pointer m-auto h-96 md:mx-12 "
          />
          <input
            className="my-4"
            type="file"
            name="photo-ttd"
            onChange={fileSelectedHandler}
            accept="image/png, image/gif, image/jpeg"
            capture="environment"
          />
        </div>
        <div className="lg:w-1/2 max-w-2xl md:my-0 my-12">
          <InputText
            titel="🎉 Event Name"
            name="event"
            value={state.namaLengkap}
            onChange={handleChange}
          />
          <InputText
            titel="🔗 Host Name"
            name="event"
            value={state.namaLengkap}
            onChange={handleChange}
          />
          <InputDate
            titel="✏️ Starts at"
            selected={startDate}
            onChange={setStartDate}
          />
          <InputDate
            titel="🏁 Ends at"
            selected={startDate}
            onChange={setStartDate}
          />
          <InputText
            titel="📍 Location"
            name="event"
            value={state.namaLengkap}
            onChange={handleChange}
          />
          <div className="flex justify-center my-8">
            <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-10 lg:px-16 md:px-8 rounded-xl text-white text-xl">
              🎉 Create my event
            </button>
          </div>
        </div>
      </div>
      {/* <Home /> */}
    </div>
  );
};
