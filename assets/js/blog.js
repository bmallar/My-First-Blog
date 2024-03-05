// grabbed this dark/light theme from inst. activity 3 in third party api's
const themeButtonEl = $('#theme-btn');
const blogForm = document.getElementById('blog-form');
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



  blogForm.addEventListener('submit', function(event){
    event.preventDefault();
   const postArray = JSON.parse(localStorage.getItem('postlist'))|| []
   
    const blogUsername = document.getElementById('username').value.trim();
    const blogTitle = document.getElementById('title').value.trim();
    const blogContent = document.getElementById('content').value.trim();

  const blogObject = {
    username: blogUsername,
    title: blogTitle,
    content: blogContent
 }
 
 postArray.push(blogObject)
 localStorage.setItem('postlist', JSON.stringify(postArray))
 console.log(blogObject)
})