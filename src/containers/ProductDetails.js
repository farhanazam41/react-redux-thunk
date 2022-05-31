import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct, fetchSingleProduct } from '../redux/actions/productActions'
import axios from 'axios';

const ProductDetails = () => {
    const { productId } = useParams();
    const [ loading, setLoading] = useState(false)
    const singleUrl = `https://fakestoreapi.com/products/${productId}`
    const dispatch = useDispatch();
    const product = useSelector(state => state.singleProduct.product);
    console.log('product', product)
    // const { image, title, price, category, description } = product
  

   

    useEffect(() => {

        // const fetchSingleProduct = async url => {
        //     setLoading(!loading)
        //     try {
        //         const res = await axios.get(url);
        //         dispatch(selectedProduct(res.data))
        //         // console.log('here',res.data)
        //     }catch(err){
        //         console.error(err)
        //     }finally{
        //         setLoading(!!loading)
        //     }
            
        // }
        if(productId){

            dispatch(fetchSingleProduct(productId))
         
        }

        return () => {
            dispatch(removeSelectedProduct());
         }
    },[productId])


     
    return (
        <div className="ui grid container">
      
            { product &&
             <div className='ui placeholder segment center aligned grid'>
                <div className='ui two column stackable'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column lp'>
                            <img  className='ui fluid image' src={product.image} alt={product.title} />
                        </div>
                    <div className='column rp'>
                        <h1>{product.title}</h1>
                        <h2>
                            <a href='#' className='ui teal tag label'>${product.price}</a>
                        </h2>
                        <h3 className='ui brown block header'>{product.category}</h3>
                        <p>{product.description}</p>
                        <div className='ui vertical animated button' tabIndex='0'>
                            <div className='hidden content' >
                                <i className='shop icon'></i>
                            </div>
                            <div className='visible content'>Add to cart</div>
                        </div>
                    </div>    
                    </div>
                </div>
             </div>
            }
        </div>
    )
}

export default ProductDetails;