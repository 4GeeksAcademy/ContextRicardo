import { FormContact } from "../components/FormContact"


export const CreateContact = () => {

    return (
        <div className="container">
            <h3>Add new contact</h3>
            <FormContact title={'New Contact'}/>
        </div>
    )
}