import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {

  console.log( req.body)
  
  const {session4imageThree} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session4imageThree'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session4imageThree',
               session4imageThree:session4imageThree,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session4imageThree'},
          {$set: {
            session4imageThree:session4imageThree}
          })

         res.send({status:200})

     }


});

export default handler;
