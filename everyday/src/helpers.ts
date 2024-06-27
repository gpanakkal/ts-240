{ // PICK AND OMIT EXAMPLES
  type MyPick<T, Keys extends keyof T> = { [P in Keys]: T[P]; }

  type MyOmit<T, Keys extends keyof T> = {
    [P in keyof T as P extends Keys ? never : P]: T[P]
  }

  type ObjType = {
    a: number,
    b: number,
  };

  const omitted: MyOmit<ObjType, 'b'> = {
    a: 1
  }

  const omitted2: Omit<ObjType, 'asdffadfd'> = {
    a: 0,
    b: 2012938
  };

  const omitted3: MyOmit<ObjType, 'asdffadfd' | 'b'> = {
    a: 0,
  };

  const omitted4: MyPick<ObjType, 'asdffadfd'> = {
    a: 0,
    b: 2012938
  };
}
{ // PARAMETERS AND RETURNTYPE
  const myFunc = (x: string, y: number) => ({ x, y });
  type myFuncParams = Parameters<typeof myFunc>;
  type myFuncReturn = ReturnType<typeof myFunc>; // { [key: string]: string | number }
  const params: myFuncParams = ['str', 2];
  {
    // inferred as an array, not a tuple
    const myRestFunc = (...numbers: number[]) => true;
    type myRestFuncParams = Parameters<typeof myRestFunc>;
    const params2: myRestFuncParams = [2];
    const params3: myRestFuncParams = [];
    const params4: myRestFuncParams = [4, 5, 6];
  }
  {
    // inferred as an array, not a tuple
    const myRestFunc = (x, ...numbers: number[]) => true;
    type myRestFuncParams = Parameters<typeof myRestFunc>;
    const params2: myRestFuncParams = [2];
    const params3: myRestFuncParams = []; // error: source has 0 elements but requires 1
    const params4: myRestFuncParams = [4, 5, 6];
  }
}
{ // PARTIAL
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Sample Product",
      price: 49.99,
      description: "A sample product for demonstration",
    },
  ];

  function updateProduct(
    productId: number,
    updatedValues: Partial<Product>
  ): void {
    const product = products.find((entry) => entry.id === productId);
    if (product === undefined) {
      console.log('Product not found');
      return;
    };
    Object.keys(updatedValues).forEach((key) => {
      const value = updatedValues[key as keyof typeof updatedValues];
      // if (value === undefined) return; // curiously, omitting this guard clause doesn't raise a compiler error
      Object.assign(product, { [key]: value });
    });
  }

  updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
  });
}