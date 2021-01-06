import menblack from "../Assets/men-black.png";
import mencrimson from "../Assets/men-crimson.png";
import mengrey from "../Assets/men-grey.png";
import menred from "../Assets/men-red.png";
import menwhite from "../Assets/men-white.png";
import wblack from "../Assets/w-black.png";
import wcream from "../Assets/w-cream.png";
import wgreen from "../Assets/w-green.png";
import wpink from "../Assets/w-pink.png";
import wslate from "../Assets/w-slate.png";
import { Shoes } from "../Interfaces";

const imageArray = [
  menblack,
  mencrimson,
  mengrey,
  menred,
  menwhite,
  wblack,
  wcream,
  wgreen,
  wpink,
  wslate,
];

const shoesData: Shoes[] = imageArray.map((val, i) => {
  const cat = i < 5 ? "M" : "F";
  return {
    colors: i,
    category: cat,
    id: i,
    image: val,
    name: `Air-Max ${String.fromCharCode(i + 2 + 64)}`,
    price: (i + 1) * 30 + (200 % (i + 1)),
  };
});

export default shoesData;
