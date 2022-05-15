import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = React.useContext(AuthContext);

  const from = (location.state && location.state.from.pathname) || '/';

  React.useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const user = formData.get('email');

    auth.signIn(user, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="single-layout">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="login-fields">
          <div className="field">
            <label>Email</label>
            <input type="text" name="email"/>
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password"/>
          </div>
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;