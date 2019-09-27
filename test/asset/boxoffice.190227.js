// boxoffice in million usd
const boxoffice = [
  {
    name: 'Avatar',
    boxoffice: '2,788',
    budget: '244',
    year: '2009',
    director: 'James Cameron',
    producer: ['James Cameron', 'Jon Landau'],
    writer: 'James Cameron',
    based_on: ''
  },
  {
    name: 'Titanic',
    boxoffice: '2,187',
    budget: '200',
    year: '1997',
    director: 'James Cameron',
    producer: ['James Cameron', 'Jon Landau'],
    writer: 'James Cameron',
    based_on: ''
  },
  {
    name: 'Star Wars: The Force Awakens',
    boxoffice: '2,068',
    budget: '306',
    year: '2015',
    director: 'J. J. Abrams',
    producer: ['Kathleen Kennedy', 'J. J. Abrams', 'Bryan Burk'],
    writer: ['Lawrence Kasdan', 'J. J. Abrams', 'Michael Arndt'],
    based_on: 'George Lucas'
  },
  {
    name: 'Avengers: Infinity War',
    boxoffice: '2,048',
    budget: '400',
    year: '2018',
    director: ['Anthony Russo', 'Joe Russo'],
    producer: 'Kevin Feige',
    writer: ['Christopher Markus', 'Stephen McFeely'],
    based_on: ['Stan Lee', 'Jack Kirby']
  },
  {
    name: 'Jurassic World',
    boxoffice: '1,672',
    budget: '150',
    year: '2015',
    director: 'Colin Trevorrow',
    producer: ['Frank Marshall', 'Patrick Crowley'],
    writer: ['Rick Jaffa', 'Amanda Silver', 'Derek Connolly', 'Colin Trevorrow'],
    based_on: 'Michael Crichton\n'
  },
  {
    name: 'The Avengers',
    boxoffice: '1,519',
    budget: '220',
    year: '2012',
    director: 'Joss Whedon',
    producer: 'Kevin Feige',
    writer: ['Joss Whedon', 'Zak Penn'],
    based_on: ['Stan Lee', 'Jack Kirby']
  },
  {
    name: 'Furious 7',
    boxoffice: '1,516',
    budget: '190',
    year: '2015',
    director: 'James Wan',
    producer: ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell'],
    writer: 'Chris Morgan\n',
    based_on: 'Gary Scott Thompson'
  },
  {
    name: 'Avengers: Age of Ultron',
    boxoffice: '1,405',
    budget: '495',
    year: '2015',
    director: 'Joss Whedon',
    producer: 'Kevin Feige',
    writer: 'Joss Whedon',
    based_on: ['Stan Lee', 'Jack Kirby']
  },
  {
    name: 'Black Panther',
    boxoffice: '1,347',
    budget: '210',
    year: '2018',
    director: 'Ryan Coogler',
    producer: 'Kevin Feige',
    writer: ['Ryan Coogler', 'Joe Robert Cole'],
    based_on: ['Stan Lee', 'Jack Kirby']
  },
  {
    name: 'Harry Potter & Deathly Hallows II',
    boxoffice: '1,342',
    budget: '250',
    year: '2011',
    director: 'David Yates',
    producer: ['David Heyman', 'David Barron', 'J. K. Rowling'],
    writer: 'Steve Kloves',
    based_on: 'J. K. Rowling'
  },
  {
    name: 'Star Wars: The Last Jedi',
    boxoffice: '1,333',
    budget: '317',
    year: '2017',
    director: 'Rian Johnson',
    producer: ['Kathleen Kennedy', 'Ram Bergman'],
    writer: 'Rian Johnson',
    based_on: 'George Lucas'
  },
  {
    name: 'Jurassic World: Fallen Kingdom',
    boxoffice: '1,309',
    budget: '187',
    year: '2018',
    director: 'J. A. Bayona',
    producer: ['Frank Marshall', 'Patrick Crowley', 'Belén Atienza'],
    writer: ['Derek Connolly', 'Colin Trevorrow'],
    based_on: 'Michael Crichton'
  },
  {
    name: 'Frozen',
    boxoffice: '1,290',
    budget: '150',
    year: '2013',
    director: ['Chris Buck', 'Jennifer Lee'],
    producer: 'Peter Del Vecho',
    writer: ['Chris Buck', 'Jennifer Lee', 'Shane Morris'],
    based_on: ''
  },
  {
    name: 'Beauty and the Beast',
    boxoffice: '1,263',
    budget: '255',
    year: '2017',
    director: 'Bill Condon',
    producer: ['David Hoberman', 'Todd Lieberman'],
    writer: ['Stephen Chbosky', 'Evan Spiliotopoulos'],
    based_on: 'Disney\'s'
  },
  {
    name: 'Incredibles 2',
    boxoffice: '1,242',
    budget: '200',
    year: '2018',
    director: 'Brad Bird',
    producer: ['John Walker', 'Nicole Paradis Grindle'],
    writer: 'Brad Bird',
    based_on: ''
  },
  {
    name: 'The Fate of the Furious',
    boxoffice: '1,239',
    budget: '250',
    year: '2017',
    director: 'F. Gary Gray',
    producer: ['Neal H. Moritz', 'Vin Diesel', 'Michael Fottrell', 'Chris Morgan'],
    writer: 'Chris Morgan',
    based_on: 'Gary Scott Thompson'
  },
  {
    name: 'Iron Man 3',
    boxoffice: '1,215',
    budget: '200',
    year: '2013',
    director: 'Shane Black',
    producer: 'Kevin Feige',
    writer: ['Drew Pearce', 'Shane Black'],
    based_on: ['Stan Lee', 'Don Heck', 'Larry Lieber', 'Jack Kirby']
  },
  {
    name: 'Minions',
    boxoffice: '1,159',
    budget: '74',
    year: '2015',
    director: ['Pierre Coffin', 'Kyle Balda'],
    producer: ['Chris Meledandri', 'Janet Healy'],
    writer: 'Brian Lynch',
    based_on: 'Sergio Pablos'
  },
  {
    name: 'Captain America: Civil War',
    boxoffice: '1,153',
    budget: '250',
    year: '2016',
    director: ['Anthony Russo', 'Joe Russo'],
    producer: 'Kevin Feige',
    writer: ['Christopher Markus', 'Stephen McFeely'],
    based_on: ['Joe Simon', 'Jack Kirby']
  },
  {
    name: 'Aquaman',
    boxoffice: '1,139',
    budget: '200',
    year: '2018',
    director: 'James Wan',
    producer: ['Peter Safran', 'Rob Cowan'],
    writer: ['David Leslie Johnson-McGoldrick', 'Will Beall', 'Geoff Johns', 'James Wan'],
    based_on: 'Mort Weisinger'
  }
]

export {
  boxoffice
}