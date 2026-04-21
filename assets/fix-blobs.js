document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    try {
      var s = img.getAttribute('src') || img.src || '';
      if (typeof s === 'string' && s.indexOf('blob:https://www.canva.com/') === 0) {
        var id = s.split('/').pop();
        var filename = 'assets/images/canva-' + id + '.svg';
        img.setAttribute('src', filename);
      }
    } catch(e) {
      /* ignore */
    }
  });
});