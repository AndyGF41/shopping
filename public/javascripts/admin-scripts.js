function mOver ( obj ){
	obj.classList.add( "alert-primary" );
}

function mOut ( obj ){
	obj.classList.remove( "alert-primary" );
}


var switchRow = document.getElementsByClassName( 'switch-row' );

var productTab = document.getElementsByClassName( 'product-tab' );
for ( let item of productTab ) {
	let oldIndex=0
	item.addEventListener( 'click' , function (){
		let productId = this.id;
		fetch( `http://localhost:3000/admin/find-product/${productId}` )
			.then( res => res.json() )
			.then( data => {
				document.getElementById( 'product-img' ).src = data.imagePath;
				document.getElementById( 'card-title' ).innerText = data.title;
				console.log( 'data:' , JSON.stringify( data.imagePath ) );

			} );

		let activeSwitchRow = document.getElementsByClassName( 'switch-row-active' );
		let activeTab= document.getElementsByClassName('active product-tab')
		console.log(activeTab)
		activeTab[0].classList.remove('active')
		this.classList.add('active')

		for ( k = 0 ; k < productTab.length ; ++k ) {
			if ( productTab[ k ].classList.contains( 'active' ) ) {
				activeSwitchRow[ 0 ].classList.remove( 'switch-row-active' );
				console.log('k: ',k)
				console.log('productTab[k]: ',productTab[k])
				switchRow[ k ].classList.add( 'switch-row-active' );

				// productTab[ k ].setAttribute( 'aria-selected' , 'true' );
				// console.log( 'inside if \n product-tab: ' , productTab[ k ] );
				// console.log( 'inside if \n product-tab-Previous Index: ' , productTab[ oldIndex ] );
				/*if ( oldIndex != k ) {
					productTab[ oldIndex ].setAttribute( 'aria-selected' , 'false' );
					productTab[ oldIndex ].classList.remove( 'active' );
				}
				previousIndex=k*/
				console.log('switchRow '+k+' class List: ', switchRow[k].classList)
				break;

			}
		}
	} , false );





}
let previousIndex = 0;
for ( i = 0 ; i < switchRow.length ; i++ ) {
	switchRow[ i ].addEventListener( 'click' , function (){
		let activeRow = document.getElementsByClassName( 'switch-row-active' );
			// console.log( activeProduct[ 0 ] );
			activeRow[ 0 ].classList.remove( 'switch-row-active' );
			this.classList.add( 'switch-row-active' );

			for ( k = 0 ; k < switchRow.length ; ++k ) {
					console.log('k: '+ k+'\n previousIndex: '+previousIndex)

					if ( switchRow[ k ].classList.contains( 'switch-row-active' ) ) {
						productTab[ k ].classList.add( 'active' );
						productTab[ k ].setAttribute( 'aria-selected' , 'true' );
						console.log( 'inside if \n product-tab: ' , productTab[ k ] );
						console.log( 'inside if \n product-tab-Previous Index: ' , productTab[ previousIndex ] );
						if ( previousIndex != k ) {
							productTab[ previousIndex ].setAttribute( 'aria-selected' , 'false' );
							productTab[ previousIndex ].classList.remove( 'active' );
						}
						previousIndex=k
						console.log('previousIndex : ', previousIndex)
						break;

					}
			}

		} ,
	);
}


/*
function getImage ( obj ){
	var objId = obj.id.slice( 2 );
	var query = { _id : objId };
	var product = Product.findOne( query );
	var image = product.imagePath;
	document.getElementById("product-img").src = image;

}
*/


// populateId with each product title
// selectelement by Id
// use the id to find the product with that title
// grab the products image path
// copy the path in the src of the card