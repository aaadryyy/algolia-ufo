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
  searchFunction: function(helper) {
    if (helper.state.query === '') {
      return;
    }

    helper.search();
  }
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
      item: 
      `<div class="hit">
            <ul class="hit-name">
              <li>
                  <span>
                  <strong>DATE TIME:</strong> {{#helpers.highlight}}{ "attribute": "datetime" }{{/helpers.highlight}}
              </span>
              </li>
              <li >
                  <strong>COMMENT:</strong> <span class='comment'>"{{#helpers.highlight}}{ "attribute": "comments"}{{/helpers.highlight}}"</span>
              </li>
              <li>
                  <strong >SHAPE: </strong>{{#helpers.highlight}}{ "attribute": "shape" }{{/helpers.highlight}}
              </li>
              <li>
                  <strong>DURATION: </strong>{{#helpers.highlight}}{ "attribute": "duration (hours/min)" }{{/helpers.highlight}}
              </li>
              <li>
                <strong>CITY: </strong> {{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}}
                | <strong>STATE: </strong> {{#helpers.highlight}}{ "attribute": "state" }{{/helpers.highlight}}
                | <strong>COUNTRY: </strong>{{#helpers.highlight}}{ "attribute": "country" }{{/helpers.highlight}}
                | <strong>LAT: </strong>{{#helpers.highlight}}{ "attribute": "latitude" }{{/helpers.highlight}}
                | <strong>LNG: </strong>{{#helpers.highlight}}{ "attribute": "latitude" }{{/helpers.highlight}}
              </li>
            </ul>
        </div>`,
      empty: `No data for <em>"{{query}}"</em>`,
    },
  })
]);

search.start();

});
