export default function DashboardAdmin() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-between align-items-center mb-4">
              <div className="col-10">
                <div className="d-flex flex-row justify-content-between align-items-center mb-4">
                  <h1 className="h2">Gestion des Films</h1>
                  {/* <a href="/admin/add-film" className="btn btn-primary"> */}
                    <i className="fas fa-plus"></i> Ajouter un Film
                  {/* </a> */}
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  {/* <% if (films && films.length > 0) { %> */}
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th>ID</th>
                          <th>Image</th>
                          <th>Titre</th>
                          <th>Genre</th>
                          <th>Date de sortie</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <% films.forEach(film => { %> */}
                        <tr>
                          {/* <td><%= film.id %></td> */}
                          <td>
                            <img
                            //   src="<%= film.image %>"
                            //   alt="<%= film.titre %>"
                            />
                          </td>
                          <td>
                            {/* <strong><%= film.titre %></strong> */}
                            <br />
                            <small className="text-muted">
                              {/* <%= film.description.length > 100 ?
                        film.description.substring(0, 100) + '...' :
                        film.description %> */}
                            </small>
                          </td>
                          {/* <td><%= film.genre %></td> */}
                          <td>
                            {/* <%= new Date(film.dateSortie).toLocaleDateString('fr-FR') */}
                            {/* %> */}
                          </td>
                          <td>
                            <div className="btn-group" role="group">
                              <a
                                href="/admin/edit-film/<%= film.id %>"
                                className="btn btn-sm btn-outline-primary"
                                title="Modifier"
                              >
                                <i className="fas fa-edit"></i>
                              </a>
                              <form
                                method="POST"
                                action="/admin/delete-film/<%= film.id %>"
                              >
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-outline-danger"
                                  title="Supprimer"
                                  onClick="return confirm('Êtes-vous sûr de vouloir supprimer ce film ?')"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </form>
                            </div>
                          </td>
                        </tr>
                        {/* <% }); %> */}
                      </tbody>
                    </table>
                  </div>
                  {/* <% } %> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
