import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase";
function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
console.log(userCredential.user.uid);
    await setDoc(
  doc(db, "users", userCredential.user.uid),
  {
    username: username,
    email: email,
  }
);

console.log("Username saved successfully");
console.log("User saved to Firestore ✅");
    alert("Account Created Successfully ✅");
    navigate("/");
 } catch (error) {
  console.log(error);
  alert(error.code + " : " + error.message);
}}

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <form
        onSubmit={handleSignup}
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <h2>Create Account</h2>
<input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginTop: "15px",
  }}
/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "15px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Signup
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;