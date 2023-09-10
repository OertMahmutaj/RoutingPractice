import Home from "./components/Home";
import Word from "./components/Word";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:word' element={<Word />} />
        <Route path='/:word/:textColor/:backgroundColor' element={<Word />} />
      </Routes>
    </BrowserRouter>



  )
};

export default App;