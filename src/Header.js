import React from 'react';
import { Link } from "react-router-dom";

const routes = [
  {route: "/", title: "Home"},
  {route: "/projects", title: "Projects"},
  {route: "/research", title: "Research"},
  {route: "/team", title: "Team"},
  {route: "/about", title: "About"}
]
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
    <header className="nav_bar" id="header_home">
    <a href="/">
      <div className="imagotype">
        <div className="isotype">
        </div>
        <div className="logotype">
          GING
        </div>
      </div>
    </a>
    <div className="menu_icon" >
    <i className={"material-icons show " + (this.state.open ? "responsive-hidden":"responsive-shown")}  
    onClick={() => {this.setState({open: !this.state.open})}}>
      menu
      </i><i className={"material-icons close " + (this.state.open ? "responsive-shown":"responsive-hidden")} 
      onClick={() => {this.setState({open: !this.state.open})}}>
        close
        </i></div>

    <div className={"menu "+ (this.state.open ? "responsive-shown":"responsive-hidden")}>
      <ul>
        {routes.map((route,index) => <li key={index} className={route.route === this.props.route ? "li-selected":""}>
        <Link to={route.route}>{route.title}</Link></li>)}
      </ul>
    </div>

  </header>

  );
}
}
export default Header;
