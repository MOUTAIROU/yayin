import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session3T5} = req.body
   


          let checkFields = await req.db.collection('home').findOne({
             _id:'session3T5'
          })


          if(checkFields == null){


                  let doc = await req.db.collection('home').insertOne({
                    _id:'session3T5',
                     session3T5:session3T5,
                  })


                 if(doc.acknowledged == true){

                   res.send({status:200})


                 }


          }else {

              let doc = await req.db.collection('home').updateOne(
               {_id:'session3T5'},
               {$set: {
                 session3T5:session3T5}
               })

              res.send({status:200})
            console.log('updateOne');
          }





});

export default handler;
