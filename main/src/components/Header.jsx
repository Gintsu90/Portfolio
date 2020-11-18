import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
    const {info} = props;
    console.log(info)
    return (
        <div>
            {info[0].name}
            <br/>
            {info[0].birthday}
            <br/>
            {info[0].city}
            <hr/>
            {info[1].name}
        </div>
    );
}

export default Header;