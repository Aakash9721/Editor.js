import React from "react";
import EditorJS from "@editorjs/editorjs";
import configuration from "./configuration";

const Editor = (props) => {
  const editor = new EditorJS(configuration());

  /*  After you create a new editor it contains a property named isReady
 editor.isReady
  .then(() => {
    console.log('Editor.js is ready to work!')
    
  })
  .catch((reason) => {
    console.log(`Editor.js initialization failed because of ${reason}`)
  }); */

  /* or else u can use async await for the same purpose 
  try {
    await editor.isReady;
    console.log('Editor.js is ready to work!')
   
  } catch (reason) {
    console.log(`Editor.js initialization failed because of ${reason}`)
  } */

  const onSave = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <div>
      <h1>My Editor</h1>
      <button onClick={onSave}>Save</button>
      <div className="container">
        <div id="editorjs"></div>
      </div>
    </div>
  );
};

export default Editor;
