
import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    // get products
    const productsData = await fetch('products.json');
    const Products = await productsData.json();
    //  api modify -- get cart

    const savedCart = getStoredCart();
    // console.log('save cart', savedCart);
    const initialCart = [];

    for(const id in savedCart){
    // console.log(id)

     const addedProduct = Products.find(product =>product.id === id);   
    //  console.log(id, addedProduct);

        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
        }
    return {Products: Products, initialCart: initialCart};
}