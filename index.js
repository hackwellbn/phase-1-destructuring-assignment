const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Destructure to declare five animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals
const [bessie, dolly, babe, little] = farmAnimals.split(' ').filter(animal => animal !== 'horse');

// 3. Little the chicken had to go back to the coop, so now we're left with three
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter(animal => animal !== 'chicken');

// 4. Destructure to assign appropriate variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Leave out indigo, using the first letter of each color as the variable names
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo using indg
const [r2, o2, y2, g2, b2, indg, v2] = colors;

// 7. Destructure to assign all variables using the keys as the variable names from `muppet`
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure to assign songs 2 and 4, and Kermit's job and partner from `nestedMuppet`
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

console.log(moo);    // 'cow'
console.log(neigh);  // 'horse'
console.log(baa);    // 'sheep'
console.log(oink);   // 'pig'
console.log(cluck);  // 'chicken'

console.log(bessie, dolly, babe, little);  // 'cow', 'sheep', 'pig', 'chicken'
console.log(blackAndWhite, black, pink);  // 'cow', 'sheep', 'pig'

console.log(r, o, y, g, b, v); // 'r', 'o', 'y', 'g', 'b', 'v'
console.log(indg);  // indigo

console.log(muppetName, color, song, job, partner);  // 'Miss Piggy', 'pink', 'Never Before, Never Again', 'Cast member of The Muppet Show', 'Kermit'
console.log(song2, song4, nestedJob, nestedPartner);  // 'Moving Right Along', 'I Hope That Something Better Comes Along', 'Host of The Muppet Show', 'Miss Piggy'
