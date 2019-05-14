var Product = require( 'C:\\Users\\andy\\WebstormProjects\\shopping\\models\\Product.js' );
var mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/shopping' , { useNewUrlParser : true } );

var products = [
	new Product( {
		imagePath : 'https://imgix.ranker.com/node_img/1200/23997157/original/alethea-talbot-with-her-husband-artwork-photo-1?w=650&q=50&fm=jpg&fit=crop&crop=faces" class="card-img-top image-responsive}' ,
		title : 'Master piece' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,
	new Product( {
		imagePath : 'https://sc01.alicdn.com/kf/HTB1oTFZKVXXXXcoXXXXq6xXFXXXK/Canvas-printed-the-famous-art-picture-classical.jpg' ,
		title : 'Mona Lisa' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,
	new Product( {
		imagePath : 'https://www.artranked.com/images/d8/d8243e1fe3f1fae5c823b49bf0528157.jpg' ,
		title : 'The Birth of Venus' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,
	new Product( {
		imagePath : 'https://imgix.ranker.com/user_node_img/56/1109572/original/guernica-artwork-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces' ,
		title : 'Guernica' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,
	new Product( {
		imagePath : 'https://www.artranked.com/images/7b/7bc4e6dc08307b3869e658227c3ffcef.jpg' ,
		title : 'The Last Supper' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,
	new Product( {
		imagePath : 'https://www.artranked.com/images/7b/7bc4e6dc08307b3869e658227c3ffcef.jpg' ,
		title : 'Whistler\'s Mother' ,
		description : 'Diana\'s painting' ,
		price : 10 ,
	} ) ,

];
done = 0;
for ( var i = 0 ; i < products.length ; i++ ) {
	products[ i ].save( function ( err , result ){
		//wierd logic
		done++;
		if ( done == products.length ) {
			exit();
		}
	} );
}

function exit (){
	mongoose.disconnect();
}