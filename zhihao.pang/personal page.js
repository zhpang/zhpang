console.log("script loaded")

//reference both the input and the message div
//into varaibles

var input = $("#name-id");
var msg = $("#name-error-id");
console.log(msg);

//when i change the input's value (by typing)

input.change(function(){

//get the length of the value
var length = input.val().length;

//if length < 4 then remove the hidden class

if(length < 4){
	msg.removeClass('hidden');

}else {
//otherwise add the class name hidden

msg.addClass('hidden');

}

});

$('.my-alert-btn').click(function(){ 
    alert('Hello'); 
});



//get the checkbox and submit
var cb = $('#cb-id');
var submit = $('#submit-id');

//when I change the checkbox value, trigger the code
cb.change(function(){

//if checkbox is checked, then disable button == false
//else disable button == true
if(cb.prop('checked')){
submit.prop('disabled', false);
} else {

submit.prop('disable', true)


}

});

