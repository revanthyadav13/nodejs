
const fs= require('fs');

const requestHandler= (req,res)=>{
const url=req.url;
const method=req.method;
if(url == '/') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    console.log(data);
      res.write('<html>');
      res.write('<body>');
      res.write(`${data}`);
      res.write(`<form action="/message" method="POST"> <label for="Text">Enter The Text:</label> <br> <input type="text" id="Text" name="Text"><button type="submit">Send</button> </form> `);
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }


else if(url=='/message' &&  method=="POST"){
const body=[];
    req.on('data', (chunk)=>{
        console.log(chunk);
         body.push(chunk);
    })

  return  req.on('end', ()=>{
const parsedBody=Buffer.concat(body).toString();
const message=parsedBody.split('=')[1];
fs.writeFile('message.txt',message, err => {
  if(err){
    console.log(err);
  }
  
res.statusCode=302;
res.setHeader('Location','/');
return res.end();
});

    });
}
else{
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Js project page</title></head>');
res.write('<body><h1>Welcome to my Node Js project</h1></body>');
res.write('</html>');
res.end();
}

}

//module.exports=requestHandler;

/* module.exports={
  handler:requestHandler,
  someText:"Some hard code text"
    };
 */

/* module.exports.handler=requestHandler;
 module.exports.someText="Some hard code text";
*/

 exports.handler=requestHandler;
 exports.someText="Some hard code text";




