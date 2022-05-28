import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
//mongodb+srv://mouta:Babe0078@cluster0.kjut3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


  const mongoClient = new MongoClient('mongodb+srv://mouss:Babe0078@cluster0.ymdze4s.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //with serverless we need to use cache to prevent re-opening connection
  let cached = global.mongo


  if (!cached) {
    cached = global.mongo = { conn: null, promise: null }
  }
      console.log('------------------------------------------');

      console.log('------------------------------------------');
  async function database(req, res, next) {
    if (!cached.promise) {
      cached.promise = mongoClient.connect().then((client) => {

        console.log('------------------------------------------');
           console.log(client);
           client.db('yayindb')
        console.log('------------------------------------------');


        return {
          client,
          db: client.db('yayindb'),
        }
      })
      cached.conn = await cached.promise
    }

    req.dbClient = cached.conn.client
    req.db = cached.conn.db

    return next();
  }

  const middleware = nextConnect();

  middleware.use(database);


  export default middleware;
