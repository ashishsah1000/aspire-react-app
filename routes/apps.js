var express = require("express");
var router = express.Router();
const app = require("../app");
var mongoose = require("mongoose");
const CreateFocus = require("../models/createFocus");

mongoose.Promise = global.Promise;
/* GET home page. */
router.get("/focus", function (req, res, next) {
  res.render("index", { title: "Focus Page" });
});


// Create the Focus job takes input from the focus create element 
router.post("/focus/create", (req, res, err) => {
   function SaveToDatabase() {
    var saveData = new CreateFocus(data);
    try{
      var final = await saveData.save((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("saved");
          mongoose.disconnect();
          
        }

      });
      res.send(JSON.stringify("Saved"));
      console.log(final)

    }catch(err){
      console.log(err);
      res.status(400).send(JSON.stringify("Data Not Saved to Database"));
    }
    
  }



  var data = req.body;
  console.log(data);
  mongoose.connect(
    "mongodb+srv://flekenstine:ashish1998@cluster0.5wqh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (err, next) => {
      if (err) {
        console.log(err);
        res.send(JSON.stringify("Data Not Saved to Database"));
      } else {
        console.log("connection successfull");
        SaveToDatabase();

      }
    }
  );
 
 
  // if(final.status)
      
  // else
      // res.status(400).send(JSON.stringify("Data Not Saved to Database"));
});
module.exports = router;
