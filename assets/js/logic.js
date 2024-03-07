const postContainer = document.getElementById('blog-list')
const blogArray = JSON.parse(localStorage.getItem('postlist')) || []
console.log(blogArray)
function displayPosts() {
    for (let i = 0; i < blogArray.length; i++) {
        const blogCard = document.createElement("div")
        blogCard.setAttribute("class", "blogCard")
    
        const usernameEl = document.createElement("h4")
        usernameEl.textContent = blogArray[i].username

        const titelEl = document.createElement('h4')
        titelEl.textContent = blogArray[i].title

        const contentEl = document.createElement('h4')
        contentEl.textContent = blogArray[i].content

        blogCard.append(usernameEl, titelEl, contentEl)
        postContainer.append(blogCard)

    }
}

displayPosts()