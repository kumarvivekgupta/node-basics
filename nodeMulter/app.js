const express =require('express')
const ejs=require('ejs')
const multer=require('multer')
const path=require('path')

const app=express();
app.set('view engine','ejs');



//multer setting
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./public/myupload");
    },
    filename: function(req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });
  
  var upload = multer({
    storage: storage
  }).single("profilepic");
  app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.render('index');
});
//Description
app.post('/upload',(req,res)=>{
    upload(req,res,(error)=>{
if(error){
    res.render('index',{
        message:error
    })
}else{
    res.render('index',{
        message:'Uploaded successfully...',
        filename:`myupload/${req.file.filename}`
    })
}
    });
})
app.listen(3000,()=>{
console.log('serve is running on port 3000')
});