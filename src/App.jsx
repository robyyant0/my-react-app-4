import React from "react"; 
import RegisterPage from "./Pages/Register";


 

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">     
        <RegisterPage />
    </div>
  );
}

export default App;



 /*



          <div className="mb-6">
            <label htmlfor="password"
              className="block text-slate-700 text-sm font-bold mb-2"> Password
            </label>
            <input 
              type="password" 
              className="text-sm border rounded 2-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="*****"
            />       
          </div>





          <Button variant ="bg-red-700">Login</Button>
          <Button></Button>
          <Button>Register</Button>


 class ButtonSlate extends React.Component {
  render() {
    return  (
           <button 
                className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white"
                type="submit"  > Buy Now
            </button>
    );
  }
}

class ButtonBlack extends React.Component {
  render() {
    return  (
           <button 
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"  > Buy Now
            </button>
    );
  }
}
*/