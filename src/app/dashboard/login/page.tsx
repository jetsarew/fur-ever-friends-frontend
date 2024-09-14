

export default function Login(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return(
        <>
          <div className="login-container">
          <h2>Welcome to Fur-ever Friends</h2>
          
            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required />
            </div>


          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
          <p>Don’t have an account yet? <a href="/signup">Sign up</a></p>
          </div>

          <style >{`
        .login-container {
          max-width: 400px;
          margin: 100px auto;
          padding: 20px;
          text-align: center;
          background-color: transparent;
          border-radius: 10px;
          
        }
        h2 {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 20px;
        }
        .input-group {
          margin-bottom: 15px;
          text-align: left;
          color: #1C7DBB;
          font-weight: bold;
        }
        
        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .login-btn {
          width: 30%;
          padding: 10px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .login-btn:hover {
          background-color: #005bb5;
        }
        p {
          margin-top: 10px;
        }
        a {
          color: #0070f3;
          text-decoration: underline;
          
        }
      `}</style>
        </>
        
        
    )
}
