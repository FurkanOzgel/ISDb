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

let list = document.getElementById("side-list");

// Redirect detail page when clicked popular song card
function clickHandler(id) {
    window.location.href = '../detail-page.html?id='+id;
}


// Fetches data from response.json file and render them as li.
fetch('../demo-data/response.json')
    .then((response) => response.json())
    .then((json) => {
        let list = document.getElementById("side-list");
    
        for(i = 0; i < 31; i++) {
            if(json.is_popular[i]==1) {
                let li = document.createElement("li");
                li.innerText = json.name[i];
                li.id = "popular-list-item"
                li.innerHTML = `
                <div class="side-li-container" id="`+i+`" onclick="clickHandler(this.id)">
                    <div class="side-li-inner-container">
                        <img id="side-li-img" src="`+json.img_url[i]+`">
                        <div class="side-li-info-container">
                            <p class="side-li-name-info">`+json.name[i]+`<br>
                                <span style="font-size: 15px; color:gray;">&nbsp;&nbsp;&nbsp;-`+json.artist[i]+`</span></p>
                            <p class="side-li-rate-info">
                                <i id="side-li-star-icon" class="material-icons">star</i>`+json.isdb_rate[i]+`</p> 
                        </div>
                    </div>
                </div>`;
                
                list.appendChild(li);
            }
        }
    });

