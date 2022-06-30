const express = require('express');
const { default: knex } = require('knex');
const { reset } = require('nodemon');
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

let menu = [
    {
        name: 'Margarita',
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: 'Diavola',
        price: 30,
        ingredients: ["Tomato Sauce", "Ham", "Garlic"]
    },
    {
        name: 'La DI',
        price: 25,
        ingredients: ["Tomato Sauce", "Mozzarella", "Mushrooms"]
    }
]


app.get('/', (req, res) => {
    let owner = "JP Fortuno"
    let staff = ["Lucas", "Tushav", "Alvin", "Yeshna", "Nahidah", "Umar", "Vidurath", "Manuella"]

    res.render('index', {
        restaurant_name: "DI PIZZA",
        pizza_owner: owner,
        our_staff: staff,
        pizza_menu: menu
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => console.log('Server is listening on port 3000'));