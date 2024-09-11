import React, { useState } from 'react';
import './login.css'; // Import your component-specific CSS file

export default function Login() {

  function abc(){
    document.getElementById('logpage').style.display = "none";
  }

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Data: 
      User Name: ${userData.userName}
      Email: ${userData.email}
      Password: ${userData.password}`);
  };

  return (
    <div className='log' id='logpage'>
      <div className="logmain">
        <button className="close-button" onClick={abc}>&#10006;</button>
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="userName" placeholder="User name" required="" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" required="" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" required="" onChange={handleInputChange} />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required="" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" required="" onChange={handleInputChange} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import './login.css'; // Import your component-specific CSS file

// export default function Login() {
//   function abc(){
//     document.getElementById('logpage').style.display = "none";
//   }

//   return (
//     <div className='log'id='logpage'>
//       <div className="logmain">
//         <button className="close-button" onClick={abc}>
//           &#10006;
//         </button>
//         <input type="checkbox" id="chk" aria-hidden="true" />

//         <div className="signup">
//           <form>
//             <label htmlFor="chk" aria-hidden="true">
//               Sign up
//             </label>
//             <input type="text" name="txt" placeholder="User name" required="" />
//             <input type="email" name="email" placeholder="Email" required="" />
//             <input type="password" name="pswd" placeholder="Password" required="" />
//             <button>Sign up</button>
//           </form>
//         </div>

//         <div className="login">
//           <form>
//             <label htmlFor="chk" aria-hidden="true">
//               Login
//             </label>
//             <input type="email" name="email" placeholder="Email" required="" />
//             <input type="password" name="pswd" placeholder="Password" required="" />
//             <button>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
