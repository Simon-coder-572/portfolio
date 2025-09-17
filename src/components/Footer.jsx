import translations from "../lang";
import "../styles/Navbar.css";

export default function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            <p>{translations.EN.title} - All rights reserved.</p>
        </footer>
    );
}
