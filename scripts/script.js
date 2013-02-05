

//buttonTable
/*$(document).ready(function (){
   var $as = $('div a') 
   var $ims = $('div p');
    $as.click(function(){
      $ims.hide();  
      $ims.eq($as.index(this)).show();  
    }); 
     
});*/
var tableHolder = $('#tableHolder');
var holder = $('#holder');

function isTable(){
tableHolder = $('#tableHolder');
var buttonTable = $('#tableButton');
buttonTable.click(function(){
holder.hide();
console.log(holder)
tableHolder.show();

});}

//buttonGraph
function isGraph(){
holder = $('#holder');
var buttonGraph = $('#graphButton');
buttonGraph.click(function(){
tableHolder.hide();
console.log(holder)
holder.show();
});}


$(document).ready( function () {
	$('#example').dataTable( {
//T<"clear">lfrtip   <"H"Tfr>t<"F"ip>
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",
		"sDom": 'T<"clear">lfrtip<"H">t',
		"oTableTools": {
			"aButtons": [
				"copy", "csv", "xls", "pdf",
				{
					"sExtends":    "collection",
					"sButtonText": "Save",
					"aButtons":    [ "csv", "xls", "pdf" ]
				}
			]
		}
	} );
} );

