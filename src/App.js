import { useState } from "react";
import "./App.css";
import monke from "./monke.jpg";

function App() {
  const [form, setForm] = useState({
    imie: "",
    nazwisko: "",
    ulica: "",
    miasto: ""
  });

  const [tabela, setTabela] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTabela([...tabela, form]);
    setForm({ imie: "", nazwisko: "", ulica: "", miasto: "" });
  };

  return (
    <>
      <header className="header">Moja aplikacja</header>

      <div className="container">
        <img src={monke} width={200} height={200} alt="monke" />

        <h2>Formularz</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="imie"
            placeholder="Imię"
            value={form.imie}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nazwisko"
            placeholder="Nazwisko"
            value={form.nazwisko}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ulica"
            placeholder="Ulica"
            value={form.ulica}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="miasto"
            placeholder="Miasto"
            value={form.miasto}
            onChange={handleChange}
            required
          />

          <button type="submit">Wyślij</button>
        </form>

        {tabela.length > 0 && (
          <table className="tabela">
            <thead>
              <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Ulica</th>
                <th>Miasto</th>
              </tr>
            </thead>

            <tbody>
              {tabela.map((rekord, index) => (
                <tr key={index}>
                  <td>{rekord.imie}</td>
                  <td>{rekord.nazwisko}</td>
                  <td>{rekord.ulica}</td>
                  <td>{rekord.miasto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <footer className="footer">© 2025 Moja aplikacja</footer>
    </>
  );
}

export default App;

