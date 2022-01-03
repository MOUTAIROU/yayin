import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
var ObjectId = require('mongodb').ObjectId;
const handler = nextConnect();
const formidable = require('formidable');
const fs = require('fs');
const  path = require('path');

export const config = {
    api: {
       bodyParser: false,
    },
};

const isFileValid = (file) => {
  const type = file.mimetype.split("/").pop();
  const validTypes = ["jpg", "jpeg", "png", "pdf"];
  if (validTypes.indexOf(type) === -1) {
    return false;
  }
  return true;
};

handler.use(middleware);

handler.post(async (req, res, next) => {



        const sendData = new Promise(function(resolve,reject){


               const uploadFolder = "./public"
               const form = new formidable.IncomingForm();
                      form.maxFilesSize = 50 * 1024 * 1024
                     form.uploadDir = uploadFolder
                     form.keepExtensions = true;

                    form.parse(req, (err, fields, files) => {




                      const file = files.file;


                      // checks if the file is valid
                     const isValid = isFileValid(file);

                     // creates a valid name by removing spaces
                     const fileName = encodeURIComponent(file.originalFilename.replace(/\s/g, "-"));






                        if (!isValid) {
                          // throes error if file isn't valid
                          return res.status(400).json({
                            status: "Fail",
                            message: "The file type is not a valid type",
                          });

                          reject(400)
                        }

                        try {
                           // renames the file in the directory
                           fs.renameSync(file.filepath, path.join(uploadFolder, fileName));
                            resolve(path.join(fileName))
                         } catch (error) {
                           console.log(error);
                           reject('error')
                        }




              });
     })

    sendData.then(async (value) => {



      let checkFields = await req.db.collection('home').findOne({
         _id:'session2Image'
      })


    if(checkFields == null){


              let doc = await req.db.collection('home').insertOne({
                _id:'session2Image',
                 session2Image:value,
              })



             if(doc.acknowledged == true){

               return res.status(200).json({
                 status: "success",
                 message: "success",
               });


             }


      }else {

          let doc = await req.db.collection('home').updateOne(
           {_id:'session2Image'},
           {$set: {
             session2Image:value}
           })

           return res.status(200).json({
             status: "success",
             message: "success",
           });


      }


   })
   .catch(function(e) {



   return res.status(400).json({
          status: "Fail",
          message: "The file type is not a valid type",
         });

   });
});


export default handler;
