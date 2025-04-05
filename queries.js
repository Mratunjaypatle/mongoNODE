show dbs;
use db_name;
//insert data
db.student.insertOne({name : "Mimansha sharma" , performance : {marks : 85 , grade: "A+"} })
//find data
db.student.find({marks:85})    
// update data
db.student.updateOne({name : "Mimansha sharma"} , {$set : {marks : 85}})
// delete data 
db.student.deleteOne({name : "nikhil"})
//replace data
db.student.replaceOne({name : "Mratunjay patle"} , {$set:{name : "Bittu"}})