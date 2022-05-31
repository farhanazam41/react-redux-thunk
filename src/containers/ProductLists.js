import { useDispatch } from "react-redux";
import axios from 'axios'
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { setProducts,fetchProducts } from '../redux/actions/productActions'


const ProductLists = () => {
    const urlShop = 'https://fakestoreapi.com/products'
    // const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch();
   
    useEffect(() => {
        // const fetchProducts = async (url) => {
        //     try{ 
        //         const res = await axios.get(url);
        //         dispatch(setProducts(res.data))
        //     }catch(err) {
        //         console.error(err)
        //     }       
        // }
        dispatch(fetchProducts())
    },[])

    return (
        <div className="ui container grid">
            <ProductItem />
        </div>
    )
}

export default ProductLists;