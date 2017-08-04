var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one': {
  title: 'Article one | Manu'  ,
  heading: 'Article one',
  date: 'Aug 8, 2017',
  content: `<p>
        This is the A1 content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p><br>
    <p>
        This is the content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p>`
  
},
'article-two': {
  title: 'Article two | Manu'  ,
  heading: 'Article two',
  date: 'Aug 9, 2017',
  content: `<p>
        This is the A2 content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p><br>
   `
  
},
'article-three': {
  title: 'Article three | Manu'  ,
  heading: 'Article three',
  date: 'Aug 10, 2017',
  content: `<p>
        This is the A3 content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p><br>
   <p>
        This is the content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p>
  <p>
        This is the content !
                This is the content !
                        This is the content !
                                This is the content !
        
    </p>`
  
  
},
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate = ` 
    <html>
    <head>
        <title>
            ${title}
        </title>    
        <meta name="viewport" content="width-device-width, initial-scale=1"> 
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href ="/">Home</a>
        </div>

    <hr/>
    <h1>
        ${heading}
    </h1>
    <div>
        ${date}
    </div>
        ${content}
    </div>
    </body>
    </html>`;
    return htmlTemplate;
}
var counter = 0;
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    //articleName = article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];

app.get('/submit-name/:name', function(req, res){
    var name = req.param.name;
    
    names.push[name];
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
