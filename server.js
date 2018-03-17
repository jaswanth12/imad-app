var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var pool=requrie('pg').pool;

var config = {
    user:'jaswanthyenduri',
    database:'jaswanthyenduri',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    };
function createTemplate(data){
var main_info=data.id;
var name_of_developer=dname;
var date_developer=date_dev;


var Template=
    `<html>
      <head>
          <title>
            ${main_info}
            </title>
    <body>
        <h2>
        ${name_of_developer}
        </h2>
            <div>
            ${date_develpoer}
            </div>
    </body>
</head>
</html>
`;
return Template;
    
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/freinds-details', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'friends-details.html'));
});
var cou=1;
app.get('/frd', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'frd.html'));
});
var pool= new pool(config);
app.get('/developed/:developes',function(req,res){
pool.query("select * from developer where id= '"+req.params.developes+"'",function(err,result){
    
if(err)
    {
        res.status(500).send(err.tostring());
    }
    else
{
    if(result.row.length===0)
    {
        res.status.send("data not found");
    }
    else
    {
        var developerdata=result.row[0];
        res.send(createTemplate(developerdata));
    }
}
});
}
);
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var counter=0;
app.get('/counter', function (req, res) {
counter=counter+1;
res.send(counter.toString());
});



app.get('/dev', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
