// TODO: write your code here

export default function sortHeroes(obj) {
  return obj.sort((prev, next) => next.health - prev.health);
}
