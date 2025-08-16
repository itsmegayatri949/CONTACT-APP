import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts")
      .then(res => setContacts(res.data));
  }, []);

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    setContacts(contacts.filter(c => c._id !== id));
  };

  return (
    <div>
      <h2>📒 Contact List</h2>
      <ul>
        {contacts.map(c => (
          <li key={c._id}>
            {c.name} - {c.email} - {c.phone}{" "}
            <Link to={`/edit/${c._id}`}>✏️ Edit</Link>{" "}
            <button onClick={() => deleteContact(c._id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
