import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../redux/actions/productActions"

const AddProduct = () => {

    const [formState, setFormState] = useState({
        show: null,
        title: '',
        category: '',
        description: ''
    })
    const dispatch = useDispatch();
    const product = useSelector(state => state.addProduct.product)
    const { title, category, description } = product;
    console.log('redux state', product)

    const onTitleChangehanlder = e => {
        setFormState( prev => {
            return {...prev, title: e.target.value}
        })

    }
    const onCategoryChangehanlder = e => {
        setFormState(prev => {
            return {...prev, category: e.target.value}
        })
    }
    const onDescriptionChangehanlder = e => {
        setFormState(prev => {
            return {...prev, description: e.target.value}
        })
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        setFormState(prev => {
            return { ...prev, show: true}
        })
        
    }

    useEffect(() => {
        if(formState.show !== null){
            dispatch(addProduct(formState))
        }
    },[formState.show])

    return ( 
        <div style={{ padding: '60px'}}>
        Add a product form 
        <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder="title" onChange={onTitleChangehanlder}/>
        <input type='text' placeholder="category" onChange={onCategoryChangehanlder}/>
        <input type='text' placeholder="description" onChange={onDescriptionChangehanlder}/>
        <button>Add Product</button>
        </form>
        {<>
            <h2>{title}</h2>
            <h2>{category}</h2>
            <h2>{description}</h2>
            </>}
        </div>
    )
}

export default AddProduct