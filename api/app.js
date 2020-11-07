var express = require('express')
var db = require('./db.js');
const { response } = require('express');
var port = process.env.PORT || 3008;
var app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './')));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', funtion(req, res)
{

})

app.get('/home/:adminType', function(req, res)
{
    const adminType = req.params.adminType;
        db.getLinks(adminType, function(err, linkInfo){
            if(err)
                console.log(err);
            else
            {
                console.log(linkInfo);
                res.json({ linkInfo: linkInfo[0] });
            }
        });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
