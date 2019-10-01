var cancelButtonCallback = function() {
    console.info('func cancel')
};
var defaultButtonCallback = function() {
    console.info('func saved')
};

var buttons = [ {"Save" : defaultButtonCallback} ,
    {"Cancel" : cancelButtonCallback} ]



var defaultButton = buttons[0];
var cancelButton = buttons[1];

var defaultText = Object.getOwnPropertyNames(defaultButton)[0];
var cancelText = ( cancelButton === undefined ? '' : Object.getOwnPropertyNames(cancelButton)[0] )

console.info(defaultText);
console.info(cancelText);

// call back
var defaultCallback;
var cancelCallback;

for( var e in defaultButton ) {
    defaultCallback = defaultButton[e];
    break;
}

for( var e in cancelButton ) {
    cancelCallback = cancelButton[e];
    break;
}

defaultCallback();
if( cancelCallback !== undefined )
    cancelCallback();


