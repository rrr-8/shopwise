import { createSlice } from "@reduxjs/toolkit"


const productstate={
    items:[],
    total:0
}
localStorage.getItem("items")!==null?
productstate.items=JSON.parse(localStorage.getItem("items"))
:productstate.items=[];
export const productSlice=createSlice({
    name:'product',
    initialState:productstate,
    reducers:{
        addToCart:(state,action)=>{
state.items.push(action.payload)
localStorage.setItem("items",JSON.stringify(state.items))
        },
        removefromcart:(state,action)=>{
            const itemId=action.payload.id;
            let removed=false;
            state.items=state.items.filter(item=>{
                if(!removed &&item.id===itemId){
                    removed=true;
                    return false;
                }
                return true;
            })
            localStorage.setItem("items",JSON.stringify(state.items))
        },calctotal:(state)=>{
        
        let total=0;
        state.items.forEach((item)=>{

total+=item.price;

        })
state.total=total;
    }


}})
