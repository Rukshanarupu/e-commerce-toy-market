const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const corsConfig={
  origin:"*",
  credentials:true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}

// middleware
app.use(cors(corsConfig));
app.options("*", cors(corsConfig))
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emaoomz.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect(); 
    const toysCollection = client.db('toyMarketDB').collection('allToys');

    // Creating index on two fields
    const indexKeys = { name: 1, subCategory: 1 }; // Replace field1 and field2 with your actual field names
    const indexOptions = { name: "nameCategory" }; // Replace index_name with the desired index name
    const result = toysCollection.createIndex(indexKeys, indexOptions);
    console.log(result);


    app.get('/allToys', async (req, res) => {
      const cursor = toysCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    })

    // for category section
    app.get("/allToysByCategory/:subCategory", async (req, res) => {
      console.log(req.params.id);
      const toys = await toysCollection
        .find({
          subCategory: req.params.subCategory,
        })
        .toArray();
      res.send(toys);
    });

    // for details a toy page
    app.get('/allToys/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const options = {
        projection: { title: 1, price: 1, pictureUrl: 1,  name :1, rating:1, quantity:1, description:1, subCategory:1, review:1, detailDescription:1},
      };
      const result = await toysCollection.findOne(query, options);
      res.send(result);
    })

    // for add a toys page
    app.post('/allPostToys', async (req, res) => {
      const newToys = req.body;
      console.log(newToys);
      const result = await toysCollection.insertOne(newToys);
      if (result?.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "can not insert.please try again later",
          status: false,
        });
      }
    })

    // for all toy page
    app.get('/allPostToys', async (req, res) => {
      try{
        const cursor =await toysCollection.find({}).limit(20);
        const result = await cursor.toArray();
        // console.log(result)
        res.send(result);
      }
      catch(err){
        res.status (500).send({
          message: err.message
        })
      }
    })
    app.get("/searchToysByText/:text", async (req, res) => {
      const text = req.params.text;
      const result = await toysCollection
        .find({
          $or: [
            { name: { $regex: text, $options: "i" } },
            { subCategory: { $regex: text, $options: "i" } },
          ],
        })
        .toArray();
      res.send(result);
    });

    // for my toys page
    app.get("/myToys", async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email) {
          query = { email: req.query.email }
      }
      const options ={
        sort:{"price":1},
      }
      const result = await toysCollection.find(query, options).toArray();
      res.send(result);

      // const ascendingToys  = await toysCollection
      //   .find({
      //     sellerMail: req.params.email,
      //   })
      //   .sort({ price: 1 })
      //   .toArray();
      //   const descendingToys   = await toysCollection
      //     .find({
      //       sellerMail: req.params.email,
      //     })
      //     .sort({ price: -1 })
      //     .toArray();
      // res.send(ascendingToys, descendingToys);
    });
    

    app.delete('/myToys/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await toysCollection.deleteOne(query);
      res.send(result);
    })

    app.put('/myToys/:id', async(req, res) => {
      const id = req.params.id;
      const body = req.body;
      console.log(body);
      const filter = {_id: new ObjectId(id)}
      const options = { upsert: true };
      const updatedToy = {
        $set: {
          name: body.name, 
          quantity: body.quantity, 
          toyName: body.toyName, 
          price: body.price, 
          email: body.email, 
          photo: body.photo
        }
      }

      const result = await toysCollection.updateOne(filter, updatedToy, options);
      res.send(result);
    })


  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('Toys Market  server is running')
})


app.listen(port, () => {
  console.log(`Toys Market Server is running on port: ${port}`)
})


