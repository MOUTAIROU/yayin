import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session4T2} = req.body
   


          let checkFields = await req.db.collection('home').findOne({
             _id:'session4T2'
          })

         console.log(checkFields);
          if(checkFields == null){


                  let doc = await req.db.collection('home').insertOne({
                    _id:'session4T2',
                     session4T2:session4T2,
                  })
         console.log(doc);

                 if(doc.acknowledged == true){

                   res.send({status:200})


                 }


          }else {

              let doc = await req.db.collection('home').updateOne(
               {_id:'session4T2'},
               {$set: {
                 session4T2:session4T2}
               })

              res.send({status:200})
            console.log('updateOne');
          }





});

export default handler;
