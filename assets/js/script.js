import CookieJar from '../../../../../../src/js/modules/cookie-jar';
import Alert from '../../../../../../src/js/modules/alert';
import Glide from '../../../../../../node_modules/@glidejs/glide';

'use strict';

var cookies = new CookieJar();
if (document.getElementById('challenge')) {
  var challenge = new Alert('#challenge', cookies);
}

if (document.getElementById('cheers')) {
  var cheers = new Alert('#cheers', cookies);
}

if (document.querySelector('.glide')) {
  new Glide('.glide').mount();
}
