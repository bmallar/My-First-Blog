// grabbed this dark/light theme from inst. activity 3 in third party api's
const themeButtonEl = $('#theme-btn');

let isDark = true;

themeButtonEl.on('click', function () {
     if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });