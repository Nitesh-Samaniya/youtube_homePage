let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}


const api_key =  "AIzaSyBq_8wFj7tcnRRpHvig74WLzLrYzvfU8Vo";
// const url =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyBq_8wFj7tcnRRpHvig74WLzLrYzvfU8Vo`
let search = document.getElementById("search");
search.addEventListener("click",async function(){
    try{
        let query = document.getElementById("query").value;

        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

        let res = await fetch(url);

        let data = await res.json();

        append(data.items)

        // console.log(data);
    }
    catch(err){
        console.log(err);
    }
})


let append = (data) =>{
    let container = document.getElementById("results");
    container.innerHTML = null;
    data.forEach(( {id:{videoId} , snippet: {title} }) => {
        // console.log(videoId);
        // console.log(title);

        let div = document.createElement("div");

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";
        
        let h3 = document.createElement("h3");
        h3.innerText = title;

        div.append(iframe,h3);

        container.append(div);

    })
}

/*
    <iframe width="560" height="315"
    src="https://www.youtube.com/embed/Z8aItylBj64"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>

    </iframe>
    */