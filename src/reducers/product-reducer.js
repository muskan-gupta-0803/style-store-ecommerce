export const ProductReducer=(state,action)=>{
    switch(action.type){
        case "CLEAR":
            return{
                ...state,
                sortBy: "",
                
                categories:{
                    TShirt: false,
                    CasualShirt:false,
                    FormalShirt:false,
                    Jeans:false,
                    Trousers:false,
                },
                price:5000,
                rating:0,
            };

        case "INIT_PRODUCTS":
            return{
                ...state,
                products:action.payload,
            }

        case "PRICE":
            return{
                ...state, 
                price: action.payload,
            };

        case "TSHIRT":
            return{
                ...state,
                categories: {
                    ...state["categories"],
                    TShirt: !state.categories.TShirt,
                },
            };

        case "CASUAL-SHIRT":
            return{
                ...state,
                categories: {
                    ...state["categories"],
                    CasualShirt: !state.categories.CasualShirt,
                },
            };

        case "FORMAL-SHIRT":
            return{
                ...state,
                categories: {
                    ...state["categories"],
                    FormalShirt: !state.categories.FormalShirt,
                },
            };

        case "JEANS":
            return{
                ...state,
                categories: {
                    ...state["categories"],
                    Jeans: !state.categories.Jeans,
                },
            };

        case "TROUSERS":
            return{
                ...state,
                categories: {
                    ...state["categories"],
                    Trousers: !state.categories.Trousers,
                },
            };

        case "RATING":
            return {
                ...state,
                rating: action.payload,
            };

        case "PRICE_LOW_TO_HIGH":
            return { ...state, sortBy: action.type };

        case "PRICE_HIGH_TO_LOW":
            return { ...state, sortBy: action.type };

        // case "RATING_HIGH_TO_LOW":
        //     return { ...state, sortBy: action.type };

        default:
            return { ...state };
    
    }
}