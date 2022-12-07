// const express = require("express");
// const upload = require("express-fileupload");
// const app = express();
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(upload());
// const path = require("path");
// // app.set("views", viewPath);
// // var viewPath = path.join(__dirname, "./C:\Users\Acer\Documents\file.uploads\images");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//   if (req.files) {
//     console.log(req.files);
//     const file = req.files.file;
//     const filename = file.name;
//     console.log(filename);

//     file.mv("/",filename, (err) => {
//         // res.sendFile(__dirname + "/C:/Users/Acer/Documents/file.uploads/images");
//       if (err) return console.log(err);
//       res.status(200).send("File uploaded succesfully");
//     });
//   }
// });

// app.listen(7000, () => {
//   console.log("server started running at 7000");
// });

const express = require("express");
const app = express();
const path = require("path")

const multer = require("multer");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null, Date.now()+path.extname(file.originalname))

    }
})
const upload = multer({ storage: storage });
app.set("view engine", "ejs");
app.get("/upload", (req, res) => {
  res.render("upload");
});
app.post("/upload",upload.any("image"), (req, res) => {
  res.send("image uploaded");
});

app.listen(5000, () => {
  console.log("server started running at 7000");
});
