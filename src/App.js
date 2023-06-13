import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
