// Redirect detail page when clicked popular song card
function clickHandler(id) {
    window.location.href = '../detail-page.html?id='+id;
}

fetch('../demo-data/response.json')
    .then((response) => response.json())
    .then((json) => {

        const sorted_isdb_rate = Object.values(json.isdb_rate).sort().reverse()
        var key_list = Object.keys(json.isdb_rate)
        var sorted_id = []

        sorted_isdb_rate.forEach(
            (rate) => {
                const id = key_list.find(key => json.isdb_rate[key] === rate)
                const index = key_list.indexOf(id);
                if (index > -1) { 
                    key_list.splice(index, 1);
                  }
                sorted_id.push(id)
            }
        )

        let list = document.getElementById("top-song-list");

        var i = 0

        sorted_id.forEach((id) => {

            i = i + 1

            let li = document.createElement("li");

            li.className = "top-list-li";

            li.innerHTML =`
            <div class="top-list-item" id="`+id+`" onclick="clickHandler(this.id)">
                <div class="top-list-item-container">
                    <img class="top-list-item-img" src="`+json.img_url[id]+`">
                    <div class="side-li-info-container">
                        <p class="top-list-item-header" >`+i+`. `+json.name[id]+`<br>
                            <span style="font-size: 15px; color:gray;">&nbsp;&nbsp;&nbsp;-`+json.artist[id]+`</span></p>
                        <p class="top-list-item-rate-info">
                            <i class="material-icons side-li-star-icon">star</i>`+json.isdb_rate[id]+`</p> 
                    </div>
                </div>
            </div>
            `
            list.appendChild(li);
        })
        
    });