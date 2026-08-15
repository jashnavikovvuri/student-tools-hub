import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful ✅");

    navigate("/home");
  } catch (error) {
    alert(error.message);
  }
};

const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter your email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link has been sent to your email.");
  } catch (error) {
    alert(error.message);
  }
};
  
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
        onSubmit={handleLogin}
        style={{
          width: "350px",
          padding: "30px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Student Tools Hub</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "20px" }}
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
    cursor: "pointer",
  }}
>
  Login
</button>
<p
  onClick={handleForgotPassword}
  style={{
    textAlign: "right",
    marginTop: "10px",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
  }}
>
  Forgot Password?
</p>

<p style={{ textAlign: "center", marginTop: "15px" }}>
  New User? <Link to="/signup">Create Account</Link>
</p>
      </form>
    </div>
  );
}

export default Login;