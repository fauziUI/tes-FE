import React, { useState, createContext} from "react";

export const DataContext = createContext();

export const DataProvide = (props) => {
  const [eventName, setEventName] = useState([]);
  const [hostName, setHostName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [photo, setPhoto] = useState();

  const allState = {
    eventName,
    setEventName,
    hostName,
    setHostName,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    location,
    setLocation,
    photo,
    setPhoto
  };


  return (
    <DataContext.Provider value={{ allState }}>
      {props.children}
    </DataContext.Provider>
  );
};
