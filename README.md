#my-blog

BLOG HTML 

First off I added all my links in the head. first was one for bootstrap which allows me to you use bootstrap, then the jass.css was for bootstarp to work off of. Then my css style sheets that I used for this page.

Then the header in blog HTML is for my light/dark mode button and my back button that has my indexHTML linked to take me back to the other page.

Next is a id labled blog-list for my Javascript

After that I have jquery linked so that it works.

Then my javascript logic link so that works

Next is my footer linked with my portfolio

Lastly is my javascript blog link so that works.

All these links fall in the order they work in.

INDEX HTML

Fisrt is same thing with my head links as the BLOG HTML

I have a id labled blog-from for javascript

After that is my form layout that I got from bootstrap, button included

then my jquery link and javascript blog link

CSS

style.css contains a blogcard class that is used for all the form submissions to look nice and organized

The form.css and blog.css could use more styling

JAvASCRIPT FORM

I used this form file for my back button 

I added a event listener 'click' to a function (event) to take me back one page, which is why navigate -1 is there.

event.stopPropagation is so it doesnt open a new browser everytime we try and go back

JAVASCRIPT BLOG

First I have my light and dark button theme switcher this is the Jquery i used.

have let dark = true so that everytime we click and if its dark we make it light then else is the opposite to switch it back and forth

Then i have a blogform submit function store to the localstorage

fisrt we set up a submit function with prevent default so that the link gets sent without followling the URL

Then we use JSON parse local storage to get the item post list, which is an array and we have || [] to send an empty array if they hit submit with nothing in it.

Next we get the array from the local storage then we added trim to erase any unessasary spaces.

Then we push our newly made object and set the item stringifying it to make it into a string so that our local storage can organize it. without this process it come out as a object.

Then we have that last line to take us to the page that we are the form to blog.html

JAVA LOGIC

This logic file is for posting our array to blog page

First we get our array from the local storage and log it 

Next we use a for loop to continuesly enter new submissions 

I also made my blog card in here beacuse I needed somewhere to put these submissions

Then we set up the consts with creating the element h4 so they display like that, we make the consts equal each part of the arrays we want then we append all 3 to the page.

Lastly we run the function



![My Project](<assets/Screenshot (11).png>)


