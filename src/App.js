import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import TopRated from "./routes/TopRated";
import Genres from "./routes/Genres";
import Search from "./routes/Search";
import Thumbnail from "./routes/Thumbnail";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/thumbnail/:poster_path" element={<Thumbnail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
