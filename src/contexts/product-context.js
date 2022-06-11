import { createContext, useContext, useReducer,useEffect } from 'react';
import {ProductReducer } from "../reducers";
import axios from 'axios';

const ProductContext = createContext();
const useProduct=()=> useContext(ProductContext);

const ProductProvider=({children}) => {
    const [state,dispatch]=useReducer(ProductReducer,{
        sortBy: "",
        products:[],
        categories:{
            TShirt: false,
            CasualShirt:false,
            FormalShirt:false,
            Jeans:false,
            Trousers:false,
        },
        price:5000,
        rating:0
    });

    useEffect(() => {
        (async () => {
            try {
               const {
                   data:{products},
               }=await axios.get("/api/products");
               dispatch({type:"INIT_PRODUCTS",payload:products});
            }catch(error){
                console.log(error)
            }
        })();
    },[]);

    return(
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export {useProduct,ProductProvider};