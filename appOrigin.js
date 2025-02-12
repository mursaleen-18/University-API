let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  // console.log("button was clicked");
  console.log(country);
  getColleges(country);

  let colArr = await getColleges(country);
//   console.log(colArr);
  show(colArr);
});


function show(colArr){

    //now trying to add website links also
    let link = document.querySelector("#link");
    link.setAttribute("href","");

    let list = document.querySelector("#list");
    list.innerText = "";
    // for(col of colArr){
    //     console.log(col.name);
    //     console.log("link==>",col.domains);

    //     let li = document.createElement("li");
    //     // li.innerText = col.name ;
    //     li.innerHTML = `${col.name} website link is <a href="https://${col.domains[0]}" target="_blank">Click Here</a>`;
    //     list.appendChild(li);

    //     //now trying to append a element with uiversity link
    //     // list.setAttribute("href", col.domains);
    //     // list.innerText = "click here";
        
    // }

    // Assuming colArr is an array of objects with 'name' and 'domains' properties
let table = document.createElement("table");

// Create the header row with University Name and Website Link
let headerRow = document.createElement("tr");

let nameHeader = document.createElement("th");
nameHeader.innerText = "University Name";
headerRow.appendChild(nameHeader);

let linkHeader = document.createElement("th");
linkHeader.innerText = "Website Link";
headerRow.appendChild(linkHeader);

table.appendChild(headerRow); // Append the header row to the table

// Loop through the colArr array to create table rows
for (let col of colArr) {
    let row = document.createElement("tr");

    // University Name column
    let nameCell = document.createElement("td");
    nameCell.innerText = col.name;
    row.appendChild(nameCell);

    // Website Link column
    let linkCell = document.createElement("td");

    // If col.domains is an array, use the first element. Otherwise, use it directly.
    let domain = Array.isArray(col.domains) ? col.domains[0] : col.domains;
    
    linkCell.innerHTML = `<a href="https://${domain}" target="_blank">Click Here</a>`;
    row.appendChild(linkCell);

    // Append the row to the table
    table.appendChild(row);
}

// Append the table to an existing element in the DOM (assuming 'list' is a container)
list.appendChild(table);

}

// let country = "nepal";

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log("error: ", e);
    return [];
  }
}
// getColleges();
