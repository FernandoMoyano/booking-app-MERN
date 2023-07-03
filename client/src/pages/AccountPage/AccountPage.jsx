import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, Navigate } from "react-router-dom";

const AccountPage = () => {
  const { ready, user } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  if (ready && !user) {
    return "Loading...";
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link
          className="py-2 px-6 bg-primary rounded-full text-white"
          to={"/accounts"}
        >
          My Profile
        </Link>
        <Link className="py-2 px-6" to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className="py-2 px-6" to={"/account/pleaces"}>
          My acommodations
        </Link>
      </nav>
    </div>
  );
};

export default AccountPage;
