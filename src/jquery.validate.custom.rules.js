/**
 * Additional jQuery validator methods that are likely to be reusable
 * across multiple projects. Feel free to use the entire file or just
 * individual methods. If you add new methods, please add them to the
 * central custom methods file.
 *
 * @author Josh Justice <josh.justice@northpoint.org>
 */

/**
 * Add any custom validation rules here.
 *
 * For details, see http://jqueryvalidation.org/jQuery.validator.addMethod
 */
jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");

jQuery.validator.addMethod("postalcode", function(postalcode, element) {
	return this.optional(element) || postalcode.match(/^\d{5}(-\d{4})?$/);
}, "Please specify a valid postal/zip code");

jQuery.validator.addMethod("before_now", function(value, element) {
	if(this.optional(element)) { return true; }
	var mydate = new Date(value);
	// TODO: this doesn't handle times well. probably best to use
	// moment.js for parsing, but didn't want to add that dependency yet
	if( typeof mydate === 'undefined' ) {
		return false;
	}
	return mydate < new Date(); // today
}, "Please specify a date that is in the past");

jQuery.validator.addMethod("required_if", function(value, element, extras) {
	if(value == '') {return false; }
	
	var value_arr = extras.split(',');
	var element_to_access = value_arr[0];
	var values_to_access =value_arr[1].split("|");
	
	var value_of_element_to_access = $("#" + element_to_access).val();
	var valid = false;
	
	for (var key in values_to_access) {
		if (values_to_access[key] == value_of_element_to_access) {
			valid = true;
		}
	}
	
	return valid;
}, "This Field is required.");