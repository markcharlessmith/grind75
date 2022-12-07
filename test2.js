function stringChallenge(str) {
  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') str.splice(i, 1);
  }

  str = str.join('');
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(stringChallenge('never odd or even')); // expect true
console.log(stringChallenge('cat'));
console.log(stringChallenge('satan oscillate my metallic sonatas'));
