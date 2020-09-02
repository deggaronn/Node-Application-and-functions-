const fs=require("fs");
const app2=require("./app2-module");
var result=app2.readFile1();
if(result===undefined)
{
    console.log("File does not exist");
}
else{
fs.writeFileSync("resultLog.txt",result);
console.log(result);
}