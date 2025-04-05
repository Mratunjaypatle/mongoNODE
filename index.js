const mongoose = require("mongoose");
main()
     .then(res => console.log("connected to the db"))

     .catch(err => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema(
     {
          name: String,
          email: String,
          age: Number,
          city : String
     }
)
// models use for mongoose
const User = mongoose.model("User", userSchema);

//inserting data

// User.insertMany([
//      { name: "Mratunjay patle", email: "mratunjaypatle@gmail.com", age: 25 },
//      { name: "Sandeep pandey", email: "sandeep@gmail.com", age: 24 },
//      { name: "sandhya singh", email: "sandhya@gmail.com", age: 25 },
//      { name: "Manish shukla", email: "manish@gmail.com", age: 24 }
// ]).then((res) => {
//         console.log("data inserted into db"  + res)
// }) 
//  User.insertOne({name : "Adam john"}) .then((res) => console.log(res));


//finding the data

User.find({}).then((res) => {
     //    console.log(res);

});


User.find({ age: { $eq: 25 } }).then((res) => {
     // console.log(res);
});

// find by id 

User.findOne({ _id: "67eadef3853d261a4440a91c" })
     .then((res) => {
          // console.log(res);
     })

User.findById("67eadef3853d261a4440a918")
     .then((res) => {
          console.log(res);
     })
     .catch((err) => {
          console.log("error occured");
     })



//updating data 

// User.updateOne({name : "Adam john"} , {age : 30  , city : "wellington"})
// .then((res) =>
// {
//      console.log(res);
// })
// .catch((err)=>
// {
//      console.log("error occured while updating the data");
// })

//delete data 


User.deleteOne({age : 24})
.then((res) =>
{
     console.log(res);
})
.catch((err) =>
{
     console.log(err);
})

 


//inserting the data by objects

// const user2 = new User(
//      {
//           name: "Rishabh mishra",
//           email: "rishabh@gmail.com",
//           age: 26
//      }
// );
// user2.save().
//      then((res) => {
//           console.log("Data Saved" + res)
//      }
//      )
//      .catch((err) =>
//      {
//          console.log(err);
//      })