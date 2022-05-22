function changeAppearance() {
    element = document.querySelector('#app-title');
    element.classList.add('title');
    /* adding the 'title' class allows us to more easily select the individual element that we want to change 
    this helps the code to not get too cluttered */
    element.innerText = "This is a new heading";
    //element.innerText = "This is a new heading"; this creates a new 'appearance' when the text is clicked on & changes the words displayed
    console.log(Yesenia)
    console.log(spaghetti)
}