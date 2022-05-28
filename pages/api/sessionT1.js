import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {
console.log('req.body')
  const {sessionT1} = req.body
   console.log("tttttttttttttttt");
   console.log(req.body);


          let checkFields = await req.db.collection('home').findOne({
             _id:'sessionT1'
          })


          if(checkFields == null){


                  let doc = await req.db.collection('home').insertOne({
                    _id:'sessionT1',
                     sessionT1:sessionT1,
                  })


                 if(doc.acknowledged == true){

                   res.send({status:200})


                 }


          }else {

              let doc = await req.db.collection('home').updateOne(
               {_id:'sessionT1'},
               {$set: {
                 sessionT1:sessionT1}
               })

              res.send({status:200})
            console.log('updateOne');
          }





});

export default handler;
