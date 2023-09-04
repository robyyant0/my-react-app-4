const Label = (props) =>{
    const {name, children } = props;
    return (
        <label
            htmlfor = {name}
            className="block text-slate-700 text-sm font-bold mb-2"        
        >
            {children}
        
        </label>            
    );    
};

export default Label;

/*
<label htmlfor="email"
className="block text-slate-700 text-sm font-bold mb-2"> 
Email
</label>

*/