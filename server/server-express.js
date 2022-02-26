const express = require('express');
const app = express();
const port = 4000;
const ip = 'localhost';
const cors = require('cors');

// TODO: CORS 모듈을 사용하기 위한 코드를 작성하세요 

app.use(express.json({"strict":false}));
app.use(express.static(`../client`));

////////////////////////////////////////////////////////////////////

app.get(`/`, (req, res) => { return res.redirect(`http://${ip}:${port}/index.html`); });

// TODO: 아래에 '/upper'로 들어오는 요청을 처리하는 코드를 작성하세요. 

//시도중
//app.post(`/upper`, (req, res) => {
  //return a.redirect("http://${ip}:${port}/index.html");})
//console.log('/upper.toUpperCase()') ;

//var a = "http://${ip}:${port}/index.html" ;
//a.toLowerCase() ;

//var string = 'toUpperCase tolowerCase';

//string = string.toUpperCase();
//console.log(string); 

//string = string.toLowerCase();
//console.log(string); 

app.post('/upper', (req, res) => {
	let data = req.body.toUpperCase();
	res.json(data)
  
})


// TODO: 아래에 '/lower'로 들어오는 요청을 처리하는 코드를 작성하세요. 
app.post('/Lower', (req, res) => {
	let data = req.body.toLowerCase();
	res.json(data);
})

app.post('/Lower', (req, res) => {
	let data = req.body.toLowerCase();
	res.json(data);
})


//upper -> console.log(`upper post req`);
//lower -> console.log(`lower post req`);


app.listen(port, () => {
  console.log(`Server listening on http://${ip}:${port}`)
})
