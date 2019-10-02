
var a = function() { console.info('rename');};
var b = function() { console.info('move');};
var c = function() { console.info('delete');};

var actions = [ 
    { "name":"Rename", "callback":a}, 
    { "name":"Move", "callback":b},
    { "name":"Delete", "callback":c} 
]

var callbacks = actions.map(function(item) {
    return item.callback;
})

console.info( typeof funcs );
console.info( typeof funcs[0] );
funcs[0]();
funcs[1]();
funcs[2]();


