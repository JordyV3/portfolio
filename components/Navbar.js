import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand nav-link">Jordy 😐</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <Link href="/">
                            <a className="nav-link btn btn-outline-dange" >Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link btn btn-outline-dange " >Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/github">
                            <a className="nav-link btn btn-outline-dange" >GitHub</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className="nav-link btn btn-outline-dange" >Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;