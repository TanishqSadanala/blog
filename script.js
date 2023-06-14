const scrollList = document.querySelector('.scrolllist');
const blogPostText = document.querySelectorAll('.blogpost-text');
scrollList.addEventListener('click', handleClick);
function handleClick(e){
    if (e.target.matches('button')){
        blogPostText.forEach(blogpost => blogpost.classList.remove('show'));
        const { id } = e.target.dataset;
        const selector = `.blogpost-text[id="${id}"]`;
        document.querySelector(selector).classList.add('show');
    }
}

function show_hide() {
    var click = document.getElementById("dropdown-menu");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}