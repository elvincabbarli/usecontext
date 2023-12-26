import { Link, Route, Routes } from "react-router-dom";
import ThemePage from "./components/ThemePage";
import Counter from "./components/Counter";
import Selected from "./components/Selected";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/theme">Theme</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/select">Selected</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route element={<ThemePage />} path="/theme" />
        <Route element={<Counter />} path="/counter" />
        <Route element={<Selected />} path="/select" />
      </Routes>
    </>
  );
}

export default App;
