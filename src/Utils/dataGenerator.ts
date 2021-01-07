import { Shoes } from "../Interfaces";

const imageArray = [
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/men-black.png?alt=media&token=9549b605-711a-4f07-90e8-2694e7418723",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/men-crimson.png?alt=media&token=1364053a-ffbe-43f7-833e-16db9c4eb499",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/men-grey.png?alt=media&token=64f0944f-152f-49dc-b3fd-3e40f96a3ffd",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/men-red.png?alt=media&token=c0fa8cd3-d72f-4c22-b3ce-07e1be9bd363",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/men-white.png?alt=media&token=099e9551-05bd-4506-b250-f4bbb84d26d0",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/w-black.png?alt=media&token=d3b29bdd-98cc-489f-a0d5-ecc6056a6441",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/w-cream.png?alt=media&token=4f3b1c03-e25a-46d0-a9a4-3c55eb045d3d",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/w-green.png?alt=media&token=57dd16fc-647f-46a4-a4de-233d82dd5c2b",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/w-pink.png?alt=media&token=4d37ca07-2df0-4f16-9ccb-94780fca203a",
  "https://firebasestorage.googleapis.com/v0/b/crypto-156ca.appspot.com/o/w-slate.png?alt=media&token=b87cd9b3-2541-40cf-8756-c62b4562337c",
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
