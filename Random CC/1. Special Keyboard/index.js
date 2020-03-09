function keyTime (keyboard, text) {
  let totalTime = 0,
    keyMap = new Map(),
    curKey = 0;

  for (let i = 0; i < keyboard.length; i++) {
    keyMap.set(keyboard[i], i);
  }
  for (let i = 0; i < text.length; i++) {
    totalTime += Math.abs(curKey - keyMap.get(text[i]));
    curKey = keyMap.get(text[i]);
  }
  return totalTime;
}

console.log(keyTime('abcdefghijklmnopqrstuvwxyz', 'cat'));
console.log(keyTime('abcdefghijklmnopqrstuvwxyz','harp'));
console.log(keyTime('abcdefghijklmnopqrstuvwxyz', 'house'));
console.log(keyTime('abcdefghijklmnopqrstuvwxyz', 'aaa'));
console.log(keyTime('abcdefghijklmnopqrstuvwxyz', 'aza'));