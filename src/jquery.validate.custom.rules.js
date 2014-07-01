/**
 * Additional jQuery validator methods that are likely to be reusable
 * across multiple projects. Feel free to use the entire file or just
 * individual methods. If you add new methods, please add them to the
 * central custom methods file.
 *
 * @author Josh Justice <josh.justice@northpoint.org>
 */

jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");

jQuery.validator.addMethod("postalcode", function(postalcode, element) {
	return this.optional(element) || postalcode.match(/^\d{5}(-\d{4})?$/);
}, "Please specify a valid postal/zip code");

