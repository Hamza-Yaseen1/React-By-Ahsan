type IProps = {
    items:{
        name: string;
        quantity : number;
    }
}
const MenuItems = (props:IProps)=>{
  return(
  <li className="flex gap-4 text-xl justify-between">
    <h2>{props.items.name}</h2>
    <span>{props.items.quantity}</span>
  </li>
)}
export default MenuItems;