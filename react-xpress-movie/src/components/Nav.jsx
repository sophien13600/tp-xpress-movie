import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <div>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Xpress Movie</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div
          className="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-start"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* <% if (user && user.role === 'abonne') { %> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/films/favoris"> Favoris </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/compte">
                {/* <%= user.prenom %> <%= user.nom %> */}
              </NavLink>
            </li>
            {/* <% } else if (user && user.role === 'admin') { %> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/compte">
                {/* <%= user.prenom %> <%= user.nom %> (Admin) */}
              </NavLink>
            </li>
            <li className="nav-item">
              <form method="get" action="/logout" className="d-inline">
                <button className="btn btn-outline-danger" type="submit">
                <i className="fas fa-sign-out-alt me-1"></i>  Déconnexion
                </button>
              </form>
            </li>
            {/* <% } else { %> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/inscription">S'inscrire</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-primary" to="/connexion">Connexion</NavLink>
            </li>
            {/* <% } %> */}
          </ul>
        </div>
      </div>
    </nav>
    </div>


    )
}