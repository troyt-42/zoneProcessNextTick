require("zone.js");

let zoneA = Zone.current.fork({name: 'zoneA'});

zoneA.run(function() {
  console.log("Expect zoneA, actual: ", Zone.current.name) 

  process.nextTick(() => {
    console.log("Expect zoneA, actual: ",Zone.current.name, " (nextTick)")
  });
});
