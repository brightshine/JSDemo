var cancelButtonCallback = function() {
    console.info('cancel')
};
var defaultButtonCallback = function() {
    console.info('saved')
};

var buttons = { "Save" : defaultButtonCallback,
                 "Cancel" : cancelButtonCallback }

var keys = Object.getOwnPropertyNames(buttons);
var defaultButtonText = keys[0];
var cancelButtonText = keys[1];
//var defaultButtonAction = buttons[0];
//var cancelButtonAction = buttons[1];
console.info("keys");
console.info(defaultButtonText);
console.info(cancelButtonText);

console.info("\ntypes");
for(var i in buttons) {
    console.info(typeof(i));
    console.info(typeof(buttons[i]));
}

console.info(buttons[defaultButtonText]);
console.info(buttons[cancelButtonText]);

buttons[defaultButtonText]();

//console.info(typeof buttons[0]);
//console.info(typeof buttons[1]);


