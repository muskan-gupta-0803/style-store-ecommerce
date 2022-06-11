import "../Products/ProductPage.css";
import { Filter, ProductCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProduct } from "../../contexts";
import { getfilteredCategoryProducts,getfilteredPriceProducts,getfilteredRatingProducts,getSortedProducts } from "../../utilities/filterFunctions";
import { products } from "../../backend/db/products";

export function ProductPage() {
    const {state,dispatch} = useProduct();

    const filteredPriceProducts=getfilteredPriceProducts(state.products,state.price);
    console.log(state.products,"heloooo")
    
    const filteredCategoryProducts=getfilteredCategoryProducts(filteredPriceProducts,
        state.categories.TShirt,
        state.categories.CasualShirt,
        state.categories.FormalShirt,
        state.categories.Jeans,
        state.categories.Trousers 
    );
    
    const filteredRatingProducts = getfilteredRatingProducts(filteredCategoryProducts, state.rating);
    
    const finalSortedProducts = getSortedProducts(filteredRatingProducts, state.sortBy);
    // console.log(state.sortBy,"sortby ")
    // console.log(finalSortedProducts)
    

    // useEffect(() => {
    //     (async () => {
    //         try {
    //            const {
    //                data:{products},
    //            }=await axios.get("/api/products");
    //            dispatch({type:"INIT_PRODUCTS",payload:products});
    //         }catch(error){
    //             console.log(error)
    //         }
    //     })();
    // },[]);

    return (
        <main className="main-container-prod">
            <Filter />

            <section className="prod-section">
                <div className="product-text">
                    <h1 className="">Products: {finalSortedProducts?.length}</h1>
                </div>
                {/* {console.log(filteredRatingProducts)} */}
                {finalSortedProducts?.length >0 ? (finalSortedProducts?.map(
                    ({
                        _id,
                        title,
                        categoryName,
                        prodImg,
                        rating,
                        reviews,
                        originalPrice,
                        discountPrice,
                        discountRate,
                    }) => (
                        <ProductCard
                            key={_id}
                            title={title}
                            categoryName={categoryName}
                            prodImg={prodImg}
                            rating={rating}
                            reviews={reviews}
                            originalPrice={originalPrice}
                            discountPrice={discountPrice}
                            discountRate={discountRate}
                        />
                    )
                )):
                (
                    <div className="product-text">
                    <h1 className="">No products found :(</h1>
                </div>
                )}
            </section>
        </main>
    );
}
