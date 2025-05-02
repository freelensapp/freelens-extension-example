/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@freelensapp/extensions";
import React from "react";
import svgIcon from "./src/icons/example.svg";
import { FluxExtensionExamplePage } from "./src/page";

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
