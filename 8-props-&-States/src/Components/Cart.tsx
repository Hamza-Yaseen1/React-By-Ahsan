import { useEffect, useState } from "react"
import MenuItems from "./MenuItems"

const Cart = ()=>{
    const[firstItem , setFirstItem] = useState({
    name :"Biryani",
    quantity : 2
})
    useEffect(()=>{
setTimeout(()=>{
    setFirstItem(items => {
        return {
            ...items,
            quantity: 10
        }
    })
}
,1000)
    })
    return(
   <section className="max-w-sm mx-auto">
    <h1>Cart</h1>
<ul>
    <MenuItems items={
firstItem
}
/>
    <MenuItems items={
{
    name :"Chicken handi",
    quantity : 1
}
}
/>
    <MenuItems items={
{
    name :"Halwa puri",
    quantity : 6
}
}
/>
</ul>

   </section>

)}
export default Cart

