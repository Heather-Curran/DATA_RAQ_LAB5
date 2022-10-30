const express = require('express') //Express is web framework
const app = express() //Running express
const port = 3000 //Define port
const bodyParser = require('body-parser'); //Allows you to search body of Http request (For Post Method)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listens for request at url '/' that has a get method
//Url '/' also known as endpoint
//When both conditions are met, will send back Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Req = request, res = response. res.send to send text
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

// : used to create variable i.e :name
//So if you go to /hello/heather it will send back 'Hello heather'
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/api/books', (req, res) => {
    const mybooks = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
        },
        {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
        }         
    ]

    res.json({
        books:mybooks
    })
})

//Listen for HTTP request from this URL and send back /index.html file
//__direname gets current directory
app.get('/test', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

//Gets fname and lname from form
app.get('/name', (req, res) => {
    console.log(req.query.lname);
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
 })

 //Post method puts data in body of http request not URL. More secure
 app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('Hello from Post ' + req.body.fname + ' ' + req.body.lname);
 })

//Listens for request at port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Must stop (Ctrl C) and start (node server.js) server everytime or you'll get errors