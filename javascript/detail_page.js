var styleElem = document.head.appendChild(document.createElement("style"));

// Hides overview when mouse is on iframe
function myOverFunction() { 
    document.getElementsByClassName('big-song-card-video-overview')[0].style.visibility = 'hidden';
    styleElem.innerHTML = ".big-song-card-video-container:before {visibility: hidden;}";

}

// Shows overview when mouse is not on iframe
function myOutFunction() {
    document.getElementsByClassName('big-song-card-video-overview')[0].style.visibility = 'visible';
    styleElem.innerHTML = ".big-song-card-video-container:before {visibility: visible;}";
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

fetch('../demo-data/response.json')
    .then((response) => response.json())
    .then((json) => {

        const div = document.createElement("div")
        div.className = "big-song-card"
        div.innerHTML = `
        <div class="big-song-card-video-container" onmouseover="myOverFunction()" onmouseout="myOutFunction()">
            <iframe class="big-song-card-iframe" src="https://www.youtube.com/embed/`+json.youtube_url[id].split("=")[1]+`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div class="big-song-card-video-overview" >
                <div class="overview-black-div">
                    <p class="overview-header">`+json.name[id]+`<br>&nbsp;&nbsp;&nbsp; <span style="color:gray;font-size:20px">-`+json.artist[id]+`</span> </p>
                    <p class="overview-score"><i class="material-icons overview-score-icon" style="font-size: 32px;">star</i>`+json.isdb_rate[id]+`</p>   
                </div>
                <img class="overview-artist-img"
                    src="`+json.img_url[id]+`">
                
            </div>
        </div>
        `
        document.body.appendChild(div)
    });

// const header = document.createElement("h1");
// header.innerText = id
// document.body.appendChild(header);

