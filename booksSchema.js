'use strict';

let obj ={};
let book;

const mongoose = require("mongoose");

 obj.main = async function(){
  await mongoose.connect("mongodb://localhost:27017/books");

  const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
    imageURL: String
  });
 book = mongoose.model("book", bookSchema);

//   obj.seedData();
}

 obj.seedData = async function(){
  // seeding data
  const Paradise = new book({
    title: "Paradise",
    description:
      "The definitive firsthand account of California's Camp Fire--the nation's deadliest wildfire in a century--and a riveting examination of what went wrong and how to avert future tragedies as the climate crisis unfolds",
    status: "available",
    email: "a13banisal@gmail.com",
    imageURL:'./assets/56024292.jpg'
  });
  const BillySummers = new book({
    title: "Billy Summers",
    description:
      "Billy Summers is a man in a room with a gun. He’s a killer for hire and the best in the business. But he’ll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong?",
    status: "available",
    email: "a13banisal@gmail.com",
    imageURL:'./assets/56852407.jpg'
  });
  const DirtyWork = new book({
    title: "Dirty Work",
    description:
      "A groundbreaking, urgent report from the front lines of dirty work--the work that society considers essential but morally compromised",
    status: "available",
    email: "a13banisal@gmail.com",
    imageURL:'./assets/54785496.jpg'
  });
  await Paradise.save();
  await BillySummers.save();
  await DirtyWork.save();
}

 obj.booksHanler= function(req,res){
    const email = req.query.email;
    book.find({email:email},(err,result)=>{
      if(err)
        console.log('error');
      else 
        res.send(result);  
    })
  }

module.exports = obj ;
