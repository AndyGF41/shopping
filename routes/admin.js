var express = require( 'express' );
var router = express.Router();
var Cart = require( 'C:\\Users\\andy\\WebstormProjects\\shopping\\models\\Cart.js' );
var Product = require( 'C:\\Users\\andy\\WebstormProjects\\shopping\\models\\Product.js' );
var Order = require( 'C:\\Users\\andy\\WebstormProjects\\shopping\\models\\Order.js' );
// import {getImage} from 'C:\\Users\\andy\\WebstormProjects\\shopping\\public\\javascripts\\admin-scripts.js';

//creatin dianas admin api
router.get( '/main' , function ( req , res , next ){
	res.render( 'admin/main' );
} );
router.get( '/manage-orders' , function ( req , res , next ){
	res.render( 'admin/orders' );
} );
router.get( '/manage-products' , function ( req , res , next ){
	Product.find( function ( err , docs ){
		// Product.findOne()
		res.render( 'admin/products' , {
			products : docs,
			// image :getImage()
	})
		console.log('res: ',res)
	} );

} );
router.get( '/find-product/:id' , function ( req , res , next ){
	let id=req.params.id
	Product.findById(id, function ( err,docs ){
		console.log('req:',req.params)
		console.log('docs:',docs.title)
		res.send(docs)
		 	 } )




} );


module.exports = router;
