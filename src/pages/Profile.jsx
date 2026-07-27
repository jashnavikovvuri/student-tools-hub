import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate("/");
        return;
      }

      setEmail(user.email);

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUsername(docSnap.data().username || "");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [navigate]);

  // Save Username
  const saveUsername = async () => {
    try {
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        username: username,
        email: auth.currentUser.email,
      });

      alert("Username Saved Successfully ✅");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">

        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
            👤
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mt-5">
          My Profile
        </h2>

        <div className="mt-6">

          <p className="text-gray-500">Username</p>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg"
          />

          <button
            onClick={saveUsername}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Save Username
          </button>

        </div>

        <div className="mt-6">
          <p className="text-gray-500">Email</p>

          <h3 className="text-lg font-semibold">
            {email}
          </h3>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>

        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;