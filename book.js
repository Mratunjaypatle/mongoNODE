const mongoose = require("mongoose");

async function main() {
     await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};

main()
     .then((res) => console.log("Connection established"))
     .catch(err => console.log(err))

const bookSchema = mongoose.Schema({
     title:
     {
          type: String,
          required: true,
          uppercase: true
     },

     subject:
     {
          type: String,
          required: true,
          lowercase: true
     },
     author: {
          type: String
     },
     price:
     {
          type: Number,
          min : [100 , "It is low price than requiring amount for amaozon"],
     },
     discount :
     {
          type : Number,
          default : 0
     },
     category :
     {
          type : String,
          enum : ["fictional" , "non - fictional"] // it ensures a certain condition ...
     }

})

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book ({
//      title : "Mathamatics 2,
//      author : "RD sharma",
//      price : 250
// })
// book1.save()
// .then((res) => { console.log(res) })
// .catch((err) => { console.log(err) })

Book.insertOne({ title: "Timely Comics", author: "Stan Lee", subject: "bussiness", price: -10  , category : "fictional" })
     .then((res) => console.log(res))
     .catch((err) => console.log(err.errors.price.properties.message))

