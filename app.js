const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req.url, req.method, req.headers);


if(req.url=='/home'){
    res.setHeader('Content-Type','text/html');
   res.write('<html>');
res.write('<head><title>Home page</title></head>');
res.write('<body><h1>Welcome home</h1></body>');
res.write('</html>');
res.end();
}

else if(req.url== '/about'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
res.write('<head><title>About page</title></head>');
res.write('<body><h1> Welcome to About Us page</h1></body>');
res.write('</html>');
res.end();  
}

else{
    res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Js project page</title></head>');
res.write('<body><h1>Welcome to my Node Js project</h1></body>');
res.write('</html>');
res.end();
}

});


server.listen(4000);