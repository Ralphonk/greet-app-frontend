import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchGreeting = async () => {
    setMessage("");
    setError("");
    const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
    } else {
      setError(data.error);
    }
  };

  return (
    <>
      <img src="../src/assets/YoungLabsLogo.png" alt="younglabs logo" style={{ display: "block", margin: "0 auto", width: "550px", height: "auto" }} />
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <i style={{ display: "block", margin: "50px", color: "GrayText" }}>Your friend, your guide and your partner in the journey of parenting</i>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchGreeting}>Get Greeting</button>

        {message && <p style={{ color: "green", margin: "10px" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default App;
