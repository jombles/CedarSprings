var createLabel = function (scene, text) {
  return scene.rexUI.add.label({
    width: 40, // Minimum width of round-rectangle
    height: 40, // Minimum height of round-rectangle

    background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 5, 0x000000),

    text: scene.add.text(0, 0, text, {
      fontSize: "16px",
      fontFamily: "Roboto"
    }),

    space: {
      left: 10,
      right: 10,
      top: 5,
      bottom: 5
    }
  });
};

var getDialogConfig = function (scene) {
  return {
    x: 400,
    y: 300,
    width: 500,

    background: scene.rexUI.add.roundRectangle(0, 400, 100, 100, 5, 0x15bac0),

    title: createLabel(scene, "Title").setDraggable(),

    // toolbar: [createLabel(scene, "O"), createLabel(scene, "X")],
    // leftToolbar: [createLabel(scene, "A"), createLabel(scene, "B")],

    content: createLabel(scene, "Content"),

    // description: createLabel(scene, "Description"),
    choices: [
      createLabel(scene, "Choice0"),
      createLabel(scene, "Choice1"),
      createLabel(scene, "Choice2")
    ],

    // actions: [createLabel(scene, "Agree"), createLabel(scene, "Disagree")],
    actions: [createLabel(scene, "Continue")],

    space: {
      left: 20,
      right: 20,
      top: -20,
      bottom: -20,

      title: 25,
      titleLeft: 30,
      content: 25,
      description: 25,
      descriptionLeft: 20,
      descriptionRight: 20,
      choices: 25,

      toolbarItem: 5,
      choice: 15,
      action: 15
    },

    expand: {
      title: false
      // content: false,
      // description: false,
      // choices: false,
      // actions: true,
    },

    align: {
      title: "center",
      // content: 'left',
      // description: 'left',
      // choices: 'left',
      actions: "right" // 'center'|'left'|'right'
    },

    click: {
      mode: "release"
    }
  };
};

export { getDialogConfig };
