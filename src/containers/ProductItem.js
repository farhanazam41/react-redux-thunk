import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const ProductItem = () => {
    const products = useSelector(state => {
        const { products} = state.allProducts;
        return products;
    });

const renderList = products && products.map(product => {
    const { id, title, price, category, image} = product;
    return (
    <div className="four column wide" key={id}>
    <Link to={`/products/${id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={image} alt={title}/>
                </div>
                <div className="content">
                     <div className="header">{title}</div>
                     <div className="meta price">{price}</div>
                     <div className="meta">{category}</div>
                </div>
            </div>
        </div>
        </Link>
     </div>

    )
})
    
    return (
       <>{renderList}</> 
    )
}

export default ProductItem;