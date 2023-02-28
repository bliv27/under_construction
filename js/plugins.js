// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }

  var app = document.getElementById('type_text');

  var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  });

  typewriter
  .pauseFor(300)
  .deleteChars(10)
  .typeString('Designer')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('Producer')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('Googler')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('Enthusiast')
  .start();
}());

// Place any jQuery/helper plugins in here.
function ClipboardCopy(type){
  if(type == 'phone'){
    navigator.clipboard.writeText('0423273004');
  }else if(type == 'email'){
    navigator.clipboard.writeText('david.raffin01@gmail.com');
  }
};