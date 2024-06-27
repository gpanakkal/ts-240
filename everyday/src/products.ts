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

  const existingProduct = products[productIndex];
  if (existingProduct !== undefined) {
    products[productIndex] = {
      ...existingProduct,
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

updateProduct(1, {
  name: undefined,
  price: undefined,
});

const firstProduct = products[0]; 
/* causes no type errors. Result:
{ id: 1, name: undefined,  price: undefined, description: 'A sample product for demonstration' }
*/