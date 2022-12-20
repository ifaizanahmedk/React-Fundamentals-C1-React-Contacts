import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
	const [contacts, setContacts] = useState([]);

	// useEffect(callback func, dependancies)
	useEffect(() => {
		const getContacts = async () => {
			const res = await ContactsAPI.getAll();
			setContacts(res);
		};

		getContacts();
	}, []);

	const removeContact = (contact) => {
		ContactsAPI.remove(contact);
		setContacts(contacts.filter((c) => c.id !== contact.id));
	};

	return (
		<div>
			<ListContacts contacts={contacts} onDeleteContact={removeContact} />
		</div>
	);
};

export default App;

// {
// 	id: "karen",
// 	name: "Karen Isgrigg",
// 	handle: "karen_isgrigg",
// 	avatarURL: "../icons/person.svg",
// },
// {
// 	id: "richard",
// 	name: "Richard Kalehoff",
// 	handle: "richardkalehoff",
// 	avatarURL: "http://localhost:5001/richard.jpg",
// },
// {
// 	id: "tyler",
// 	name: "Tyler McGinnis",
// 	handle: "tylermcginnis",
// 	avatarURL: "http://localhost:5001/tyler.jpg",
// },
