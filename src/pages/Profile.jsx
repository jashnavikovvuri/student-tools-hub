import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();

  const user = auth.currentUser;

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px] text-center">

        <div className="w-24 h-24 rounded-full bg-blue-600 text-white text-4xl flex items-center justify-center mx-auto">
          {user?.email?.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-3xl font-bold mt-5">
          My Profile
        </h2>

        <p className="mt-5 text-gray-600">
          Email
        </p>

        <h3 className="font-bold text-lg">
          {user?.email}
        </h3>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg"
        >
          Back to Home
        </button>

        <button
          onClick={logout}
          className="w-full mt-3 bg-red-500 text-white py-3 rounded-lg"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;