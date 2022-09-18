import React,{ useContext } from 'react';

const UserLogin = () => {

  // const { loginUser } = useContext('')

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // username.length > 0 && loginUser(username, password);
    console.log(username,password)
    console.log(username.length)
  }



  return (
    // <div>Login Page</div>
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor='username'>
          Username
        </label>
        <br/>
        <input 
          type="text" 
          id="username" 
          placeholder="Enter Username"
        />
        <br/>
        <br/>
        <label>
          password
        </label>
        <br/>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
        />
        <br/>
        <br/>
        <button
          type="submit"
        >
          Login
        </button>

      </form>
    </section>
  )
}

export default UserLogin