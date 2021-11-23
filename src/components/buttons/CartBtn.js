import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

function CartBtn() {

    const stat = useSelector((state)=> state.handelCart)
    
    return (
        <>
        <Link to="/cart" className='btn btn-outline-dark ms 2'>
            <span className="fa fa-shopping-cart me-1"></span> Cart ({stat.length})
        </Link>
        </>
    )
}

export default CartBtn
