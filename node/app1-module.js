const fs=require("fs");


var addName=(fname,lname)=>{
    var fullName="Your Full name is "+fname+" "+lname;
    fs.writeFileSync("PersonName.txt",fullName);
}
module.exports={
    addName:addName
};