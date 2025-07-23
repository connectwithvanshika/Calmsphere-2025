import { signInWithGoogle } from "../firebase"; // adjust path if needed
import "./LoginPage.css"; 

const LoginPage = ({ onNavigate }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      console.log("Logged in as:", user.displayName);
      onNavigate("dashboard"); // redirect after login
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back.</h2>
        <p>Log in to continue your wellness journey.</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        
        <button onClick={handleGoogleLogin} className="google-login-btn">
          Sign in with Google
        </button>

        <p className="switch-link">
          Don't have an account? <a href="#" onClick={() => onNavigate("signup")}>Sign up</a>
        </p>
        <p className="switch-link">
          ← <a href="#" onClick={() => onNavigate("home")}>Back to Home</a>
        </p>
      </div>
    </div>
  );
}; 
export default LoginPage