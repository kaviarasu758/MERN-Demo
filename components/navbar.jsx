import '../components/navbar.css'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <header>
            <nav className="jii">
                <div >
                    <h1>{props.Name}</h1>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/project">Project</a></li>
                        <li><a href="/usestate">Usestate</a>
                        </li>
                        <li><a href="/useref">Useref</a></li>
                        <li><a href="/usecontext">UseContext</a></li>
                        <li><a href="usememo">Usememo</a></li>
                        <li><a href="Backend/login.html">LOGIN</a></li>
                        <li><a href="Backend/index.html">SINGUP
                        </a></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar