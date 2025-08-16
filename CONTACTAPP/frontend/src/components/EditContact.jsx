import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts")
      .then(res => {
        const contact = res.data.find(c => c._id === id);
        if (contact) setForm(contact);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/contacts/${id}`, form);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} /><br />
        <input name="email" value={form.email} onChange={handleChange} /><br />
        <input name="phone" value={form.phone} onChange={handleChange} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
