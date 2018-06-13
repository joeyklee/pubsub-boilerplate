const stats = (function() {

  let people = 0;

  // cache dom
  let $stats = $('#statsModule')

  function render() {
    $stats.find("#stats-counter").html(people)
  }

  function setPeople(msg, newPeople) {
    console.log(newPeople)
    people = newPeople.length
    render();
  }

  function init(){
  	$stats.show();
  	PubSub.subscribe("peopleChanged", setPeople)
  }

  function destroy(){
  	$stats.hide();
  	PubSub.unsubscribe("peopleChanged", setPeople)
  }

  /* === main ===*/
  PubSub.subscribe('peopleChanged', setPeople);
  render();

  return {
  	init: init,
  	destroy: destroy
  }

})();