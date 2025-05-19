import { FormContact } from "../components/FormContact"

export const EditContact = () => {

    const createContacts = (body) => {
        fetch('https://playground.4geeks.com/contact/agendas/Ricks/contacts', {
            method: 'POST',

            headers : {
                'content-Type': 'application/Json'
            }
        })
    }

    return  (
        <div className="container">
            <h3>Add new contact</h3>
            <FormContact title={'Edit Contact'} onSubmit={() => {}} />
        </div>
    )
}
