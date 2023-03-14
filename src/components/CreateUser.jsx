import axios from 'axios';
import React, { useState } from 'react'


const CreateUser = (props) => {
  const [username, setUsername] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log('Error: '+err));
    setUsername('');
  }
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Username</label>
          <input type="text"
          required
          className='form-control'
          value={username}
          onChange={onChangeUsername}
           />
        </div>
        <div className="form-group">
          <input type="submit"
          value="Create User"
          className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;