const 
express    = require ("express"),
app        = express(),
bodyParser = require("body-parser"),
mongoose   = require("mongoose")


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + '/public'));



mongoose.connect("mongodb://localhost/marvvy-foods");

app.get("/home", function(req, res){
    res.render("home")
});


//Shop Now
app.get("/shopnow", function(req, res){
    res.render("shopnow")
});

//create new restuarant
app.get("/restuarant/register", function(req, res){
    res.render("newrestuarant")
})

//Get Each Restuarant
app.get("/restuarant/:id", function(err, restuarant){
    res.send("get restuarant by id")
});

//signup
app.get("/signup", function(req, res){
    res.render("signup")
})

//login
app.get("/login", function(req, res){
    res.render("login")
})

const port = process.env.PORT || 2000 ;

app.listen(port, function(){
    console.log("Marvvy Foods");
    });