exports.getContactUs=(req, res, next)=>{
res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
};


exports.postContactUs(req, res, next)=>{
    console.log(req.body.name);
    console.log(req.body.emailID);
res.redirect('/success');
}