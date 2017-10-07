const express = require('express') /*This is Java Script*/
const { twig } = require('twig') /*How to keep variable, const cannot change*/

const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller') /*. mean that folder, same folder*/
const newsController = require('./controllers/news.controller') /*. mean that folder, same folder*/

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000 /*mili sec = 1 min*/
}))

app.listen(8000/*Port*/, function(err) {
	console.log('Server is running on port 8000')
})








//app.get('/', function(req, res) { /*Get /*//*Function with no name, use only onc time*/
//	res.send('Hello') /*Call Back*/
//})
//Comment

//app.get('/home', function(req, res) { /*Get /*//*Function with no name, use only onc time*/
//	res.send('Home') /*Call Back*/
//}) 
