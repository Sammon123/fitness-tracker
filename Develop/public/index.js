init();

async function init() {
  // get the url and check to see if it has an id attached
  // ex: localhost:3000/?id=793839273899
  // if it doesnt do this
  if (location.search.split("=")[1] === undefined) {
    // call the api class get last workout function
    const workout = await API.getLastWorkout();
    //. if you got a workout form the api
    if (workout) {
      // add that workout id to the ur
      location.search = "?id=" + workout._id;
    } else { // if you didnt get a workout
      // change the css to hide the continue button
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

