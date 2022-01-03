import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session3T7} = req.body



          let checkFields = await req.db.collection('home').findOne({
             _id:'session3T7'
          })


          if(checkFields == null){


                  let doc = await req.db.collection('home').insertOne({
                    _id:'session3T7',
                     session3T7:session3T7,
                  })


                 if(doc.acknowledged == true){

                   res.send({status:200})


                 }


          }else {

              let doc = await req.db.collection('home').updateOne(
               {_id:'session3T7'},
               {$set: {
                 session3T7:session3T7}
               })

              res.send({status:200})
            console.log('updateOne');
          }





});

export default handler;
