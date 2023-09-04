import Input from "./input";
import Label from "./label";

const InputForm = (props) => {
    const {label, name, type, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label} </Label>
            <Input name={name} type={type} placeholder={placeholder} /> 
        </div>
    );
};


export default InputForm;



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
          
*/