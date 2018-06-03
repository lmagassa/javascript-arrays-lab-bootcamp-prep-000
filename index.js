var kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function  destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

<<<<<<< HEAD
function   destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var appendedKitten = [...kittens, name]
  return appendedKitten
}

function prependKitten(name) {
  var prependedKitten = [name, ...kittens]
  return prependedKitten
}


function removeLastKitten(name) {
  var name = kittens
  var removedLastKitten = name.slice(0, name.length - 1)
  return removedLastKitten
}

function removeFirstKitten(name) {
  var name = kittens
  var removedFirstKitten = name.slice(1)
  return removedFirstKitten
}



=======
function 
>>>>>>> 7df37399bd81480382db0466c812cb1cbf0e65c3
