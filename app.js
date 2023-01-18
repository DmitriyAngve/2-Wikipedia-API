const url =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
let attemptCounter = false;
inputVal.value = "hello";
btn.textContent = "Load JSON data";
btn.addEventListener("click", (e) => {
  let searchTerm = inputVal.value || "JavaScript";
  let tempURL = url + searchTerm;
  console.log(tempURL);
  fetch(tempURL)
    .then((rep) => rep.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = "<div>Results for " + searchTerm + "</div>";
      output.innerHTML = `Total results: ${data.query.searchinfo}<br>`;
      maker(data.query.search);
    });
});

function maker(data) {
  console.log(data);

  data.forEach((el) => {
    console.log(el);
    const div = document.createElement("div");
    div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?curid=${el.pageid}" target="_blank">${el.title}</a></h3>`;
    div.innerHTML += `<div>Page ID ${el.pageid} | Size ${el.size} | WordCount ${el.wordcount} </div>`;
    div.classList.add("box");
    div.innerHTML += el.snippet;
    output.append(div);
  });
}

/*
    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript JSON</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
            .box{
                padding:10px;
                margin:auto;
                width:80%;
                border: 1px solid #ddd;
                border-radius: 25px;
            }
            .box > div{
                padding:10px;
                font-size: 1.2em;
            }
        </style>
    </head>
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="app2.js"></script>
    </body>
    </html>

    const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;';
    const btn = document.querySelector('.btn');
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    let attemptCounter = false;
    inputVal.value = 'hello';
    btn.textContent = 'Load JSON data';
    btn.addEventListener('click',(e)=>{
        let searchTerm = inputVal.value || 'JavaScript';
        let tempURL = url + searchTerm;
        console.log(tempURL);
        fetch(tempURL).then((rep)=>{ return rep.json()})
        .then((data)=>{
            console.log(data);
           output.innerHTML = '<div>Results for ' + searchTerm + '</div>';
           output.innerHTML += `Total Results : ${data.query.searchinfo.totalhits}<br>`;
           maker(data.query.search);
        })
    })
     
    function maker(data){
        console.log(data);
        
        data.forEach(el=> {
            console.log(el);
            const div = document.createElement('div');
            div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?curid=${el.pageid}" target="_blank">${el.title}</a></h3>`;
            div.innerHTML += `<div>Page ID ${el.pageid} | Size ${el.size} | WordCount ${el.wordcount} </div>`;
            div.classList.add('box');
            div.innerHTML += el.snippet;
            output.append(div);
        });
    }
    */
