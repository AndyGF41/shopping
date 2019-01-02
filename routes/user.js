var express = require( 'express' );
var router = express.Router();
var csurf = require( 'csurf' );
var passport = require( 'passport' );

var csurfProtection = csurf();

router.use( csurfProtection );

router.get( '/profile' ,isLoggedIn, function ( req , res , next ){
	res.render( 'user/profile' );
} );
router.get( '/logout' ,isLoggedIn, function ( req , res , next ){
	req.logout();
	res.redirect( '/' );
} );
router.use( '/' , notLoggedIn , function ( req , res , next ){
	next();
} );

router.get( '/signup' , function ( req , res , next ){
	var messages = req.flash( 'error' );
	res.render( 'user/singup' , {
		csurfToken : req.csrfToken() ,
		messages : messages ,
		hasError : messages.length > 0 ,
	} );
} );
router.post( '/signup' , passport.authenticate( 'local.signup' , {
		successRedirect : '/profile' ,
		failureRedirect : '/signup' ,
		failureFlash : true ,
	} ,
) );


router.get( '/signin' , function ( req , res , next ){
	var messages = req.flash( 'error' );
	res.render( 'user/singin' , {
		csurfToken : req.csrfToken() ,
		messages : messages ,
		hasError : messages.length > 0 ,
	} );
} );
router.post( '/signin' , passport.authenticate( 'local.signin' , {

	successRedirect : 'user/profile' ,
	failureRedirect : 'user/signin' ,
	failureFlash : true ,
} ) );
module.exports = router;

function isLoggedIn ( req , res , next ){
	if ( req.isAuthenticated() ) {
		return next();
	}
	else {
		res.redirect( '/' );
	}
}

function notLoggedIn ( req , res , next ){
	if ( !req.isAuthenticated() ) {
		return next();
	}
	else {
		res.redirect( '/' );
	}
}