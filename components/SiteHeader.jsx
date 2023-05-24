// const { default: Link } = require("next/link");
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="wrapper">
                <Link href={"/"}>
                    <img src="/fullLogo.png" alt="Logo" className="w-3/4 h-auto" />
                </Link>
                <nav className="site-nav">
                    <ul className="links">
                        <li className="link">
                            <Link href={"/articles"}>All Posts</Link>
                        </li>
                        <li className="link">
                            <Link href={"/articles/web-development"}>Web Dev</Link>
                        </li>
                        <li className="link">
                            <Link href={"/articles/ai-ml"}>AI/ML</Link>
                        </li>
                        <li className="link">
                            <Link href={"/articles/system-architecture"}>System Archicture</Link>
                        </li>
                        <DropdownMenu />
                        <li className="link">
                            <Link href={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;