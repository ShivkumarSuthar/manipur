const multer=require('multer');

const path=require('path');


const storage=multer.diskStorage({
    destination:function(req,file, cb){
cb(null, path.join(__dirname, '../public/thumbnail'), function(error){
    throw error
})},
filename:function(req,file, cb){
    const name=Date.now()+'_'+file.originalname;
    cb(null, name, function(error, success){
        if(error){
            throw error;
        }
        if(success){
             console.log('file name created!')
        }
    })
}
});
const upload=multer(storage);
module.exports=upload;