import { useState } from "react";
import { registerUserService } from "../services";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-empty
    try {
      await registerUserService({ email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email here"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button>Create Account</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default RegisterPage;
