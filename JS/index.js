const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//// APIURL fetch most popular movie to show, when no movie is searched by user

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 /// SEARCHAPI fetch searched movie

const movieBox=document.querySelector("#movie-box");

 const getMovies=async(api)=>{
    const response= await fetch(api);
    const data= await response.json();
    // console.log(data.results);
    showMovies(data.results);
 }

  ///init call
  getMovies(APIURL);

  const showMovies=(data)=>{
    movieBox.innerHTML="";
    data.forEach(
        (item)=>{
            const box=document.createElement("div");
            box.classList.add("box");
            box.innerHTML=`
                <img src="${IMGPATH+item.poster_path}" alt="hey">
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>Release Date: ${item.release_date}</h3>
                    <h2>overview</h2>
                    <p>${item.overview}</p>
                </div>
            `
            movieBox.appendChild(box);
        }
    )
    
  }


  document.querySelector("#search").addEventListener(
    "keyup", /* mtlb user jaise jaise likh raha waise waise eventListener call hoga
    // console.log(event.target.value);*/
    function(event){
        if(event.target.value!=""){
            getMovies(SEARCHAPI+event.target.value);
        }
        else{
            getMovies(APIURL);
        }
    }
  )