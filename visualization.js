const visualization = (function() {

  let people = [];

  // cache dom
  let $viz = $('#vizModule')

  // attach eventhandler
	$viz.on('click', removePerson)


  function render() {
    //clear viz
    $viz.html("");
    for (let i = 0; i < people.length; i++) {
      $viz.append(`<div class="person"></div>`)
    }
  }

  // bring the data in to visualization from the people module
  function setPeople(msg, newPeople) {
    console.log(newPeople)
    people = newPeople
    render();
  }

  function removePerson(){
  	people.pop();
  	// publish the change to the data 
  	PubSub.publish("peopleChanged", people);
  	render()
  }

  /* === main ===*/
  // listen to any changes happening across the app
  PubSub.subscribe('peopleChanged', setPeople);
  // init render
  render();
  

})();