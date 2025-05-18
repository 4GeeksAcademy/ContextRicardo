import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "./../components/Card.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const loadP = async () => {

			const resp = await fetch('https://playground.4geeks.com/contact/agendas/Ricks/contacts', {
				method: 'GET'
			});
			const repJson = await resp.json();
			dispatch({
				type: 'load_contacts',
				payload: {
					contacts: repJson
				}
			})
		}

		loadContacts();

	}, [])



	return (
		<div className="text-center mt-5">
			<h1>Contactos</h1>
			<div className="d-flex flex-column justify-content-center">
				{
					store.contacts.map((contact) => {
						<Card key={contact._id} name={contact.name} number={contact.phone} photo={contact.photo} Address={contact.Address} Email={contact.Email} onEdit={() => { }} onDelete={() => { }} />
					})
				}
				<Card name={'Eusebio'} number={'684772598'} photo={''} Address={''} Email={''} onEdit={() => { }} onDelete={() => { }} />
			</div>
		</div>
	);
}; 