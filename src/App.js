import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Create } from "./pages/create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        {/* <Route path="event" element={<EventPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
