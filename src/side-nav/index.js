import "./SideNav.css";
import logo from "../assets/img/logo.svg";
import Inbox from "../assets/img/Inbox.svg";
import Junk from "../assets/img/junk.svg";
import Sent from "../assets/img/sent.svg";
import Starred from "../assets/img/starred.svg";
import AllMail from "../assets/img/AllMail.svg";
import Trash from "../assets/img/trash.svg";
import Drafts from "../assets/img/drafts.svg";
import SideNavItem from "./SideNavItem";
import Chevron from "../assets/img/chevron.svg";

function SideNav() {
  const sideNavItems = [
    {
      id: "inbox",
      icon: Inbox,
      label: "Inbox",
      active: true,
      route: "/inbox",
      counter: 0,
    },
    {
      id: "sent",
      icon: Sent,
      label: "Sent",
      active: false,
      route: "/sent",
      counter: 1,
    },
    {
      id: "drafts",
      icon: Drafts,
      label: "Drafts",
      active: false,
      route: "/drafts",
      counter: 0,
    },
    {
      id: "starred",
      icon: Starred,
      label: "Starred",
      active: false,
      route: "/starred",
      counter: 0,
    },
    {
      id: "all-mail",
      icon: AllMail,
      label: "All mail",
      active: false,
      route: "/all-mail",
      counter: 0,
    },
    {
      id: "junk",
      icon: Junk,
      label: "Junk",
      active: false,
      route: "/junk",
      counter: 0,
    },
    {
      id: "trash",
      icon: Trash,
      label: "Trash",
      active: false,
      route: "/trash",
      counter: 0,
    },
  ];
  return (
    <>
      <div className="sidenavHeader">
        <img src={logo} />
        <p>pizza mail</p>
      </div>
      <div className="sidenavContent">
        {sideNavItems.length &&
          sideNavItems.map((item) => {
            return (
              <SideNavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={item.active}
                route={item.route}
                counter={item.counter}
              />
            );
          })}
      </div>
      <div className="sidenavFooter">
        <img src={Chevron} />
        Collapse
      </div>
    </>
  );
}
export default SideNav;
