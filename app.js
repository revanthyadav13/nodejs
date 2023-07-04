const http=require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;

 if(url=='/message' &&  method=="POST"){
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

if (url == '/') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    console.log(data);
      res.write('<html>');
      res.write('<body>');
      res.write(`${data}`);
      res.write(`<body> <form action="/message" method="POST"> <label for="Text">Enter The Text:</label> <br> <input type="text" id="Text" name="Text"><button type="submit">Send</button> </form>     </body>`);
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }


});


server.listen(4000);