Stripe.setPublishableKey( 'pk_test_vvhfDn4qyLLDaH8Nte8FOQP0' );

var $form = $( '#checkout-form' );

$form.submit( function ( event ){
	$('#charge-error').css('display','none');
	$form.find( 'button' ).prop( 'disable' , true );
	Stripe.card.createToken( {
		number : $( '#card-number' ).val() ,
		cvc : $( '#card-cvc' ).val() ,
		exp_month : $( '#card-expiry-month' ).val() ,
		exp_year : $( '#card-expiry-year' ).val() ,
		name : $( '#card-name' ).val() ,
	} , stripeResponseHandler );
	return false;
} );
function stripeResponseHandler ( status , response ){
	if ( response.error ) { // Problem!
		$( '#charge-error' ).text( response.error.message );
// Show the errors on the form
		$('#charge-error').css('display','block');
		$form.find( 'button' ).prop( 'disabled' , false ); // Re-enable submission

	} else { // Token was created!

		// Get the token ID:
		var token = response.id;

		// Insert the token into the form so it gets submitted to the server:
		$form.append( $( '<input type="hidden" name="stripeToken" />' ).val( token ) );

		// Submit the form:
		$form.get( 0 ).submit();

	}
}