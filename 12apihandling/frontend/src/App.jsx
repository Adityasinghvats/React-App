import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // const [products, error, loading] = customReactQuery('/api/products');

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    //to prevent race condition where the api call is made with each char of input degrading performance
    //abort controller cancels previous char but creates a single packet using debouncing
    const controller = new AbortController();
    //make iife beacuse we cannot use async await inside of a hook, start with ; for error resolution
    ;( async() => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal,
        });

        console.log(response.data);
        setProducts(response.data);
        setLoading(false);

      } catch (error) {

        if(axios.isCancel(error)){
          console.log('Request canceled', error.message);
          return;
        }

        setError(true)
        setLoading(false);
      }
    })()

    //clean up method e.g. unmounting an event handler
    return () => {
      controller.abort();
    }
  }, [search])

  //edge cases using different return statements
  // if(error){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h3>Loading data....</h3>
  // }

  return (
    <>
      {loading && <h3>Loading data...</h3>}
      {error && <h3>Something went wrong</h3>}
      <input type='text' placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}

      />
      {products && (
        <>
        <h1>Chai aur api</h1>
        <h2>Number of products are : {products.length}</h2>
        <h2>Product is : {products[0].name}</h2>
        <h2>Product  images is : {products[0].image}</h2>
        </>
      )}
    </>
  )
}

export default App


//custom react query
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     //make iife beacuse we cannot use async await inside of a hook
//     ;( async() => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true)
//         setLoading(false);
//       }
//     })()

//   }, [])

//   return [
//     products,
//     error,
//     loading
//   ]
// }
