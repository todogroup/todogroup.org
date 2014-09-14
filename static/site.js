window.addEventListener('load', function () {

  var header = document.getElementById('header'),
      article = document.getElementById('article'),
      sections = article.getElementsByTagName('section'),
      sectionsLength = sections.length,
      footer = document.getElementById('footer');

  var isFlexing = function() {
    return window.matchMedia(
      'only screen and (min-width: 500px) and (min-height: 600px)'
    ).matches;
  }

  var articleHeight = article.clientHeight;
  var resizeSections = function(e) {
    if (article.clientHeight == articleHeight) {
      return;
    }
    var flexing = isFlexing();
    articleHeight = article.clientHeight;
    for (var s = 0; s < sectionsLength; s++) {
      if (flexing) {
        sections[s].style.minHeight = articleHeight + 'px';
      } else {
        sections[s].style.minHeight = 'default';
      }
    }
  };

  var focusSection = function () {
    var flexing = isFlexing();
    var hash = (location.hash || '#about').substr(1);
    for (var s = 0; s < sectionsLength; s++) {
      sections[s].style.display =
        (!flexing || sections[s].id == hash)
        ? 'block' : 'none';
    }
  };

  resizeSections();
  window.addEventListener('resize', resizeSections);
  focusSection();
  window.addEventListener('hashchange', focusSection);

});
