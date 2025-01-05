import { useState } from "react";
import "./ShopContent.scss";
import shopData from "./ShopData";
import ShopProduct from "./ShopProduct";

const ShopContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Protein", "Creatine", "Pre-Workout"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? shopData
      : shopData.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop container">
      <h2 className="shop__title">Our Products</h2>
      <div className="shop__buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "shop__active" : ""}>
            {category}
          </button>
        ))}
      </div>
      <div className="shop__products">
        {filteredProducts.map((product, index) => (
          <ShopProduct key={product.id || index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
