import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
  <div className="container-fluid">
    <span className="navbar-brand">🧠 QuizMaster</span>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
