const fs=require("fs");
var readFile1=()=>{
    if(fs.existsSync("data.txt")){
    var data=fs.readFileSync("data.txt");
    var data1=data.toString();
    var result="The file contains "+data1.split(" ").length+ " words and "+ data1.length + " characters";
    return result;
    }
    else{
        return undefined;
    }
};
module.exports={
    readFile1
};