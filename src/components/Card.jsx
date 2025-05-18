export const Card = ({name, number, photo, onEdit, onDelete}) => {

    return (
        <div className="card mb-3" style={{ width: 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={photo} className="img-fluid" alt="..." style={{ height: 142 }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {name}</h5>
                        <p className="card-text">Info: {number}</p>
                        <div className="d-flex">
                            <button className="btn btn-primary" onClick={() => onEdit()}>
                                Editar
                            </button>
                            <button className="btn btn-danger mx-3" onClick={() => onDelete()}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}