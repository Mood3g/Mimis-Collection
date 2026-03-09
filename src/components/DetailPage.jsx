import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingle } from '../products/SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../cart/cartSlice'

const DetailPage = () => {
 // initialize useParam and destructure the id from the url
    const {id} = useParams()
    const dispatch = useDispatch()
    // getting product from store using useSelector
    const {product, status, error} = useSelector((state)=>state.product)
    // const product = useSelector((state)=>state.product.product)
    // making a call to fetchSingle getting a specific product
    useEffect(()=>{
        if(id){
           dispatch(fetchSingle(id)) 
        }
    },[])
    // console.log(product)
    if(status==='loading'){
        return <h1>Loading...</h1>
    }
  return (
    <div className='container'>
        <h1 className='text-center text-dark m-3'>Product Details</h1>
        <div className="row">
            <div className="col-sm-4 my-3">
            <img src={`https://okwiris-collection-api.onrender.com/${product.image}`}  alt="" style={{
            objectFit: 'contain', objectPosition: 'center' }} className='w-100 h-100' />
            </div>
            <div className="col-sm-4 mt-4" >
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <span className='mb-5'>₦{product.price}</span>
            <br />
            <button className='mt-2 btn btn-primary' onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
            </div>

        </div>
    </div>
  )
}

export default DetailPage
