postback
========
Perform ASP.NET postbacks without a browser

```javascript
var postback = require('postback')

postback('http://www.roblox.com/user.aspx?id=261', function(err, $) {

  $('.groupEmblemThumbnail a').each(function() {
    var groupName = $(this).attr('title')
    console.log(groupName)
  })

  var button = $('#UserGroupsPane .next')
  if (!button.attr('disabled'))
    return button
})
```

We use [cheerio](https://github.com/MatthewMueller/cheerio) to parse the HTML, so read up on its documentation.

The callback is invoked every time the page loads. To indicate which button you want to simulate a click for, return that button. Make sure you have a base case to avoid infinite loops.