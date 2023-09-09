import Button from "../Elements/Button";

const CardProduct =(props) => {
    const {children} = props;
        return (
            <div className = "flex justify-center mx-2">
                <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
                    {children}            
                </div>
            </div>        
        );
};

const Header = (props) => {
    const {image} = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            <a href="#">
                <img src={image} 
                    alt="product"                         
                    className="p-8 rounded-t-lg w-3/5"
                />
            </a>
        </div>
    )
};


const Body = (props) => {
    const {children , name} = props;
    return (
        <div className="px-5 pb-5 h-full">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-red-400 "> 
                        {name}
                    </h5>
                    <p className="text-m text-white">{children}</p>                
                </a>
            </div>
    )
};

const Footer = (props) => {
    const {price} = props;
    return(
        <div className="flex item-center justify-between px-5 pb-5">
                <span className="text-xl fond-bold text-white">{price} </span>
                <Button className="bg-blue-700 rounded-lg shadow"> Add To Cart  
                </Button>
        </div>
    )
} 

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;