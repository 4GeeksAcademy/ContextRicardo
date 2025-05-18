import { FormContact } from "../components/FormContact"



export const CreateContact = () => {
    const CreateContact = (body) = {

        fetch('https://playground.4geeks.com/contact/agendas/FormConact/contacts/10', {
            method: 'POST'
        headers : {
                'content-Type': 'application/Json'
        }
        body: JSON.stringify(body)
}
    )}
    }


return (
    <div className="container">
        <h3>Add new contact</h3>
        <FormContact title={'New Contact'} onSubmit={createPilot} />
    </div>
)
