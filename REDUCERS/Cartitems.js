//import { ActionSheetIOS } from "react-native";

import { AsyncStorage } from "react-native"
var value;
const CartItems =(state=[],actions)=>{
    //state = [{id:0}]
    AsyncStorage.setItem("key",JSON.stringify(state))
    AsyncStorage.getItem("key").then((val)=>{value=JSON.parse(val)})
    switch(actions.type){
        case 'Add':
            return [...state,actions.payload ]
        case 'Remove':    return state.filter(CartItem=>CartItem.id !== actions.payload.id)
        //case 'Addimage':    return state.filter(CartItem=>CartItem.id !== actions.payload.id)
    }
    return state;
}
export default CartItems