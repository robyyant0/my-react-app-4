import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Flagments/FormRegister";

const RegisterPage = () => {
    return(
        <AuthLayouts title="Register" >
            <FormRegister  /> 
        </AuthLayouts>
    );
};

export default RegisterPage;