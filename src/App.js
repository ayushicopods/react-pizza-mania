import logo from "./logo.svg";
import "./App.css";
import SideNav from "./side-nav";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="sidenavContainer">
          <SideNav></SideNav>
        </div>
      </div>
    </>
  );
}

export default App;
