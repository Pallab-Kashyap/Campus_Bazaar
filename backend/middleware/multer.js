const multer = require("multer")
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
    // where to store the file
    destination:(req , file , cb)=>{
        // parameter of callback are err,name of folder
        // console.log("multer at work")
        console.log('Destination function called');

        return cb(null, "uploads/");
    },

    // filename:(req , file , cb)=>{
    //     return cb(null, `${Date.now()}-${file.originalname}`)
    // }

    filename: (req, file, cb) => {

        console.log('Original Filename:', file.originalname);
        cb(null, Date.now() + path.extname(file.originalname));
    }

})
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         // Use a relative path or ensure the absolute path is accessible
//         const uploadPath = path.join(__dirname, "uploads");
//         // Check if the directory exists, if not create it
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath);
//         }
//         return cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         // Restrict file types if necessary
//         if (!['image/jpeg', 'image/png'].includes(file.mimetype)) {
//             return cb(new Error('Only JPEG and PNG file types are allowed!'));
//         }
//         return cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });


const upload = multer({storage: storage})

module.exports = {upload}