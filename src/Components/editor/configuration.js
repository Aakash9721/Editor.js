import React from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "./simple-image";

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
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      image: SimpleImage,
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
        {
          type: "image",
          data: {
            url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
          },
        },
      ],
      version: "2.25.0",
    },
  };
};

export default configuration;
