const products = [
  {
    title: "Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)",
    price: 814.99,
    image: "images/iphone13.png"
  },
  {
    title: "Samsung Galaxy S21 5G, 128GB, Phantom Gray",
    price: 599.99,
    image: "images/galaxy-s21.png"
  },
  {
    title: "Echo (4th generation) With Alexa",
    price: 1299.99,
    image: "images/echo.png"
  },
  {
    title: "2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver",
    price: 599.99,
    image: "images/ipad.png"
  },
  {
    title: "Apple Watch Series 3 - Silver Aluminum Case",
    price: 139.99,
    image: "images/apple-watch.png"
  },
  {
    title: "SAMSUNG Odyssey 32-Inch WQHD Gaming Monitor",
    price: 199.99,
    image: "images/monitor.png"
  }
];

const productContainer = document.getElementById("products");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p><strong>$${product.price.toFixed(2)}</strong></p>
    <button>Add to cart</button>
  `;
  productContainer.appendChild(card);
});
