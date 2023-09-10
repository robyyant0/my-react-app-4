import { Fragment,useEffect,useState } from "react";
import CardProduct from "../components/Flagments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Flagments/Counter";


const Products = [
    {
        id : 1,
        name : "Sepatu Baru",
        price : 1000000,
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, 
        temporibus perspiciatis iure nulla accusamus nesciunt quibusdam! Earum nesciunt animi provident. 
        Fugit quisquam ex quos dolores, totam a dolorem quam rem?`,
    },
    {
        id : 2,
        name : "Sepatu Lama",
        price : 500000,
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur`,
    },
    {
        id : 3,
        name : "Sepatu Adidas",
        price : 1500000,
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Ini adalah separtu baru dari brand adadunk`,
    },
];

const ProductPage = () => {
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState([0]);

    // Initial State for cart: When retrieving data from localStorage, you should provide a default value for cart in
    //case there's nothing stored in localStorage. In your useEffect, you're using an empty array as a fallback,
    //which is not a valid JSON format. You should use [] instead:

    useEffect (() => {
        // Retrieving from localStorage
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    } , []);

 
      

    useEffect(() => {
            if (cart.length > 0){
                const sum = cart.reduce((acc, item) => {
                    const product = Products.find(product => product.id===item.id );
                    return acc + product.price * item.qty;
                    } , 0)
                    setTotalPrice(sum);
                    // Saving to localStorage
                    localStorage.setItem("cart", JSON.stringify(cart));

            }
    }, [cart]);
    

    const handleLogout = () => {
        localStorage.removeItem ('email');
        localStorage.removeItem('password');
        window.location.href = '/login'
    };
    const email = localStorage.getItem('email');

    const handleAddToCart = (id) => {
      if(cart.find(item => item.id===id )){
        setCart(
            cart.map(item => item.id===id ? {...item, qty : item.qty + 1 } : item )
        )
      }
      else {
        setCart ([...cart, {id,qty:1}])
      }
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-red-600 text-white items-center px-5 ">
               <div className="mr-4"> {email}</div>
            <Button className="ml-4 bg-black" onClick={handleLogout}>  Logout</Button>
            </div>

            <div className = "flex justify-center py-5 ">
               <div className="w-4/6 flex flex-wrap">
                    {Products.map ((product) => (
                        <CardProduct key={product.id}>
                        <CardProduct.Header image= {product.image}/> 
                        <CardProduct.Body name ={product.name}>
                            {product.desciption}
                        </CardProduct.Body>
                            <CardProduct.Footer 
                                price = {product.price} 
                                id = {product.id} 
                                handleAddToCart={handleAddToCart}/> 
                        </CardProduct>
                    ))}

               </div>
               <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-red-600 ml-5 mb-2">Cart</h1>            
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th> Product</th>
                                <th> price</th>
                                <th> Qty</th>
                                <th> Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map ((item) => {
                                    const product = Products.find(
                                        (product) => (product.id) === item.id
                                );
                                return (
                                    <tr key= {item.id}> 
                                        <td>{product.name}</td>
                                        <td>Rp{" "}
                                            {   (product.price).toLocaleString('id-ID', { 
                                                styles:"currency", 
                                                currency:"IDR", 
                                            })} 
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>Rp{" "}
                                            { (item.qty *  product.price).toLocaleString('id-ID', { 
                                                    styles:"currency", 
                                                    currency:"IDR", 
                                            })} 
                                        </td>
                                    </tr>                                    
                                )
                            })}
                            <tr>
                                <td className="colSpan={3}">
                                    <b>Total Price</b>
                                </td>
                                <td> 
                                    <b>
                                    Rp {" "}
                                    {   (totalPrice).toLocaleString('id-ID', { 
                                                styles:"currency", 
                                                currency:"IDR", 
                                        })
                                    } 
                                    </b>

                                </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
            </div>
     
          
        </Fragment>
    );
};

export default ProductPage;


/*

const handleAddToCart = (id) => {
        setCart ([ 
            ...cart,
            {
                id,
                qty :1,
            },
        ])
    }

import Counter from "../components/Flagments/Counter";
        <u1>
                        {cart.map((item) => ( 
                        <li key={item.id}>    {item.id} </li>
                    ))}
                    </u1>
*/