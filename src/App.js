import { Link, Route, Routes } from "react-router-dom";
import ThemePage from "./components/ThemePage";
import Counter from "./components/Counter";
import Selected from "./components/Selected";
import ReduxCounter from "./components/ReduxCounter";
import GetCountry from "./components/GetCountry";

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
            <li>
              <Link to="/redux-counter">Redux Counter</Link>
            </li>
            <li>
              <Link to="/redux-api">Redux Api</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route element={<ThemePage />} path="/theme" />
        <Route element={<Counter />} path="/counter" />
        <Route element={<Selected />} path="/select" />
        <Route element={<ReduxCounter />} path="/redux-counter" />
        <Route element={<GetCountry />} path="/redux-api" />
      </Routes>
    </>
  );
}

export default App;
