const express = require('express');
const { MongoClient,ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;
// mongodb+srv://Prashanth:<Rocky%40123%24>@mydatabase0.n8oeezl.mongodb.net/

const mongoURI = 'mongodb+srv://Prashanth:Rocky%40123$@mydatabase0.n8oeezl.mongodb.net/';
const dbName = 'Exams23001';


app.use(express.json());


app.get('/', async (req, res) => {
  try {
   
    const client = new MongoClient(mongoURI,{  useNewUrlParser:true,useUnifiedTopology:true }
    );
    await client.connect();

  
    const db = client.db(dbName);

   
    const collection = db.collection('“quizexamrecords');
    const document = {
      name: 'Prashanth',
      sid: '300364316'
    };

 
    await collection.insertOne(document);


    await client.close();

    res.status(200).send('Document added to the database.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
