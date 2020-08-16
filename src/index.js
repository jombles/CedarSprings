import Phaser from "phaser";
import MainScene from "./main-scene.js";
// import DialogueManager from "../plugins/DialogueManager";

const config = {
  type: Phaser.CANVAS,
  width: 2000,
  height: 1500,
  backgroundColor: "#000c1f",
  parent: "game",
  scene: MainScene,
  physics: {
    default: "matter",
    matter: {
      // This is the default value
      debug: true,
      gravity: { y: 0 },

      // You can also pass in Matter.Engine config properties:
      //  http://brm.io/matter-js/docs/classes/Engine.html#properties
      enableSleep: true
    }
  }
};

const game = new Phaser.Game(config);
// game.plugins.add(PhreakNation.Plugins.DialogManager);
