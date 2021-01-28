// // Javascript for data.html
// let tbody = d3.select("tbody");

// d3.json("/births").then(data => {
//   const loc = window.location.pathname
//   if (loc === "/data")
//     console.log(data)
//   tbody.html("");
//   const dataset = data;
//   const mapped_data = dataset.map(item => {
//     const tbody = document.querySelector("tbody");
//     tbody.innerHTML += `
//       <tr>
//         <td>${item.state}</td>
//         <td>${item.year}</td>
//         <td>${item.race}</td>
//         <td>${item.births}</td>
//        </tr>
//       `})

//   d3.selectAll("#filter-btn").on("click", updateFilters);

//   function buildtable(data) {
//     // First, clear out any existing data
//     tbody.html("");
//     data.forEach((item) => {
//       console.log(item);
//       let row = tbody.append("tr");
//       let state = row.append("td");
//       let year = row.append("td");
//       let race = row.append("td");
//       let births = row.append("td");
//       state.text(item.state);
//       year.text(item.year);
//       race.text(item.race);
//       births.text(item.births);

      
//   function updateFilters() {
//     // prevent auto refresh 
//     d3.event.preventDefault();
//     // Save the element, value, and id of the filter that was changed
//     let filterNames = ["#state", "#year", "#race"];
//     let filters = {};
//     for (idFilters of filterNames) {
//       let changedElement = d3.select(idFilters);
//       let elementValue = changedElement.property("value");
//       let filterId = changedElement.attr("id");
//       // If a filter value was entered then add that filterId and value
//       // to the filters list. Otherwise, clear that filter from the filters object
//       if (elementValue) {
//         filters[filterId] = elementValue;
//       }
//       else {
//         delete filters[filterId];
//       }
//     }
//     // Call function to apply all filters and rebuild the table
//     filterTable(filters);
//   }




//   function filterTable(filterValues) {
//     // Set the filteredData to the tableData
//     let filteredData = dataSet;
//     // Loop through all of the filters and keep any data that matches the filter values
//     Object.entries(filterValues).forEach(([key, value]) => {
//       filteredData = filteredData.filter(row => row[key] === value);
//     });
//     // Finally, rebuild the table using the filtered Data
//     buildTable(filteredData);
//   }




//     });
// //   }

// //   buildtable(data);
// // //    //Select the button
// // let button = d3.select("#filter-btn");
// // //    // Select the form
// // var form = d3.select("#form");
// // //    // Create event handlers
// // button.on("click", runEnter);
// // form.on("submit", runEnter);
// // //    // Complete the event handler function for the form
// // function runEnter() {
// //   d3.event.preventDefault();
// //   // Select the input element and get the raw HTML node
// //   let state = d3.select("#state");
// //   // Get the value property of the input element
// //   let inputValue = state.property("value");
// //   //   console.log(inputValue)
// //   // Use the form input to filter the data by blood type
// //   let newData = tableData.filter((item) => item.datetime === inputValue);
// //   console.log(newData);

// //   tbody.html("");

// //   if (inputValue) {
// //     buildtable(newData);
// //   } else {
// //     buildtable(data);
// //   }
// }
// })

// // function buildCharts(sample) {
// // d3.json("/births").then((data) => {

// //     let row = data
// //     // console.log(row)
// //     list = {}
// //    row.forEach((item) =>
// //     // console.log(item)
// //         list.append = item  )
// //         console.log(list) 

// //         })

// // d3.json("/births").then((data) => {

// //     var counts = {};
// //     for (var i = 0; i < data[0].length; i++) {
// //         counts[data[0][i]] = 1 + (counts[data[0][i]] || 0);
// //     }
// //     console.log(counts)
// // })

//     //       let samples = data.samples;
//     //       let sample_id = samples.filter(item => item.id == sample);
//     //       let result = sample_id[0];

//     //       let otu_ids = result.otu_ids;
//     //       let otu_labels = result.otu_labels;
//     //       let sample_values = result.sample_values;
//     //       let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
