var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./User.model');

var port=1234;
var db='mongodb://localhost/placement'
mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:true
}));
 

app.get('/',function(req,res){
	res.send('Its Working..!!!');
});

app.get('/users',function(req,res){
	console.log('working..!!');
	User.find({})
    .exec(function(err, users) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(users);
        res.json(users);
      }
    }).pretty();
});

app.post('/users', function(req, res) {
  var newUser = new User();
  newUser.name=req.body.name;
  newUser.email=req.body.email;
  newUser.adress.wing=req.body.wing;
  newUser.adress.room=req.body.room;
  newUser.adress.HOR=req.body.HOR;
  newUser.education=req.body.education;
  newUser.skills.intrestAreas=[req.body.int]; 
  newUser.skills.programmingLang=[req.body.pro];
  newUser.skills.ToolsandTech=[req.body.tt];
  newUser.skills.Electives=[req.body.ele];
  newUser.internship.Experienxe=req.body.exe;
  newUser.internship.Rural.name=req.body.rname;
  newUser.internship.Rural.guideName=req.body.gname;
  newUser.internship.Rural.description=req.body.des;
  newUser.internship.Rural.teamSize=req.body.size;
  newUser.projects=req.body.proj;
  newUser.positionOfRes=req.body.ref;
  newUser.awardsAndAchive=[req.body.ana];
  newUser.intrestsAndHobby=[req.body.inh];


  newUser.save(function(err, users) {
    if(err) {
      res.send('Fill All the required fields');
    } else {
      console.log(users);
      res.send(users);
    }
  });
});

app.listen(port,function(){
	console.log('app listing to port '+port);
});