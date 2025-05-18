
export const FormContact = ({title}) => {

    return (
        <div>
            <form>
                <fieldset>
                    <legend>{title}</legend>
                    <div className="mb-3">
                        <label for="name" className="form-label">Full name</label>
                        <input type="text" id="name" className="form-control" placeholder="Full name" />
                    </div>
                     <div className="mb-3">
                        <label for="photo" className="form-label">Url photo</label>
                        <input type="text" id="photo" className="form-control" placeholder="photo" />
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input type="text" id="Email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                        <label for="Address" className="form-label">Address</label>
                        <input type="text" id="Address" className="form-control" placeholder="Address" />
                    </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a className="p-3" href="https://cautious-space-chainsaw-975xw7qwq9jrf7wqp-3000.app.github.dev/">Get back to contacts</a>
                </fieldset>
            </form>

        </div>
    )
}