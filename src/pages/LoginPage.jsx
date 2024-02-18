import { useState } from "react";
import { useLoginMutation } from "../redux/api/authApi";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    name: null,
    password: null,
  });

  console.log(credentials);
  const [login] = useLoginMutation();
  return (
    <div>
      <h1>Enter your credentials</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setCredentials((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setCredentials((prev) => ({ ...prev, password: e.target.value }));
        }}
      />
      <button onClick={() => login(credentials)}>Login</button>
    </div>
  );
};

export default LoginPage;
