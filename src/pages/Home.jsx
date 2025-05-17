import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "./../components/Card.jsx";
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Contactos</h1>
			<div className="d-flex justify-content-center">
				<Card name={'Eusebio'} number={'684772598'} photo={''} onEdit={() => {}} onDelete={() => {}} />
			</div>
		</div>
	);
}; 