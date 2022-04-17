import "../Products/ProductPage.css";
import { Filter, ProductCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

export function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const productsData = await axios.get("/api/products");

                setProducts(productsData.data.products);
            } catch (error) {
                console.log(error);
            }
        })();
    });

    return (
        <main className="main-container-prod">
            <Filter />

            <section className="prod-section">
                <div className="product-text">
                    <h1 className="">Products</h1>
                </div>

                {products.map(
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
                )}
            </section>
        </main>
    );
}
