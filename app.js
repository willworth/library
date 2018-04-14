const port = process.env.PORT || 3088;

const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app'); // app will tell you where you are in the log!
const morgan = require('morgan');

const app = express();
const path = require('path'); // built in!
const bookRouter = express.Router();


// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', 'src/views');
// app.set('views', path.join(__dirname, 'views'));  // this is the wesbos way...
app.set('view engine', 'ejs')

const books=[
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Leo Tolstoy',
    read: false
  },
  {
    title: 'title2',
    genre: 'genre2',
    author: 'author2',
    read: false
  },
  {
    title: 'title3',
    genre: 'genre3',
    author: 'author3',
    read: true
  },
];
bookRouter.route('/books')
  .get((req, res) => {
    res.render('books', {
      //  nav: ['Books', 'Authors'],
      nav: [
        { link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }
      ],
      title: 'Library',
      books
    });
  });

app.use('/', bookRouter);

app.get('/', (req, res) => {
  // res.render('index', { title: 'Library' });
  res.render(
    'index',
    {
      //  nav: ['Books', 'Authors'],
      nav: [
        { link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }
      ],
      title: 'Library'
    }
  );
});


// app.get('/', function(req, res){
//     res.send("Hi");
// })


app.listen(port, () => {
  // ES6 TEMPLATE LITERALS
  // console.log(`listening on port ${chalk.green('3000')}`);
  debug(`listening on port ${chalk.green('http://localhost:', port)}`);
  // console.log(`listening on  ${chalk.green('http://localhost:3000')}`);
  // #TODO console.log('listening on port', port);
});
