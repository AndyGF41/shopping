var express = require( 'express' );
var router = express.Router();
var Product = require( 'C:\\Users\\andy\\WebstormProjects\\shopping\\models\\Product.js' );



/* GET home page. */
router.get( '/' , function ( req , res , next ){
	Product.find( function ( err , docs ){
		res.render( 'shop/index' , { title : 'Shopping Cart' , products : docs } );
	} );
} );

module.exports = router;
