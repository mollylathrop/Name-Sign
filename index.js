
var submit = $('.submit-btn');
var cards = $('.name-cards');
var allPeople = JSON.parse(localStorage.getItem('people')) || [];

function appendAllPeople() {
  allPeople.forEach(function(person) {
    cards.append(`
      <article class="card">
        <h2>${person.name} is a ${person.sign}</h2>
      </article>
    `);
  })
}

appendAllPeople();

submit.on('click', addPerson);


function addPerson(e) {
  e.preventDefault();
  var name = $('.name-input').val();
  var sign = $('.sign-input').val();

  cards.append(`
    <article class="card">
      <h2>${name} is a ${sign}</h2>
    </article>
  `);

  $('.name-input').val("");
  $('.sign-input').val("");
  // clears it after submitted


  allPeople.push({name: name, sign: sign});
  var allPeopleString = JSON.stringify(allPeople);
  localStorage.setItem('people', allPeopleString);
  console.log(localStorage);

}
