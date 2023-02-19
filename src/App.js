import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"

function App() {
  return (
    <div className= "App">
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
