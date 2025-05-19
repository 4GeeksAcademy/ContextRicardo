import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "./../components/Card.jsx";
import { useNavigate } from "react-router-dom";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const navigate = useNavigate();

	useEffect(() => {

		const loadContacts = async () => {

			const resp = await fetch('https://playground.4geeks.com/contact/agendas/Ricks/contacts', {
				method: 'GET',
				headers: {
					"Content-Type": "application/json"
				}
			});
			const repJson = await resp.json();
			dispatch({
				type: 'load_contacts',
				payload: {
					contacts: repJson.contacts
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
				<Card
					name={'Eusebio'}
					number={'684772598'}
					photo={''}
					Address={''}
					Email={''}
					onEdit={() => navigate(`/edit-contact/${contact._id}`)}
					onDelete={() => { }} />
			</div>
		</div>
	);
}; 