import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session5T2,sessionT2} = req.body
   console.log("tttttttttttttttt");
   console.log(req.body);


          let checkFields = await req.db.collection('home').findOne({
             _id:'session5T2'
          })


          if(checkFields == null){


                  let doc = await req.db.collection('home').insertOne({
                    _id:'session5T2',
                     session5T2:session5T2,
                  })


                 if(doc.acknowledged == true){

                   res.send({status:200})


                 }


          }else {

              let doc = await req.db.collection('home').updateOne(
               {_id:'session5T2'},
               {$set: {
                 session5T2:session5T2}
               })

              res.send({status:200})
            console.log('updateOne');
          }





});

export default handler;
