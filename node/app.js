const fs=require("fs");
const http=require("http");
const qs=require("querystring");
const app1=require("./app1-module");
const { RSA_NO_PADDING } = require("constants");

const server = http.createServer((req, res,next) => {
    if (req.method === 'POST') {
        let body = "";
        req.on('data', chunk => {
            body += chunk;  
        });
        req.on('end', () => {
            var post=qs.parse(body);
            console.log(post.fname);
            console.log(post.lname);
            app1.addName(post.fname,post.lname);
            res.writeHead(301, { Location: "/success" });
            res.end();
        });
    }
    else if(req.url === '/success')
    {
        res.statusCode=201;
        res.write('Success!');
        res.end();
        
    }
       
    else {
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    First Name <input type="text" name = "fname"/><br />
                    Last Name <input type="text" name = "lname"/><br />
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(3000);