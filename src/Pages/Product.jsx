import CardProduct from "../components/Flagments/CardProduct";

const Products = [
    {
        id : 1,
        name : "Sepatu Baru",
        price : "Rp 1.000.000",
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, 
        temporibus perspiciatis iure nulla accusamus nesciunt quibusdam! Earum nesciunt animi provident. 
        Fugit quisquam ex quos dolores, totam a dolorem quam rem?`,
    },
    {
        id : 2,
        name : "Sepatu Lama",
        price : "Rp 500.000",
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur`,
    },
    {
        id : 3,
        name : "Sepatu Adidas",
        price : "Rp 1.500.000",
        image : "/src/assets/images/sepatu.jpg",
        desciption : `Ini adalah separtu baru dari brand adadunk`,
    },
];

const ProductPage = () => {
    return (
        <div className = "flex justify-center py-5 ">
            {Products.map ((product) => (
                <CardProduct key={product.id}>
                <CardProduct.Header image= {product.image}/> 
                <CardProduct.Body name ={product.name}>
                    {product.desciption}
                </CardProduct.Body>
                    <CardProduct.Footer price = {product.price} /> 
                </CardProduct>
            ))}
        </div>
    );
};

export default ProductPage;