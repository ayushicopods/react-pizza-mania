import "./SideNav.css";
import logo from "../assets/img/logo.svg";
function SideNav() {
  return (
    <>
      <div className="sidenavHeader">
        <img src={logo} />
        <p>pizza mail</p>
      </div>
      <div className="sidenavContent"></div>
      <div className="sidenavFooter"></div>
    </>
  );
}
export default SideNav;
