import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();

handler.use(middleware);
handler.post(async (req, res, next) => {


  const {session2T1} = req.body



     let checkFields = await req.db.collection('home').findOne({
        _id:'session2T1'
     })


     if(checkFields == null){


             let doc = await req.db.collection('home').insertOne({
               _id:'session2T1',
                session2T1:session2T1,
             })


            if(doc.acknowledged == true){

              res.send({status:200})


            }


     }else {

         let doc = await req.db.collection('home').updateOne(
          {_id:'session2T1'},
          {$set: {
            session2T1:session2T1}
          })

         res.send({status:200})

     }


});

export default handler;
