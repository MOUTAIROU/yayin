import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {

  console.log( req.body)
  
  const {session2image} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session2image'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session2image',
               session2image:session2image,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session2image'},
          {$set: {
            session2image:session2image}
          })

         res.send({status:200})

     }


});

export default handler;
