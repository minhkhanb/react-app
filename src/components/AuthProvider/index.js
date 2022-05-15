import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const signIn = (newUser, callback) => {
    setUser(newUser);

    if (typeof callback === "function") {
      callback();
    }
  };

  const signOut = (callback) => {
    setUser(null);

    if (typeof callback === "function") {
      callback();
    }
  };

  const authValues = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }) => {
  const auth = React.useContext(AuthContext);
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export const AuthStatus = () => {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user]);

  if (!auth.user) {
    return <p>You are not login!</p>;
  }

  return (
    <div>
      <p>Welcome {auth.user}</p>

      <button
        onClick={() => {
          auth.signOut(() => navigate("/"));
        }}
      >
        Sign Out
      </button>
    </div>
  );
};
