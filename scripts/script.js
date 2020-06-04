// import { annotate } from 'rough-notation';

const searchOnlyKey = "b495880c7da60f5283236d75a8924d0a" // bad practice but funny project

document.addEventListener("DOMContentLoaded", function() {
//pushing data + config needed to be set manually in the dashboard

const searchClient = algoliasearch(
  'Y47G5C55U7',
  searchOnlyKey
);

const search = instantsearch({
  indexName: 'test_UFO',
  searchClient,
  routing: true,
});

search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search data',
    showReset:false,
    showSubmit:false,
    cssClasses: {
      root:"custom-search-box-root",
      input:'custom-search-box-input',
    },
  })
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: `No data for <em>"{{query}}"</em>`,
    },
  })
]);

search.start();

const e = document.querySelector('#office');
console.log("annotate event is",e)
const annotation = annotate(e, { type: 'underline' });
annotation.show();

});
