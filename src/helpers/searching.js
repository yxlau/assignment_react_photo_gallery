export function performSearch(images, term) {
  // partial username search, exact match for tags
  var re = new RegExp(term + "+", "g");
  var results = images.filter(function(image) {
    if (image.user.username.match(re) || image.tags.indexOf(term) > -1) {
      return true;
    }
  });
  return results;
}
