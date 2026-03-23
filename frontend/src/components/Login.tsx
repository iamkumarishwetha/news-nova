import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

         <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer">
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have an account? <span className="text-blue-600">Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;