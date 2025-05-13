import { Renderer } from "@freelensapp/extensions";

// transpiled .tsx code must have `React` symbol in the scope
import React from "react";

// must be named `*.module.scss` for the default export to work
import style from "./page.module.scss";

// must be `?inline` for explicit CSS to use in `<style>` tag
import styleInline from "./page.module.scss?inline";

export class FluxExtensionExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  constructor(props: { extension: Renderer.LensExtension }) {
    super(props);
  }

  render() {
    return (
      <>
        <style>{styleInline}</style>
        <div className={style.page}>
          <h1>Example extension</h1>
        </div>
      </>
    );
  }
}
