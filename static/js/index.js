// Grab a reference to the dropdown select element
//   let selector = d3.select("#selDataset");


d3.json("/births").then(data => {
    // console.log(data)
    
    states = []
    years = []
    
    Object.entries(data).forEach(([key, value]) => {
        if (key === "state") {
            states.push(value);
          }
          else {(key === "year")
            years.push(value);
          }
    });
 
    console.log(years)
   console.log(years[0])
//filter dataset by years
   let birthyear = years
   let year2016 = birthyear.filter((item) => item.year == 2016);
        console.log(year2016);
    let year2017 = birthyear.filter((item) => item.year == 2017);
        console.log(year2017);
    let year2018 = birthyear.filter((item) => item.year == 2018);
        console.log(year2018);
    let year2019 = birthyear.filter((item) => item.year == 2019);
        console.log(year2019);
        

    ;
})

// //  Use D3 to create an event handler
// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.selectAll("#selectOption").node();
//     // Assign the dropdown menu item ID to a variable
//     var dropdownMenuID = dropdownMenu.id;
//     // Assign the dropdown menu option to a variable
//     var selectedOption = dropdownMenu.value;

//     console.log(dropdownMenuID);
//     console.log(selectedOption);

