import { useState } from "react";

const Login = () => {

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const submitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, name);
    
  }

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={submitHandler}>
      <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[350px] sm:min-w-96 border rounded-xl text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === "Sign Up"?"Create An Account": "Log In"}</p>
        <p>Please {state === "Sign Up"?"Sign Up": "Log In"} to book an appointment</p>
        {state === "Sign Up"&&
        <div className="w-full">
          <p>full name</p>
          <input className="border border-zinc-300 w-full p-2 mt-1" type="text" onChange={(e)=>{setName(e.target.value)}} value={name} required/>
        </div>
      }
        <div className="w-full">
          <p>Email</p>
          <input className="border border-zinc-300 w-full p-2 mt-1" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className="border border-zinc-300 w-full p-2 mt-1" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">{state === "Sign Up"?"Create An Account": "Log In"}</button>
        {state === "Sign Up"?<p> Already have an account? <button onClick={()=>setState("Log In")} className="text-primary underline cursor-pointer"> Login here</button></p>:
        <p> Create new account <button onClick={()=>setState("Sign Up")} className="text-primary underline cursor-pointer"> Click here</button></p>}
      </div>

    </form>
  )
}

export default Login