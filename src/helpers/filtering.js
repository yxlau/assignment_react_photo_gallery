export function filterImages(filter, images) {
  var filtered = [];
  for (var i = 0; i < images.length; i++) {
    if (images[i].filter === filter) {
      filtered.push(images[i]);
    }
  }
  return filtered.length < 1 ? images : filtered;
}
