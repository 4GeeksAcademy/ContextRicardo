import { useState } from "react"

export const FormContact = ({ title, onSubmit }) => {
    const {name, setName} = useState('');
    const { email, setEmail} = useState('');
    const { phone, setPhone} = useState('');
    const { address, setAddress} = useState('');

    return (
        <div>
            <form>
                <fieldset>
                    <legend>{title}</legend>
                    <div className="mb-3">
                        <label for="name" className="form-label">Full name</label>
                        <input value={name} type="text" id="name" className="form-control" placeholder="Full name" onChange={() => setName(EventTarget.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">phone</label>
                        <input value={phone} type="text" id="phone" className="form-control" placeholder="phone" onChange={() => setPhone(EventTarget.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input value={email} type="text" id="Email" className="form-control" placeholder="Email" onChange={() => setEmail(EventTarget.target.value)}/>
                    </div>
                    <div className="mb-3">
                    </div>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label for="Address" className="form-label">Address</label>
                            <input value={address} type="text" id="Address" className="form-control" placeholder="Address" onChange={() => setAddress(EventTarget.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(evt) => {
                        evt.preventDefault();
                        onSubmit({
                            name,
                            photo,
                            email,
                            address,
                            phone,
                        })
                    }}>Submit</button>
                    <a className="p-3" href="https://cautious-space-chainsaw-975xw7qwq9jrf7wqp-3000.app.github.dev/" onClick={() => {
                        setName('')
                        setEmail('')
                        setPhone('')
                        setAddress('')
                    }}>Get back to contacts</a>
                </fieldset>
            </form>

        </div>
    )
}