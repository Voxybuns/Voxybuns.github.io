---
---

// Building Lunr

var index = lunr(function () {
  this.field("title", { boost: 10})
  this.field("content")
  this.ref("id")

  {% assign count = 0 %}{% for page in site.pages %}
  {% if page.layout == 'nodopedia/entry' %} // Only fetch entry pages from Nodopedia
  this.add({
    title: {{ page.title | jsonify }},
    content: {{ page.content | strip_html | jsonify }},
    id: {{ count }}
  })
  {% assign count = count | plus: 1 %}
  {% endif %}
  {% endfor %}
});


// Building reference data to search in

var store = [
  {% for page in site.pages %}
  {% if page.layout == 'nodopedia/entry' %} // Only fetch entry pages from Nodopedia
  {
    "title": {{ page.title | jsonify }},
    "link": {{ page.url | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endif %}
  {% endfor %}
]

// builds search
$(document).ready(function() {
  $('input#search-box').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<a href="'+store[ref].link+'" class="result">'+store[ref].title+'</a>';
      resultdiv.append(searchitem);
    }
  });
});