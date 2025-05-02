import { Renderer } from "@freelensapp/extensions";

import React from "react";

import "./page.scss";

export class FluxExtensionExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  constructor(props: { extension: Renderer.LensExtension }) {
    super(props);
  }

  render() {
    return (
      <div className="example-page">
        <h1>Example extension</h1>
      </div>
    );
  }
}
