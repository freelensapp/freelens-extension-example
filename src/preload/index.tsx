/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@freelensapp/extensions";

import { FluxExtensionExamplePage } from "./page";

// must be `?raw` as we need SVG element
import svgIcon from "./icons/example.svg?raw";

// transpiled .tsx code must have `React` symbol in the scope
// @ts-ignore
import React from "react";

const {
  Component: { Icon },
} = Renderer;

export function FluxExtensionExampleIcon(props: Renderer.Component.IconProps) {
  return <Icon {...props} svg={svgIcon} />;
}

export default class FluxExtensionExampleRenderer extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "example-page",
      components: {
        Page: () => <FluxExtensionExamplePage extension={this} />,
      },
    },
  ];

  clusterPageMenus = [
    {
      id: "example",
      title: "Example",
      target: { pageId: "example-page" },
      components: {
        Icon: FluxExtensionExampleIcon,
      },
    },
  ];
}
