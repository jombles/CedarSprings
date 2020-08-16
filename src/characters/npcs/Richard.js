import Character from "../Character";

export default class Richard extends Character {
  constructor() {
    super("Richard");
  }

  getDefaultDialogue(character) {
    return "Why hello there, " + character.getName();
  }
}
