import { Link, Route, Routes } from "react-router-dom";
import Selected from "./components/Selected";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/select">Selected</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route element={<Selected />} path="/select" />
      </Routes>
    </>
  );
}

export default App;
