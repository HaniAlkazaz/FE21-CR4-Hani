let data = JSON.parse(movies);

function Add() {
    document.getElementById("movie").innerHTML = "";
    for (let val of data) {
        document.getElementById("movie").innerHTML += `<div>
    <img src="${val.Image}" class="rounded mx-auto d-block h-50 w-50 mb-50" alt="...">
    <div class="card-body">
<h3 class="text-light text-center mt-3 fs-2">${val.name}</h3>
<p class="text-light Text Alignment ">${val.description}</p> 
<a  class="btn btn-primary like">like<samp class="movie"> ${val.like}</samp></a>
</div>

    </div>`
    }
    addLikes();
}


function addLikes() {
    let btns = document.getElementsByClassName("like");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            data[i].like++;

            document.getElementsByClassName("movie")[i].innerHTML = data[i].like;


        })
    }
}
Add(data);

function sort() {
    data.sort((a, b) => {
        return b.like - a.like;
    });
}
document.getElementById("sort").addEventListener("click", sort);
document.getElementById("sort").addEventListener("click", function() {
    sort();
    Add(data);
})