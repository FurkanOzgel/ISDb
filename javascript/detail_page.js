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

function displayRadioValue() {

    var ele = document.getElementsByName('rate');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            var btn = document.getElementById("rate-btn")
            btn.innerHTML = ele[i].value
        }
        
    }
}



fetch('../demo-data/response.json')
    .then((response) => response.json())
    .then((json) => {

        document.title = json.name[id];

        const div = document.createElement("div")
        div.className = "big-song-card"
        div.id = "song-container"
        div.innerHTML = `
        <div class="big-song-card-video-container" onmouseover="myOverFunction()" onmouseout="myOutFunction()">
            <iframe class="big-song-card-iframe" src="https://www.youtube.com/embed/`+json.youtube_url[id].split("=")[1]+`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div class="big-song-card-video-overview" >
                <div class="overview-black-div">
                    <p class="overview-header" style="line-height:0.7em">`+json.name[id]+`<br>&nbsp;&nbsp;&nbsp; <span style="color:gray;font-size:20px">-`+json.artist[id]+`</span> </p>
                    <p class="overview-score"><i class="material-icons overview-score-icon" style="font-size: 32px;">star</i>`+json.isdb_rate[id]+`</p>
                </div>
                <img class="overview-artist-img"
                    src="`+json.img_url[id]+`">

            </div>
        </div>
        `
        document.getElementById("video").appendChild(div)


        var clientHeight = document.getElementById('song-container').clientHeight;
        var info_container = document.getElementById("info-container")
        info_container.style.height = (clientHeight - 3).toString() + "px";
        
        info_container.innerHTML = `
           <img id="rate-card-img" src="`+json.img_url[id]+`">
            <div>
                <p id="name-info">`+json.name[id]+`<br>
                    <span style="font-size: 15px; color:gray;">&nbsp;&nbsp;&nbsp;-`+json.artist[id]+`</span></p> 
                <div class="rate" id="star-container">
        
                    <input type="radio" id="star10" name="rate" value="10" />
                    <label for="star10" title="text">10 stars</label>
                    <input type="radio" id="star9" name="rate" value="9" />
                    <label for="star9" title="text">9 stars</label>
                    <input type="radio" id="star8" name="rate" value="8" />
                    <label for="star8" title="text">8 stars</label>
                    <input type="radio" id="star7" name="rate" value="7" />
                    <label for="star7" title="text">7 stars</label>
                    <input type="radio" id="star6" name="rate" value="6" />
                    <label for="star6" title="text">6 stars</label>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                    
                </div>
                <div style="display: flex;justify-content: center; ">
                    <button id="rate-btn" type="button" onclick="displayRadioValue()">
                        Rate
                    </button>
                </div>
            </div>
        `

        addEventListener("resize", (event) => {
            var clientHeight = document.getElementById('song-container').clientHeight;
            document.getElementById("info-container").style.height = (clientHeight - 3).toString() + "px";
        });
    });





