(function () {
  // undoing launch SPA
  if (location.pathname=='/') {
    switch (location.hash) {
      case '#about':
      case '#members':
      case '#join':
      case '#faq':
      case '#thanks':
        location = '/' + location.hash.substr(1);
      default:
        location.hash = '#';
    }
  }
})();
