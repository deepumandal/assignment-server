const Category = [
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Tablets", "Accessories"],
  },
  {
    name: "Grocery",
    subcategories: [
      "Fruits & Vegetables",
      "Snacks",
      "Beverages",
      "Canned Goods",
    ],
  },
  {
    name: "Clothing and Apparel",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Clothing",
      "Accessories",
    ],
  },
  {
    name: "Home and Kitchen",
    subcategories: ["Furniture", "Cookware", "Home Decor", "Appliances"],
  },
  {
    name: "Health and Beauty",
    subcategories: ["Skincare", "Haircare", "Makeup", "Personal Care"],
  },
  {
    name: "Sports and Outdoors",
    subcategories: [
      "Fitness Equipment",
      "Outdoor Gear",
      "Athletic Clothing",
      "Camping Gear",
    ],
  },
  {
    name: "Toys and Games",
    subcategories: ["Action Figures", "Board Games", "Puzzles", "Outdoor Toys"],
  },
  {
    name: "Books and Media",
    subcategories: ["Fiction", "Non-Fiction", "Children's Books", "Movies"],
  },
  {
    name: "Automotive",
    subcategories: [
      "Car Parts",
      "Car Accessories",
      "Tools & Equipment",
      "Maintenance",
    ],
  },
];

const products = {
  id: "string",
  name: "string",
  description: "string",
  category: "string",
  subcategory: "string",
  brand: "string",
  price: "number",
  quantityAvailable: "number",
  image: "string",
  averageRating: "number",
  totalRatings: "number",
  comments: [
    {
      userId: "string",
      username: "string",
      comment: "string",
      rating: "number",
      timestamp: "string",
    },
  ],
};

const userSchema = {
  id: "string",
  username: "string",
  email: "string",
  password: "string",
  role: "string",
  timestamp: "string",
  cart: [
    {
      productId: "string",
      quantity: "number",
      image: "string",
    },
  ],
  orders: [
    {
      orderId: "string", // ORD  as prifix + timestamp
      products: [
        {
          productId: "string",
          quantity: "number",
          image: "string",
        },
      ],
      totalPrice: "number",
      timestamp: "string",
    },
  ],
};
const commentSchema = {
  id: "string",
  productId: "string",
  userId: "string",
  username: "string",
  comment: "string",
  rating: "number",
  timestamp: "string",
};
const reviewSchema = {
  id: "string",
  productId: "string",
  userId: "string",
  username: "string",
  review: "string",
  rating: "number",
  timestamp: "string",
};
const authenticationSchema = {
  id: "string",
  username: "string",
  password: "string",
  token: "string",
  expiration: "string",
  role : "user | guest"
};
const authorizationSchema = {
  id: "string",
  userId: "string",
  role: "string",
};

// products api
// - add
// - filter
