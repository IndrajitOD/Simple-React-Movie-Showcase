import { Link } from "react-router-dom";
import "../css/footer.css";

function footer() {
    return (
    <div className="footer">
        <div className="footer-text">Develop by Indrajit</div>
    </div>
    );
    // return <nav className="navbar">
    //     <div className="navbar-brand">
    //         <Link to="/">Movie App</Link>
    //     </div>
    //     <div className="navbar-links">
    //         <Link to="/" className="nav-link">Home</Link>
    //         <Link to="/favorites" className="nav-link">Favorites</Link>
    //     </div>
    // </nav>
}

export default footer;