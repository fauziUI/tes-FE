import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Create } from "./pages/create";
import { DataProvide } from "./store/dataEvent";

function App() {
  return (
    <BrowserRouter>
      <DataProvide>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          {/* <Route path="event" element={<EventPage />} /> */}
        </Routes>
      </DataProvide>
    </BrowserRouter>
  );
}

export default App;
