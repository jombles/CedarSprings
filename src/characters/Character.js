export default class Character {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getDialogue(character) {
    return this.getDefaultDialogue(character);
  }

  getDefaultDialogue(character) {
    throw new Error("Must implement getDefaultDialogue");
  }
}
