// Import the donut.js file
import donut from './donut.js'
// Run the donut function with a callback
donut((err) => {
  if (err) return console.error(err);
  console.clear();
  console.log("Donut created");
  console.log(new Date() + ' - ' + Date.now())
})