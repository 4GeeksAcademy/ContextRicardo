import { useNavigate } from "react-router-dom"
import { FormContact } from "../components/FormContact"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useState } from "react"
import { prefetchDNS } from "react-dom"
export const CreateContact = () => {

    const navigate = useNavigate ()
    const {store,dispatch} = useGlobalReducer ()
    const [contact, setcontact] = useState ({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    const handleChange = (e) => {
        const {name,value}= e.target
        setcontact (prev => ({...prev,[name]:value}))
     } ///maneja cambios en el formulario para guardar la informacion (meter parametro e evento) [name]    }
    const handleSubmit = async (e) => {
        e.preventDefault ()
        try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/Ricks/contacts",{
            method:'POST',
            headers:{ 
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        const newContact = await response.json()
        dispatch ({type:"add_contact",payload:newContact})
        navigate("/")
        } catch (error) {
            console.error ("errorfatal",error)
        }
    }
    const createContacts = (body) => {
        fetch('https://playground.4geeks.com/contact/agendas/Ricks/contacts', {
            method: 'POST',

            headers : {
                'Content-Type': 'application/json'
            }
        })
    }

    return  (
        <div className="container, mb-3">
            <h3>Add new contact</h3>
            <form onsubmit={handleSubmit} className="form-label">
                <label htmlFor="name"> NEW CONTACT INFO </label>
                <input
                type="text"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
                />
                <input
                type="text"
                id="address"
                name="address"
                value={contact.address}
                onChange={handleChange}
                placeholder="Address"
                />
                <input
                type="text"
                id="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="phone"
                />
                <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Full name"
                />
                <button type="button,submit" className="btn btn-primary" onClick={() => navigate("/")}>
                </button>
            </form>
            
        </div>
    )
}

