const customer = require("./models/customer");

const 
express    = require ("express"),
app        = express(),
bodyParser = require("body-parser"),
mongoose   = require("mongoose")


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + '/public'));



mongoose
.connect(
   'mongodb+srv://password:ppassword@marvvy-foods.jp80wus.mongodb.net/?retryWrites=true&w=majority'
    )
		.then(() => {
			console.log('DB connected successfully');
		})
		.catch((err) => {
			console.log('Error connecting to DB', err);
		});

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

app.post("/restuarant/register", async function(req, res){
    const newRestuarant = new Restuarant({
        nameob: req.body.name,
        emailob: req.body.emailob,
        typeOfFood: req.body.typeOfFood,
        logo: req.body.logo,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        password: req.body.password
    });

    try {
        const savedRestuarant = await newRestuarant.save();
        console.log(savedRestuarant);
    } catch (err) {
        console.log(err)
    }
    return
}) 

//Get Each Restuarant
app.get("/restuarant", function(req, res){
    res.render("restuarant")
});

//signup
app.get("/signup", function(req, res){
    res.render("signup")
})

app.post("/signup", async(req, res) => {
    const newCustomer = new customer({
        type: req.body.type,
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        allergies: req.body.allergies,
        password: req.body.password
    });

    try {
        const savedCustomer = await newCustomer.save();
        console.log(savedCustomer);
    } catch (err) {
        console.log(err)
    }
    return
})

//login
app.get("/login", function(req, res){
    res.render("login")
})

const port = process.env.PORT || 2800 ;

app.listen(port, function(){
    console.log("Marvvy Foods");
    });