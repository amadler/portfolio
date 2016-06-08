var jsdom = require('jsdom');
describe('My Plugin', function(){
  var $;
  beforeEach(function(done){
    jsdom.env({
      html: 'div id="test"></div>',
      scripts: [
          'https://code.jquery.com/jquery-2.2.4.min.js',
          '../jqueryToTest.js'
      ],
      done: function(err, window) {
        if (err) console.log(err);
        $ = window.jQuery;
        done();
      }
    });

    it('Should add the class "addon" to the element', function(){
      testAddClass(html);
      expect( html.hasClass('addon') ).toBe(true);
    });
  });
