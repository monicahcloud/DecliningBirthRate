<<<<<<< HEAD
  // Dropdown select options
  
  let selector = d3.select("#selDataset");
  // Lest of sample names to populate
  
=======

  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
  d3.json("samples.json").then((data) => {
    let names = data.names;
    names.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
<<<<<<< HEAD
  
=======
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
    // Use the first sample from the list to build the initial plots
    let firstSample = names[0];
    
    buildCharts(firstSample);
    metadata(firstSample);
  });

function metadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
<<<<<<< HEAD
  
    // Loop through array of objects then each object
        let filtered = metadata.filter((item) => item.id == sample);
        console.log(filtered[0]);
  
        // Then, select the unordered list element by class name
        let list = d3.select("#sample-metadata");
  
        // First, clear out any existing data
        list.html("");
  
=======
        // Loop through array of objects then each object
        let filtered = metadata.filter((item) => item.id == sample);
        console.log(filtered[0]);
        // Then, select the unordered list element by class name
        let list = d3.select("#sample-metadata");
        // First, clear out any existing data
        list.html("");
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
        // Display the sample metadata, i.e., an individual's demographic information.
        // Append the id data to the dropdown menu
        list.append("li").text(filtered[0].id);
        list.append("li").text(filtered[0].ethnicity);
        list.append("li").text(filtered[0].gender);
        list.append("li").text(filtered[0].age);
        list.append("li").text(filtered[0].location); 
  });
}

function buildCharts(sample) {
d3.json("samples.json").then((data) => {
  let samples = data.samples;
  let sample_id = samples.filter(item => item.id == sample);
  let result = sample_id[0];
  
  let otu_ids = result.otu_ids;
  let otu_labels = result.otu_labels;
  let sample_values = result.sample_values;
  let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

<<<<<<< HEAD
  // Bar Chart
=======
  // Build BarChart
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
   
  let trace1 = [
  {
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h",
  }
  ];
  let barLayout = {
  title: "Top 10 Bacteria Cultures Found",
  margin: { t: 30, l: 150 }
  };
  Plotly.newPlot("bar", trace1, barLayout);

<<<<<<< HEAD
  // Bubble Chart
=======
  // Build a Bubble Chart
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
  
  let trace2 = [
  {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
      size: sample_values,
      color: otu_ids,
      colorscale: "Jet"
      }
  }
];

  let bubbleChartLayout = {
    title: "Bacteria Cultures Per Sample",
    margin: { t: 0 },
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
    margin: { t: 30}
    };
 
  Plotly.newPlot("bubble", trace2, bubbleChartLayout);
  
});
}

function optionChanged(newSample) {
<<<<<<< HEAD

  // Fetch new data each time a new sample is selected
buildCharts(newSample);
metadata(newSample);
}
=======
// Fetch new data each time a new sample is selected
buildCharts(newSample);
metadata(newSample);
}

 
>>>>>>> b8835e029160940ea297e255437dbf0fb78e3d0e
