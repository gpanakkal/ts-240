interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...updatedValues,
    };
  } else {
    console.log("Product not found");
  }
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});