import express from 'express';

const app = express();
const port = 3000;

app.get('/api/products',(req, res) => {
    const products = [
        {
          "id": 1,
          "name": "volcano",
          "price": 1099,
          "image": 'https://www.pexels.com/photo/erupting-lava-during-daytime-73830/'
        },
        {
          "id": 2,
          "name": "dunes",
          "price": 2099,
          "image": 'https://www.pexels.com/photo/stunning-red-desert-dunes-in-atacama-chile-30359292/'
        },
        {
          "id": 3,
          "name": "mountain",
          "price": 3099,
          "image": 'https://www.pexels.com/photo/car-by-grabrok-on-iceland-27245603/'
        },
        {
          "id": 4,
          "name": "sea",
          "price": 4099,
          "image": 'https://www.pexels.com/photo/blahylur-lake-on-iceland-27244378/'
        }
      ]

    // http://localhost:3000/api/products?search=dunes
    //make the url similar using query parameter
    if(req.query.search){
      const filteredproducts = products.filter(product => product.name.includes(
        req.query.search
      ))
      res.send(filteredproducts);
      return;
    }

    setTimeout(() => {
      res.send(products)
    }, 3000); //simulate a server sending data
})

app.listen(port,() => {
    console.log(`Server running at ${port}`);
})