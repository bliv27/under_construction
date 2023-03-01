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

  //Setup typewriter function when the page is loaded
  var app = document.getElementById('type_text');
  
  var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  cursor:'',
  });

  typewriter
  .typeString('Web Developer | Designer | Producer')
  .start();


  //tooltips for 
  tippy('#tt-h4', {
    content: '2022: Custom front/backend theme built in Wordpress using gantry5 framework <em>MySQL, PHP, JS, SCSS, HTML, TWIG/YAML</em>',
    allowHTML: true,
  });
  tippy('#tt-din', {
    content: '2020: Custom front/backend built in Odoo14 <em>PostgreSQL, JS, SCSS, HTML, qWeb/XML</em>',
    allowHTML: true,
  });
  tippy('#tt-trav', {
    content: '2014: Custom theme built in Wordpress<em>MySQL, PHP, JS, CSS, HTML</em>',
    allowHTML: true,
  });
  tippy('#tt-uw', {
    content: '2010: Custom theme built in Magento <em>JS, CSS, HTML</em>',
    allowHTML: true,
  });
  tippy('#phoneCopy', {
    content: 'Copy phone number',
  });
  tippy('#emailCopy', {
    content: 'Copy email address',
  });

}());

/* 
 * functions
 * ----------------------------------------------------------
 */

// on click copy the phone number or email 
function ClipboardCopy(type){
  if(type == 'phone'){
    navigator.clipboard.writeText('0423273004');
  }else if(type == 'email'){
    navigator.clipboard.writeText('david.raffin01@gmail.com');
  }
  const icon = document.getElementById(type+"Copy");
  
};

// on click of headshot image, scroll to contact
function ScrollToContact(elm){
  const element = document.getElementById("contact"); 
  element.scrollIntoView({ behavior: "smooth" });
}