import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const {children, title, type} = props; 
    return(
        <div className="flex justify-center min-h-screen items-center"> 
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-red-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                Welcome, Please enter your details
                </p>
                {children}     

                {/* tulisan dibawah button */}
                <p className="text-sm mt-5 text-center">
                    {type === 'login' ? "Don't have an account? " : "Already Heave an account? "}
                    
                    {type === 'login' && (
                        <Link to="/register" className="font-bold text-red-600"> Register </Link>
                    )}
                    {type === 'register' && (
                        <Link to="/login" className="font-bold text-red-600"> Login </Link>
                    )}

                    {type === 'logout' && (
                        <Link to="/home" className="font-bold text-red-600"> logout </Link>
                    )}
                </p>

              
            </div>
        </div>
    );
};




export default AuthLayouts;


/*

  <Navigation type={type} />

  
    const Navigation = ({type}) => {
    if(type === 'login'){
        return
        (
            <p className="text-sm mt-5 text-center">
                Don't have an account? " "
                <Link to="/register" className="font-bold text-red-600"> Register </Link>
            </p>
        );
    } 
    else 
    {
        return
        (
            <p className="text-sm mt-5 text-center">
                Already Heave an account?  " "
                <Link to="/register" className="font-bold text-red-600"> Login </Link>
            </p>
        );

    }
};
*/