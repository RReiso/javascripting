let pets = ["cat", "dog", "rat"];
pets = pets.map((pet) => {
  return (pet = pet + "s");
});
console.log(pets);
