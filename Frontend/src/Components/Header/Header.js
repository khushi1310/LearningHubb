import "./Header.css";
import logo from "../../images/logo111.png";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src = {logo} height = "200" width = "150" alt = ""/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor02"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/flowcharts">
                                    Flowcharts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tracker">
                                    Tracker
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto">
                            <li>
                                <a
                                    className="block py-1 px-3 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                    href="/login"
                                >
                                    Sign in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
