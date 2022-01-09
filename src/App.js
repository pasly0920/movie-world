import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={null} />
        <Route path="/rating/:base" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
