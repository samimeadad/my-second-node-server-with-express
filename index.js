const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
const port = 5000;
app.use( cors() );
app.use( express.json() );

app.get( '/', ( req, res ) => {
    res.send( "Hello from my second node app server with node and express. Monitoring any changes in my source code." );
} );

const users = [
    { id: 0, name: "Sami", phone: "01711888880", email: "sami@gmail.com" },
    { id: 1, name: "Farmee", phone: "01711888881", email: "Farmee@gmail.com" },
    { id: 2, name: "Aarishamma", phone: "01711888882", email: "Aarishamma@gmail.com" },
    { id: 3, name: "Aarash", phone: "01711888883", email: "Aarash@gmail.com" },
    { id: 4, name: "Rawda", phone: "01711888884", email: "Rawda@gmail.com" },
    { id: 5, name: "Ramisha", phone: "01711888885", email: "Ramisha@gmail.com" }
];

app.get( '/', ( req, res ) => {
    res.send( "WoW! I am learning node with ExpressJS web framework. Hello from my seconde node server with nodemon auto restart feature. Thanks for visiting." );
} )

app.get( '/users', ( req, res ) => {
    //use query parameter
    const search = req.query.search;
    if ( search ) {
        const searchResult = users.filter( user => user.name.toLowerCase().includes( search ) );
        res.send( searchResult );
    }
    else {
        res.send( users );
    }

} );

//app.METHOD
app.post( '/users', ( req, res ) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push( newUser );
    console.log( 'hitting the post', req.body );
    // res.send( JSON.stringify(newUser) );
} );

//dynamic API
app.get( '/users/:id', ( req, res ) => {
    const id = req.params.id;
    const user = users[ id ];
    res.send( user );
} );

app.get( '/fruits', ( req, res ) => {
    res.send( [ "Mango", "Orange", "Watermelon", "Lichi", "Apple" ] );
} );

app.get( '/fruits/mangoes/fazli', ( req, res ) => {
    res.send( "Yummy Yummy Tok Misti Fazli Mango" );
} );

app.listen( port, () => {
    console.log( `My second node app server is listening at http://localhost:${ port }` );
} );