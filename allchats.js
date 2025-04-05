const mongoosh = require("mongoose");
const chat = require("./models/chat.js");

async function main() {
     await mongoosh.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
     .then((res) => {
          console.log("connection established of mongodb");
     })
     .catch((err) => {
          console.log(err);
     })

// chat.insertMany([
//       {
//           from: "Sakshi Soni",
//           to: "Mratunjay Patle",
//           msg: "I'm good! What about you?",
//           created_at: new Date()
//       },
//       {
//           from: "Rahul Verma",
//           to: "Priya Sharma",
//           msg: "Hey, long time no see!",
//           created_at: new Date()
//       },
//       {
//           from: "Priya Sharma",
//           to: "Rahul Verma",
//           msg: "Yes! It's been a while. How have you been?",
//           created_at: new Date()
//       },
//       {
//           from: "Ankit Yadav",
//           to: "Rohit Mehta",
//           msg: "Did you complete the project?",
//           created_at: new Date()
//       },
//       {
//           from: "Rohit Mehta",
//           to: "Ankit Yadav",
//           msg: "Almost done. Need some final touches.",
//           created_at: new Date()
//       },
//       {
//           from: "Neha Gupta",
//           to: "Suman Joshi",
//           msg: "Let's plan a trip next weekend!",
//           created_at: new Date()
//       },
//       {
//           from: "Suman Joshi",
//           to: "Neha Gupta",
//           msg: "Sounds great! Where do you want to go?",
//           created_at: new Date()
//       },
//       {
//           from: "Amit Tiwari",
//           to: "Kavita Singh",
//           msg: "Happy Birthday! Have a great year ahead!",
//           created_at: new Date()
//       },
//       {
//           from: "Kavita Singh",
//           to: "Amit Tiwari",
//           msg: "Thank you so much! 😊",
//           created_at: new Date()
//       }
// ])
// .then((res) =>
// {
//      console.log(res);
// })
// .catch((err) =>
// {
//      console.log(err);
// })

chat.insertOne({
     from: "bittu patle",
     to: "sakshi ji ",
     msg: "i love uhh❤️",
     created_at: new Date()
})

.then((res) =>
     {
          console.log(res);
     })
     .catch((err) =>
     {
          console.log(err);
     })