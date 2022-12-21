function twelveDaysofXmas(num) {
  if (!num || typeof num !== 'number') return 'Happy Holidays! ☃️🎁🎉';
  if (num > 12 || num < 0) return ['Please enter a valid day of Xmas'];

  let day = num;
  const result = [`🎵 On the ${day}st day of Xmas, my true love sent to me:`];

  if (num === 2) result[0] = result[0].replace('st ', 'nd ');
  if (num === 3) result[0] = result[0].replace('st ', 'rd ');
  if (num > 3) result[0] = result[0].replace('st ', 'th ');

  while (num <= 12 && num > 0) {
    if (num === 1) result.push(`a partridge in a pear tree! 🎵`);
    else if (num === 2) result.push(`${num} turtle doves, and`);
    else if (num === 3) result.push(`${num} French hens`);
    else if (num === 4) result.push(`${num} calling birds`);
    else if (num === 5) result.push(`${num} golden rings`);
    else if (num === 6) result.push(`${num} geese a-laying`);
    else if (num === 7) result.push(`${num} swans a-swimming`);
    else if (num === 8) result.push(`${num} maids a-milking`);
    else if (num === 9) result.push(`${num} ladies dancing`);
    else if (num === 10) result.push(`${num} lords a-leaping`);
    else if (num === 11) result.push(`${num} pipers piping`);
    else if (num === 12) result.push(`${num} drummers drumming`);

    num--;
  }
  return result;
}

console.log(twelveDaysofXmas(1)); // expect [ '🎵 On the 1st day of Xmas, my true love sent to me:', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(2)); // expect [ '🎵 On the 2nd day of Xmas, my true love sent to me:', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(3)); // expect [ '🎵 On the 3rd day of Xmas, my true love sent to me:', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(4)); // expect [ '🎵 On the 4th day of Xmas, my true love sent to me:', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(5)); // expect [ '🎵 On the 5th day of Xmas, my true love sent to me:', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(6)); // expect [ '🎵 On the 6th day of Xmas, my true love sent to me:', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(7)); // expect ['🎵 On the 7th day of Xmas, my true love sent to me:', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(8)); // expect [ '🎵 On the 8th day of Xmas, my true love sent to me:', '8 maids a-milking', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(9)); // expect [ '🎵 On the 9th day of Xmas, my true love sent to me:', '9 ladies dancing', '8 maids a-milking', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(10)); // expect [ '🎵 On the 10th day of Xmas, my true love sent to me:', '10 lords a-leaping', '9 ladies dancing', '8 maids a-milking', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(11)); // expect [ '🎵 On the 11th day of Xmas, my true love sent to me:', '11 pipers piping', '10 lords a-leaping', '9 ladies dancing', '8 maids a-milking', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(12)); // expect [ '🎵 On the 12th day of Xmas, my true love sent to me:', '12 drummers drumming', '11 pipers piping', '10 lords a-leaping', '9 ladies dancing', '8 maids a-milking', '7 swans a-swimming', '6 geese a-laying', '5 golden rings', '4 calling birds', '3 French hens', '2 turtle doves, and', 'a partridge in a pear tree! 🎵' ]
console.log(twelveDaysofXmas(13)); // expect [ 'Please enter a valid day of Xmas' ]
console.log(twelveDaysofXmas('test')); // expect 'Happy Holidays! ☃️🎁🎉'
