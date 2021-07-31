const bodyParser = require("body-parser");

// Express setup
const express = require("express");
const app = express();

/**
 * bodyParser can be used with several options (text, json, raw) but for our use case, we will use
 * the urlencoded() option to retrieve the data that is posted to our server from the client (HTML form).
 * The {extended:true} option is explicitly required by the bodyParser, this option allows posting nested objects.
 *  bodyParser allows us to go into any of our routes and tap into the req.body (the body of the HTTP req.).
 */
app.use(bodyParser.urlencoded({extended: true}));
const port = 4200;

/**
 * We use `__dirname` (stands for directory name, gives us the path to the current file regardless of file location)
 * because if we use the relative file path `index.html`, in case our file
 * resides on a remote server or on the cloud, the path to file will not work anymore.
 * `__dirname`: access the directory in which the file resides at any given time.
 */
app.get('/', ((req, res) => {
    res.sendFile(__dirname + '/index.html');
}));

// handle post requests
app.post('/', ((req, res) => {
    const values = [Number(req.body.num1), Number(req.body.num2)];
    const sum = values[0] + values[1];

    res.send(`The result of the calculation is ${sum}`);
}));

// BMI page section
app.get('/bmicalculator', ((req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
}))

app.post('/bmicalculator', ((req, res) => {
    const values = [Number(req.body.weight), Number(req.body.height)];
    const bmiResult = ((values[0] / (Math.pow(values[1], 2))) * 10000).toFixed(1);
    res.send(`Your BMI is: ${bmiResult}`);
}))

app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`);
});
