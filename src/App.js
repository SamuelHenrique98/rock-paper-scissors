import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Menu from "./components/Menu";
import Match from "./components/Match"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu></Menu>}></Route>
        <Route path="/match" element={<Match></Match>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
