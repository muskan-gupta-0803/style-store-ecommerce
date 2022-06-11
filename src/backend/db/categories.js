import { v4 as uuid } from "uuid";
import { tshirtImg, casualShirtsImg, formalShirtsImg, jeansImg, trousersImg } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "TShirt",
    image: tshirtImg
  },
  {
    _id: uuid(),
    categoryName: "FormalShirt",
    image: formalShirtsImg
  },
  {
    _id: uuid(),
    categoryName: "CasualShirt",
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
