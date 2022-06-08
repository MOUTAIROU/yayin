import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {

  console.log( req.body)
  
  const {session5imageOne} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session5imageOne'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session5imageOne',
               session5imageOne:session5imageOne,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session5imageOne'},
          {$set: {
            session5imageOne:session5imageOne}
          })

         res.send({status:200})

     }


});

export default handler;
