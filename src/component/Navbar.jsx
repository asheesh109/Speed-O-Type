import "./Navbar.css";
import { SiPagespeedinsights } from "react-icons/si";
import { CiBrightnessDown } from "react-icons/ci";
import { MdOutlineModeNight } from "react-icons/md";
function Navbar(props)
{
    return <div className={props.dabba? "dark-navbar" : "navbar"}>
        <h1><SiPagespeedinsights /> SpeedoType</h1>
        <div className="nav-right">
        <p className="best-text">Best Score : <span className="best-score">{props.best}</span></p>
        <button className="theme-toggle" onClick={props.changeTheme}>{props.dabba? <CiBrightnessDown /> : <MdOutlineModeNight />}</button>
        </div>

    </div>
}
export default Navbar;