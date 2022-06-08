import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {

  console.log( req.body)
  
  const {session4imageTwo} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session4imageTwo'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session4imageTwo',
               session4imageTwo:session4imageTwo,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session4imageTwo'},
          {$set: {
            session4imageTwo:session4imageTwo}
          })

         res.send({status:200})

     }


});

export default handler;
