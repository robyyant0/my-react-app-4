import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Flagments/FormLogin";
 

const LoginPage = () => {
    return(
        <AuthLayouts title="login" type="login">
            <FormLogin  />           
        </AuthLayouts>
    );
};

export default LoginPage;