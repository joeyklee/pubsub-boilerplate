const People = (function() {

  let people = ["Person1", "Person2"]

  // cache dom
  let $el = $('#peopleModule');
  let $addButton = $el.find('#addPerson');
  let $deleteButton = $el.find('#deletePerson');


  //bind events
  $addButton.on('click', addPerson);
  $deleteButton.on('click', deletePerson);

  render();

  function render() {
    // $ul.html(Mustache.render(template, {people: people}));
    PubSub.publish("peopleChanged", people);
  }

  function addPerson() {
    people.push(`Person${people.length}`)
    render();
  }

  function deletePerson() {
    people.pop()
    render();
  }


})();