import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="nav-item-container">
          <a href="#" className="nav-item active">
            Home
          </a>
          {/* Decorative circles for Home */}
          <svg className="home-decoration" width="60" height="30" viewBox="0 0 60 30">
            <circle cx="10" cy="20" r="3" fill="currentColor" opacity="0.1" />
            <circle cx="25" cy="15" r="2" fill="currentColor" opacity="0.15" />
            <circle cx="40" cy="22" r="2.5" fill="currentColor" opacity="0.1" />
          </svg>
        </div>
        <a href="#" className="nav-item">
          Streams
        </a>
        <a href="#" className="nav-item">
          Party
        </a>
        <a href="#" className="nav-item">
          Premium
        </a>
      </div>

      <div className="navbar-center">
        <div className="logo-container">
          <div className="logo-blur"></div>
          <div className="logo">Gamor</div>
        </div>
      </div>

      <div className="navbar-right">
        <SignedOut>
          <SignInButton>
            <button className="sign-in-btn">Sign in</button>
          </SignInButton>
          <SignUpButton>
            <button className="create-account-btn">Create account</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
