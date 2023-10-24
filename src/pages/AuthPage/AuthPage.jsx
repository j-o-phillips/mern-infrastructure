import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  function handleShowSignUp() {
    setShowSignUp(true);
  }
  function handleShowLogin() {
    setShowSignUp(false);
  }
  return (
    <>
      <h1>AuthPage</h1>
      {showSignUp ? (
        <SignUpForm setUser={setUser} handleShowLogin={handleShowLogin} />
      ) : (
        <LoginForm setUser={setUser} handleShowSignUp={handleShowSignUp} />
      )}
    </>
  );
}
