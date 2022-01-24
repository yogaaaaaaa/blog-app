import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <label >Email</label>
        <input type="text" placeholder="Enter Your Email Here..." />
        <label >Password</label>
        <input type="password" placeholder="Enter Your Password..." />
      </form>
    </div>
  );
}
