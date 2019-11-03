const express = require('express')
const app = express()
const port = 3000
const expressHandlebars = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const restaurants = restaurantList.results

  res.render('index', { restaurants: restaurants })
})

app.listen(port, () => console.log(`The server is listening on port:${port}`))