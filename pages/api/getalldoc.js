import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.get(async (req, res, next) => {





          let checkFields = await req.db.collection('home').find().toArray()

            
          return res.status(200).json({
                     status: "success",
                     message: "The file type is not a valid type",
                     doc:checkFields
                   });





});

export default handler;
