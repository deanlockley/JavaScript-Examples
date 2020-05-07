// declare all our movies in an array of objects
var newAlbum = JSON.parse(albums);

// set the onload property of window to a function
// this function will be called when the webpage as finished loading
window.onload = function() {
  // get a reference to the movies table in the DOM
  var table = document.getElementById("hitsTable");

  // for each object in the movies array, add a row to the table
  for(var i = 0; i < newAlbum.length; i++) {

    // get a reference to the current movie
    var hit = newAlbum[i];

    // create a new row
    var tr = document.createElement("tr");

    // for each property of the object, add a cell to the table row
    var addCell = function(text) {
      var td = document.createElement("td");
      var txt = document.createTextNode(text);
      td.appendChild(txt);
      tr.appendChild(td);
    };

    // add the newly create row to the table
    table.appendChild(tr)
  }

  var selectYear = document.getElementById("selectYear");

  for(var i = 0; i < newAlbum.length; i++) {
  var years = newAlbum[i].year;
  var a = document.createElement("OPTION");
  a.setAttribute("yearValue", "year");
  var b=document.createTextNode(years);
  a.appendChild(b);
  selectYear.appendChild(a);

  }
}

function filter() {
  var table = document.getElementById("hitsTable");
    var sel = document.getElementById("selectCountry");
        var opt;
        for (var i = 0; i < sel.options.length; i++) {
            opt = sel.options[i];
            if (opt.selected == true ) {
                break;
            }
          }

              for (var index = 0; index < newAlbum.length; index++) {
                if (opt.innerHTML == newAlbum[index].nationality) {

                  var hit = newAlbum[index];
                  // create a new row
                  var tr = document.createElement("tr");

                  // for each property of the object, add a cell to the table row
                  var addCell = function(text) {
                    var td = document.createElement("td");
                    var txt = document.createTextNode(text);
                    td.appendChild(txt);
                    tr.appendChild(td);
                  };
                  addCell(hit.year);
                  addCell(hit.artist);
                  addCell(hit.nationality);
                  addCell(hit.album);

                  // add the newly create row to the table
                  table.appendChild(tr)

            }
}
}


function cannotUse() {
  var yearResult = newAlbum.map(function(newAlbum) {return newAlbum.year});

  var nationalityResult = newAlbum.map(function(newAlbum) {return newAlbum.nationality});

  var allList = {return :newAlbum};

    console.log(cannotUse);
}

