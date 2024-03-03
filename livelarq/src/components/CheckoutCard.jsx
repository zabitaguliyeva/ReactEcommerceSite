import {AiOutlineDelete,AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import { CartContext } from "../pages/CartContext"
import { useContext } from "react"
import { formatImgUrl } from "../pages/utils"
const CheckoutCard = ({data}) => {
  const {removeFromCart,addToCart,decreaseQuantity}=useContext(CartContext)
  
  return (
  <div className='checkout'>
   <div className="checkoutContainer">
   <div className="checkoutImg">
   <img src={formatImgUrl(data?.images[1])} alt={data.name} />
   </div>
<div className="forDelete">
<div className="mainGroup">
<div className="flexGroup">
   <div className="textGroup">
   <h3 className="checkoutTitle">{data.name}</h3>
    <p className="checkoutDetails">
    Insulated Monaco Blue 500 ml

    </p>
   </div>
  
   </div>
    <div className="plusMinus">
    <button className="decreaseBtn" onClick={()=>decreaseQuantity(data.id)} >
     <AiOutlineMinus/>
    </button>
   <div className="counters">{data.quantity}</div>
    <button className="increaseBtn" onClick={()=>addToCart(data.id)} >
     <AiOutlinePlus/>
    </button>
    
    </div>
   
</div>
<div className="deleteBtn"><button className="button" onClick={()=>removeFromCart(data.id)}>
    <AiOutlineDelete/></button></div>
</div>

   </div>
  </div>
  )
}

export default CheckoutCard