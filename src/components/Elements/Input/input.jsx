const Input= (props) => {
    const {type, placeholder, name} =props;
    return (
        <input  
            type= {type}
            className="text-sm border rounded 2-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={placeholder}
            name={name}
            />   

    );
};


export default Input;
 

/*
 <input 
              type="password" 
              className="text-sm border rounded 2-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="*****"
            />      
*/