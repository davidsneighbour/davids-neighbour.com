function loadTagManager(){
  var html = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-4LPZ');</script>";
  $('head').append(html);

  var html2 = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-4LPZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
  $('body').append(html2);

}
jQuery(document).ready(function ($) {

    'use strict';

    // starting up tagmanager
    window.dataLayer = window.dataLayer || [];
    setTimeout("loadTagManager()", 3000);

});
