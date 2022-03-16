export interface Product {
  id: number;
  image: string;
  image2: string;
  image3: string;
  name: string;
  description: string;
  price: number;
  rating: string;
  link:string;
}

export const products = [
  {
    id: 1,
    image:"https://m.media-amazon.com/images/I/611ovP2GkrL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/61GtmYgx8QL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81LdBfPgpfL._FMwebp__.jpg",
    name: 'IPhone 13 Pro Max',
    description: 'Apple IPhone 13 Pro Max (1TB, Alpine Green)[Locked] + Carrier Subscription',
    price: 1599,
    rating: "Rating: 11/10" ,
    link:"https://www.amazon.com/Apple-iPhone-Alpine-Carrier-Subscription/dp/B09V3L1LGS?ref_=ast_sto_dp"
  },
  {
    id: 2,
    image:"https://m.media-amazon.com/images/I/61AwGDDZd3L._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/61GtmYgx8QL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81LdBfPgpfL._FMwebp__.jpg",
    name: 'IPhone 13 Pro',
    description: 'Apple IPhone 13 Pro (1TB, Alpine Green)[Locked] + Carrier Subscription',
    price: 1499,
    rating: "Rating: 10/10",
    link:"https://www.amazon.com/Apple-iPhone-Alpine-Carrier-Subscription/dp/B09V3HLFCF?ref_=ast_sto_dp"
  },
  {
    id: 3,
    image:"https://m.media-amazon.com/images/I/61-r9zOKBCL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/61K261tpsHL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/71e6luY333L._FMwebp__.jpg",
    name: 'IPhone 13',
    description: 'Apple IPhone 13 (512GB, Green)[Locked] + Carrier Subscription',
    price: 1129,
    rating: "Rating: 8/10",
    link:"https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09V3HM7D2?ref_=ast_sto_dp"
  },
  {
    id: 4,
    image:"https://m.media-amazon.com/images/I/71uVYy3PbCL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/61d8XHJuE2L._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81junVbiuyL._FMwebp__.jpg",
    name: 'IPhone 13 Mini',
    description: 'Apple IPhone 13 Mini (512GB, Blue)[Locked] + Carrier Subscription',
    price: 1029,
    rating: "Rating: 6/10",
    link:"https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09G9C8CKZ?ref_=ast_sto_dp"
  },
  {
    id: 5,
    image:"https://m.media-amazon.com/images/I/61TOWf11+jL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/51RV0u32isL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/71LnWkSIeAL._FMwebp__.jpg",
    name: 'IPhone SE',
    description: '2022 Apple IPhone SE (256GB, Midnight)[Locked] + Carrier Subscription',
    price: 579,
    rating: "Rating: 3/10",
    link:"https://www.amazon.com/Apple-iPhone-Midnight-Carrier-Subscription/dp/B09V4HG5QD?ref_=ast_sto_dp"
  },
  {
    id: 6,
    image:"https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/81xaMP9TqPL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81IjMpZ7zEL._FMwebp__.jpg",
    name: 'IPhone 12 Pro Max',
    description: 'Apple IPhone 12 Pro Max (512GB, Graphite)[Locked] + Carrier Subscription',
    price: 1399,
    rating: "Rating: 10/10",
    link:"https://www.amazon.com/Apple-iPhone-Graphite-Carrier-Subscription/dp/B08L5Q1L2L?ref_=ast_sto_dp"
  },
  {
    id: 7,
    image:"https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/81XQuip7apL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81ZOOo6BmQL._FMwebp__.jpg",
    name: 'IPhone 12 Pro',
    description: 'Apple IPhone 12 Pro (512GB, Gold)[Locked] + Carrier Subscription',
    price: 1299,
    rating: "Rating: 9/10",
    link:"https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B08L5QZKTK?ref_=ast_sto_dp"
  },
  {
    id: 8,
    image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/81E0lFgLLrL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81B2N8LajEL._FMwebp__.jpg",
    name: 'IPhone 12',
    description: 'Apple IPhone 12 (256GB, Blue)[Locked] + Carrier Subscription',
    price: 979,
    rating: "Rating: 7/10",
    link:"https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B08L5MJTCP?ref_=ast_sto_dp"
  },
  {
    id: 9,
    image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._FMwebp__.jpg",
    image2:"https://m.media-amazon.com/images/I/81E0lFgLLrL._FMwebp__.jpg",
    image3:"https://m.media-amazon.com/images/I/81B2N8LajEL._FMwebp__.jpg",
    name: 'IPhone 12 Mini',
    description: 'Apple IPhone 12 Mini (256GB, Blue)[Locked] + Carrier Subscription',
    price: 879,
    rating: "Rating: 6/10",
    link:"https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B08L5MJTCP?ref_=ast_sto_dp"
  },
  {
    id: 10,
    image:"https://m.media-amazon.com/images/I/81sxRBhe2sS._AC_SX679_.jpg",
    image2:"https://m.media-amazon.com/images/I/81xRvyrg5gS._AC_SX679_.jpg",
    image3:"https://m.media-amazon.com/images/I/71YXQd5JP9S._AC_SX679_.jpg",
    name: 'IPad Pro',
    description: '2021 Apple 12.9-inch IPad Pro (Wi-Fi + Cellular, 2TB)-Space Gray',
    price: 2349,
    rating: "Rating: 12/10",
    link:"https://www.amazon.com/2021-Apple-12-9-inch-Wi%E2%80%91Fi-Cellular/dp/B09327SCLJ?ref_=ast_sto_dp"
  },
 
];
