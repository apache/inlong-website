function insertContributors() {
  readTextFile("../js/contributors.json", function (text) {
    let data = JSON.parse(text);
    let eles = document.getElementById("conID");
    for (let i = 0; i < data.length; i++) {
      let lid = document.createElement("li");
      lid.className = "mb-2";
      lid.innerHTML = "<a href='"+data[i].html_url+"' target='_blank'>" +
          "<img src='"+data[i].avatar_url+"'/>" + "<span>"+data[i].login+"</span>" +
          "</a>";
      eles.appendChild(lid);
    }
  });
}

function insertDocContributors() {
  readTextFile("../js/doc-contributors.json", function (text) {
    let data = JSON.parse(text);
    let eles = document.getElementById("docID");
    for (let i = 0; i < data.length; i++) {
      let lid = document.createElement("li");
      lid.className = "mb-2";
      lid.innerHTML = "<a href='"+data[i].html_url+"' target='_blank'>" +
          "<img src='"+data[i].avatar_url+"'/>" + "<span>"+data[i].login+"</span>" +
          "</a>";
      eles.appendChild(lid);
    }
  });
}

function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

insertContributors();
insertDocContributors();
