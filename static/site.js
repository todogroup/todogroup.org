window.addEventListener('load', function () {

  var header = document.getElementById('header'),
      article = document.getElementById('article'),
      sections = article.getElementsByTagName('section'),
      sectionsLength = sections.length,
      footer = document.getElementById('footer');

  var wasFlexing;
  var isFlexing = function(changed) {
    var flexing = window.matchMedia(
      'only screen and (min-width: 500px) and (min-height: 600px)'
    ).matches;
    if (flexing != wasFlexing) {
      wasFlexing = flexing;
      changed && changed(flexing);
    }
    return flexing;
  }

  var articleHeight = article.clientHeight;
  var resizeSections = function(e) {
    var flexing = isFlexing(focusSection);
    if (article.clientHeight == articleHeight) {
      return;
    }
    articleHeight = article.clientHeight;
    for (var s = 0; s < sectionsLength; s++) {
      if (flexing) {
        sections[s].style.minHeight = articleHeight + 'px';
      } else {
        sections[s].style.minHeight = 'default';
      }
    }
  };

  var focusSection = function (flexing) {
    if (flexing === undefined) {
      flexing = isFlexing()
    };
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
