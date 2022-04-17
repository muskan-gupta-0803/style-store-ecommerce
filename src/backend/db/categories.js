import { v4 as uuid } from "uuid";
import { tshirtImg, casualShirtsImg, formalShirtsImg, jeansImg, trousersImg } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-shirt",
    image: tshirtImg
  },
  {
    _id: uuid(),
    categoryName: "Formal Shirt",
    image: formalShirtsImg
  },
  {
    _id: uuid(),
    categoryName: "Casual Shirt",
    image: casualShirtsImg
  },
  {
    _id: uuid(),
    categoryName: "Jeans",
    image: jeansImg
  },
  {
    _id: uuid(),
    categoryName: "Trousers",
    image: trousersImg
  },
];
