/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var hash = '4d186321c1a7f0f354b297e8914ab240';

var creq = require('../index').request;

var hashsite = new creq({
    url: 'http://xdecrypt.com/ajax/liste.php',
    params: {
        hash: 'x' + hash + 'x'
    }
});
   
hashsite.getParsedContent( new RegExp('\\(([\\w]{3,6})\\)=(.*) ";') , function (err, data) {
     
    hashsite.getParsedContent( new RegExp('\\(([\\w]{3,6})\\)=(.*) ";') , function (err, data) {

        console.log(err);
        console.log(data);

    });
 
});

