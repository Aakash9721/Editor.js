import React from "react";

const configuration = () => {
  return {
    /**
     * Id of Element that should contain the Editor
     */
    holder: "editorjs",

    onReady: () => {
      console.log("This is ready");
    },
    /* Similar to onReady callback, you can use the onChange callback to handle any modifications inside the Editor: */
    onChange: (api, event) => {
      console.log("Now I know that Editor's content changed!", event);
    },
    autofocus: true,
    data: {
      time: 1662815552000,
      blocks: [
        {
          id: "RKyOw3Q-Rb",
          type: "paragraph",
          data: {
            text: "dgsfgfhfh",
          },
        },
        {
          id: "9OzsDqYiDS",
          type: "paragraph",
          data: {
            text: "fhsfhsfhfsh",
          },
        },
        {
          id: "ywaKZLbdIN",
          type: "paragraph",
          data: {
            text: "sdfgdsfhsfdhfsh",
          },
        },
      ],
      version: "2.25.0",
    },
  };
};

export default configuration;
