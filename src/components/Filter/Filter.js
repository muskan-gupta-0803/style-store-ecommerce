import { casualShirt1 } from "../../assets";
import { useProduct } from "../../contexts";

export function Filter() {
    const { state, dispatch } = useProduct();
    const { sortBy, categories, price, rating } = state;
    const { TShirt, CasualShirt, FormalShirt, Jeans, Trousers } = categories;

    return (
        <aside className="filter-sidenav">
            <div className="f-title fw-bold">
                <span>Filters</span>
                <span
                    className="clr-filter"
                    onClick={() => dispatch({ type: "CLEAR" })}
                >
                    Clear
                </span>
            </div>

            <form action="" className="filter-form">
                <label htmlFor="price" className="fs-md fw-semibold">
                    Price Range &#8377;{price}
                </label>
                <input
                    type="range"
                    name="price"
                    id=""
                    min="0"
                    max="5000"
                    step={200}
                    value={price}
                    onChange={(e) =>
                        dispatch({ type: "PRICE", payload: e.target.value })
                    }
                />

                <label htmlFor="category" className="fs-md fw-semibold">
                    Category:
                </label>
                <label htmlFor="category1">
                    <input
                        type="checkbox"
                        name="category1"
                        id=""
                        value="TShirt"
                        checked={TShirt}
                        onChange={(e) => dispatch({ type: "TSHIRT",payload: e.target.value })}
                    />
                    T-Shirts
                </label>

                <label htmlFor="category2">
                    <input
                        type="checkbox"
                        name="category2"
                        id=""
                        value="CasualShirt"
                        checked={CasualShirt}
                        onChange={(e) => dispatch({ type: "CASUAL-SHIRT",payload: e.target.value })}
                    />
                    Casual Shirts
                </label>

                <label htmlFor="category3">
                    <input
                        type="checkbox"
                        name="category3"
                        id=""
                        value="FormalShirt"
                        checked={FormalShirt}
                        onChange={(e) => dispatch({ type: "FORMAL-SHIRT",payload: e.target.value })}
                    />
                    Formal Shirts
                </label>

                <label htmlFor="category4">
                    <input
                        type="checkbox"
                        name="category4"
                        id=""
                        value="Jeans"
                        checked={Jeans}
                        onChange={(e) => dispatch({ type: "JEANS" ,payload: e.target.value})}
                    />
                    Jeans
                </label>

                <label htmlFor="category5">
                    <input
                        type="checkbox"
                        name="category5"
                        id=""
                        value="Trousers"
                        checked={Trousers}
                        onChange={(e) => dispatch({ type: "TROUSERS",payload: e.target.value })}
                    />
                    Trousers
                </label>

                <label htmlFor="rating" className="fs-md fw-semibold">
                    Rating
                </label>

                <label htmlFor="four-star">
                    <input
                        type="radio"
                        name="four-star"
                        id=""
                        value="4"
                        checked={rating === 4}
                        onChange={(e) =>
                            dispatch({
                                type: "RATING",
                                payload: parseInt(e.target.value),
                            })
                        }
                    />
                    4 Stars & above
                </label>
                <label htmlFor="three-star">
                    <input
                        type="radio"
                        name="three-star"
                        id=""
                        value="3"
                        checked={rating === 3}
                        onChange={(e) =>
                            dispatch({
                                type: "RATING",
                                payload: parseInt(e.target.value),
                            })
                        }
                    />
                    3 Stars & above
                </label>
                <label htmlFor="two-star">
                    <input
                        type="radio"
                        name="two-star"
                        id=""
                        value="2"
                        checked={rating === 2}
                        onChange={(e) =>
                            dispatch({
                                type: "RATING",
                                payload: parseInt(e.target.value),
                            })
                        }
                    />
                    2 Stars & above
                </label>
                <label htmlFor="one-star">
                    <input
                        type="radio"
                        name="one-star"
                        id=""
                        value="1"
                        checked={rating === 1}
                        onChange={(e) =>
                            dispatch({
                                type: "RATING",
                                payload: parseInt(e.target.value),
                            })
                        }
                    />
                    1 Stars & above
                </label>

                <label htmlFor="sort" className="fs-md fw-semibold">
                    Price
                </label>

                <label htmlFor="priceLTH">
                    <input
                        type="radio"
                        name="priceLTH"
                        id=""
                        checked={sortBy === "PRICE_LOW_TO_HIGH"}
                        onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
                    />
                    Price-low to high
                </label>
                <label htmlFor="priceHTL">
                    <input
                        type="radio"
                        name="priceHTL"
                        id=""
                        checked={sortBy === "PRICE_HIGH_TO_LOW"}
                        onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
                    />
                    Price-high to low
                </label>
            </form>
        </aside>
    );
}
