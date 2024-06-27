async function retrieveString(): Promise<string> {
  const stringPromise: Promise<string> = new Promise((resolve) =>
    setTimeout(() => resolve("Launch School"), 100)
  );
  const stringResult: string = await stringPromise;
  return stringResult;
}

async function retrieveStringDirect(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Launch School"), 100)
  );
}

(async () => {
  const myVar = retrieveString();
  const myVar2 = retrieveStringDirect();
})();

const myVar3 = retrieveString();

function getData(url: string | URL) {
  return fetch(url)
    .then((response: Response) => response.json())
    .then((data: unknown) => console.log(data));
}

async function getDataAsync(url: string | URL): Promise<void> {
  const response = await fetch(url);
  const data: unknown = await response.json();
  console.log(String(data));
}

(async function handleError(): Promise<string> {
  try {
    const rejectedPromise: Promise<string> = Promise.reject("error");
    const result: string = await rejectedPromise;
    return result;
  } catch (error: unknown) {
    if (typeof error === "string") {
      return error;
    }
    throw new Error("We can't handle that type of error!");
  }
})();

(async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data: unknown = await response.json();
    console.log(data);
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.error(e);
    } else {
      console.log('An unknown error occurred');
    }
  }
})
