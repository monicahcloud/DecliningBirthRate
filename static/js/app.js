// // Javascript for data.html
let tbody = d3.select("tbody");
tbody.html("");
buildTable(dataset)

function buildTable(dataset) {
  d3.json("/births").then(data => {
    tbody.html("");
    const dataset = data;
    const mapped_data = dataset.map(item => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML += `
         <tr>
         <td>${item.state}</td>
         <td>${item.year}</td>
         <td>${item.births}</td>
         </tr>
         `
    })
  })
}

function dataset(data) {
  d3.json("/births").then(data => {
    const dataset = data;
    console.log(dataset)
  })
}
 ;


function handleClick() {
  d3.json("/births").then(data => {
    const year = d3.select("#datetime").property("value");
    states = []
    years = []
    Object.entries(data).forEach(([key, value]) => {
      if (key === "state") {
        states.push(value);
      }
      else {
        (key === "year")
        years.push(value);
      }
    })
 
    //filter dataset by years
    let birthyear = years
    // let year2016 = birthyear.filter((item) => item.year == 2016);
    // console.log(year2016);
    // let year2017 = birthyear.filter((item) => item.year == 2017);
    // console.log(year2017);
    // let year2018 = birthyear.filter((item) => item.year == 2018);
    // console.log(year2018);
    // let year2019 = birthyear.filter((item) => item.year == 2019);
    // console.log(year2019);

    let filteredData = birthyear;
    if (year) {
      filteredData = filteredData.filter(row => row.year === year);
    }
    buildTable(filteredData);
  })
}
d3.selectAll("#filter-btn").on("click", handleClick);
 buildTable(dataset);

