// Javascript for data.html
const loc = window.location.pathname

if (loc==="/data"){
    d3.json("/births")
  .then(data => {
    console.log(data)
    const dataset = data;
    const tbody = document.querySelector("tbody");
    dataset.map(item => {
      tbody.innerHTML += `
      <tr>
        <td>${item.state}</td>
        <td>${item.year}</td>
        <td>${item.race}</td>
        <td>${item.births}</td>
       </tr>
      `
    })
  })

}





//   // from data.js
//   if (loc==="/data"){
//     d3.json("/births")
//   .then(data => {
//     console.log(data)
//     const dataset = data;
//     const tbody = document.querySelector("tbody");
//     dataset.map(item => {
//       tbody.innerHTML += `
//       <tr>
//         <td>${item.state}</td>
//         <td>${item.year}</td>
//         <td>${item.race}</td>
//         <td>${item.births}</td>
//        </tr>
//       `
//     })
//   })

// }