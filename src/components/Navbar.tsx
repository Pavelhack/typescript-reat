import { NavLink } from "react-router-dom"

export const Navbar: React.FC = () => {
    return(
            <nav>
                <div className="nav-wrapper blue accent-3 px1">
                        <NavLink to= "/" className="brand-logo">React and Typescript</NavLink>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to= "/">Main</NavLink></li>
                        <li><NavLink to = "/About">Info about us</NavLink></li>
                    </ul>
                </div>
            </nav>
    )
}