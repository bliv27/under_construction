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

  //tooltips for external links
  tippy('#tt-h4', {
    content: `
      <span>Year</span>
      2022
      <span>Description</span>
      Design & Development of the worpress front and backend theme allowing for regular updates to the resource sections and extensive browse functionality. 
      <span>Tools/Languages</span>
      Adobe Illustrator / MySQL, PHP, JS, SCSS, HTML, TWIG/YAML`,
    allowHTML: true,
    theme:'david',
    maxWidth: 250,
    placement: 'left',
  });
  tippy('#tt-din', {
    content: `
      <span>Year</span>
      2020
      <span>Description</span>
      Design & Development of the front and backend theme including all visual resources. Built in Odoo 13, with emphasis on usability and activity tracking. 
      <span>Tools/Languages</span>
      Adobe Illustrator, Photoshop / PostgreSQL, JS, jQuery, SCSS, HTML, qWeb/XML`,
    allowHTML: true,
    theme:'david',
    maxWidth: 250,
    placement: 'right',
  });
  tippy('#tt-trav', {
    content: `
      <span>Year</span>
      2014
      <span>Description</span>
      Custom theme designed and built in Wordpress. 
      <span>Tools/Languages</span>
      Adobe Illustrator / MySQL, PHP, JS, CSS, HTML`,
    allowHTML: true,
    theme:'david',
    maxWidth: 250,
    placement: 'left',
  });
  tippy('#tt-uw', {
    content: `
      <span>Year</span>
      2010
      <span>Description</span>
      Custom theme designed and built in Magento. 
      <span>Tools/Languages</span>
      Adobe Illustrator, Photoshop / JS, CSS, HTML`,
    allowHTML: true,
    theme:'david',
    maxWidth: 250,
    placement: 'right',
  });

  //tooltips for copy to clipboard
  tippy('#phoneCopy', {
    content: 'Copy phone number',
    theme:'david',
  });
  tippy('#emailCopy', {
    content: 'Copy email address',
    theme:'david',
  });

}());

/* 
 * functions
 * ----------------------------------------------------------
 */

function gaLinkClicked(elm){
  console.log('link_trigger: '+elm.href)
  window.dataLayer.push({
    'event':'link_trigger', 
    'link':elm.href
  });
}

// on click copy the phone number or email 
function ClipboardCopy(type){
  if(type == 'phone'){
    navigator.clipboard.writeText('0423273004');
  }else if(type == 'email'){
    navigator.clipboard.writeText('hello@davidraffin.com.au');
  }
  //google analytics
  console.log('copied_trigger: '+type)
  window.dataLayer.push({
    'event':'copied_trigger', 
    'copied':type
  });
  const icon = document.getElementById("copied");
  icon.classList.add('success')
  setTimeout(function(){
    icon.classList.remove('success')
  }, 2000)


};

// on click of headshot image, scroll to contact
function ScrollToContact(elm){
  const element = document.getElementById("contact"); 
  element.scrollIntoView({ behavior: "smooth" });
}