const path = require('path')
const express = require("express");
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;;
const app = express();
const port = 3000;
//express.static: 1 middleware tích hợp trong ExpessJS phục hồi tài nguyên tĩnh từ thư mục public
//__dirname biến toàn cục trong NodeJS
app.use(express.static(path.join(__dirname, 'public')))
//app.use: đăng kí middleware
app.use(morgan('combined'));
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// method
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
