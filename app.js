let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let colArr = await getColleges(country);
  show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    colArr.forEach(col => {
        let card = document.createElement("div");
        card.className = "card";

        let name = document.createElement("h4");
        name.innerText = col.name;
        card.appendChild(name);

        let link = document.createElement("a");
        let domain = Array.isArray(col.domains) ? col.domains[0] : col.domains;
        link.href = `https://${domain}`;
        link.target = "_blank";
        link.innerText = "Visit Website";
        card.appendChild(link);

        list.appendChild(card);
    });
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("error: ", e);
    return [];
  }
}
