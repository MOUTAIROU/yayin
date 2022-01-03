import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session2T3} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session2T3'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session2T3',
                session2T3:session2T3,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session2T3'},
          {$set: {
            session2T3:session2T3}
          })

         res.send({status:200})

     }




});

export default handler;
