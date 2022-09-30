import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DataProvide } from "./store/dataEvent";
import { HomePage } from "./pages/home";
import { CreatePage } from "./pages/create";
import { EventPage } from "./pages/event";

function App() {
  return (
    <BrowserRouter>
      <DataProvide>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </DataProvide>
    </BrowserRouter>
  );
}

export default App;
