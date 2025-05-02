import { useState } from 'react';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Registro de Usuario</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Nombre:</label><br />
          <input type="text" id="name" name="name" required />
        </div>

        <br />

        <div>
          <label htmlFor="country">País:</label><br />
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Seleccione un país</option>
            <option value="mexico">México</option>
            <option value="argentina">Argentina</option>
            <option value="colombia">Colombia</option>
            <option value="chile">Chile</option>
            <option value="peru">Perú</option>
          </select>
        </div>

        <br />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;
