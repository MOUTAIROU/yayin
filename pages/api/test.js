import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.get(async (req, res, next) => {




 let doc = await req.db.collection('ibab').findOne()

      console.log(doc);
    res.status(200)







});

export default handler;
