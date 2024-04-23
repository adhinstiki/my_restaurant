import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="logo">
          <Image
            src="/images/logo-black.png"
            width={302}
            height={40}
            alt="Logo"
          />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/" className="nav-item" id="nav-item-dropdown">Menu</Link>
            <Link href="/" className="nav-item">Blog</Link>
            <Link href="/" className="nav-item">Event</Link>
            <Link href="/" className="nav-item">Reservation</Link>
          </ul>
        </div>
        <div className="navbar-right">
          <IoSearch />
          <FaCartShopping />
        </div>
      </div>

    </nav>
  )
}

export default Navbar