const getfilteredCategoryProducts=(product,TShirt, CasualShirt, FormalShirt, Jeans, Trousers) =>{
    const categoryFiltered=[];
   
    if(
        TShirt===false &&
        CasualShirt===false &&
        FormalShirt===false &&
        Jeans===false &&
        Trousers===false 
    ){
        return product;
    }

    if(TShirt){
        let newProductsList=product.filter((item)=>"TShirt"===item.categoryName);
        categoryFiltered.push(...newProductsList)
    }

    if(CasualShirt){
        let newProductsList=product.filter((item)=>"CasualShirt"===item.categoryName);
        categoryFiltered.push(...newProductsList)
    }

    if(FormalShirt){
        let newProductsList=product.filter((item)=>"FormalShirt"===item.categoryName);
        categoryFiltered.push(...newProductsList)
    }

    if(Jeans){
        let newProductsList=product.filter((item)=>"Jeans"===item.categoryName);
        categoryFiltered.push(...newProductsList)
    }

    if(Trousers){
        let newProductsList=product.filter((item)=>"Trousers"===item.categoryName);
        categoryFiltered.push(...newProductsList)
    }

    return categoryFiltered;
}

const getfilteredPriceProducts=(product,price)=>{
    return product.filter((item) => item.discountPrice <= price)
}

const getfilteredRatingProducts=(product,rating)=>{
    return product.filter((item)=> item.rating>=rating)

}

const getSortedProducts=(product,sortBy)=>{
    if(sortBy==="PRICE_LOW_TO_HIGH"){
        return [...product].sort((a,b) => a.discountPrice-b.discountPrice);
    }
    else if(sortBy === "PRICE_HIGH_TO_LOW"){
        return [...product].sort((a,b)=> b.discountPrice-a.discountPrice);
    }
    return product;
}

export { getfilteredCategoryProducts,getSortedProducts,getfilteredPriceProducts,getfilteredRatingProducts};