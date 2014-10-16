// Look for the payment history and new payment selects.
// If there is only one option aside from the 'Select ...'
// msg, then set the selected item to the only account.
var accSelects = [ $('#DAC.SHBInput'), $('#ACC.SHBInput') ];
accSelects.forEach(function(s) { 
    if(s.length && s.children().length == 2){
        console.log('Happy Bankening!');
        var opt1Val = $(s.children()[0]).text();
        if (opt1Val == 'Select from the list')
        {
            $(s.children()[1]).prop('selected', true);
        }
    }
})

/*
var selectSelects = [ $('#lang') ];
selectSelects.forEach(function(s) { 
    if(s.length) {
        var options = {
            placeholder_text_multiple : "Select an account",
            disable_search_threshold : 10,
            search_contains : true
        }
        s.chosen();
    }
})
*/

