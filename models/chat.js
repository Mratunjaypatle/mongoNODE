const mongoose = require("mongoose");
const chatSchema = mongoose.Schema(
     {
          from:
          {
               type: String,
               required: true
          },
          to:
          {
               type: String,
               required: true
          },
          msg:
          {
               type: String,
               required: true,
               maxLength: 300
          },
          created_at:
          {
               type: Date
          }
     }
)


const chat = mongoose.model("chat" , chatSchema);

module.exports = chat;