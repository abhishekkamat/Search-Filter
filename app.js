import * as JsSearch from './node_modules/js-search/dist/esm/js-search.js';

var theGreatGatsby = {
  isbn: '9781597226769',
  title: 'The Great Gatsby',
  author: {
    name: 'F. Scott Fitzgerald'
  },
  tags: ['book', 'inspirational']
};
var theDaVinciCode = {
  isbn: '0307474275',
  title: 'The DaVinci Code',
  author: {
    name: 'Dan Brown'
  },
  tags: ['book', 'mystery']
};
var angelsAndDemons = {
  isbn: '074349346X',
  title: 'Angels & Demons',
  author: {
    name: 'Dan Brown',
  },
  tags: ['book', 'mystery']
};
var search = new JsSearch.Search('isbn');
search.addIndex('title');
search.addIndex(['author', 'name']);
search.addIndex('tags')
search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

document.addEventListener("keypress", function(e){
  if(e.key==='Enter'){
    let q=document.getElementById("query").value;
    let result=search.search(q);
    console.log(result);
  }
})
//console.log(search.search(a));    // [theGreatGatsby, theDaVinciCode]
//console.log(search.search(b));  // [theGreatGatsby]
//console.log(search.search('dan'));    // [angelsAndDemons, theDaVinciCode]
//console.log(search.search('mystery'));
