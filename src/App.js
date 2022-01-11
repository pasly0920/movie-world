import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/search/:name" element={null} />
        <Route path="/genres" element={null} />
        <Route path="/topRated" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
