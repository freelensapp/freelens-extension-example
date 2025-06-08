/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@freelensapp/extensions";

import { ExamplesPage } from "./pages";

// must be `?raw` as we need SVG element
import svgIcon from "./icons/example.svg?raw";

// transpiled .tsx code must have `React` symbol in the scope
// @ts-ignore
import React from "react";
import { ExampleDetails } from "./details/example-details";
import { Example, exampleObject } from "./k8s/example/example";

const {
  Component: { Icon },
} = Renderer;

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Icon {...props} svg={svgIcon} />;
}

export default class LensExtensionExampleRenderer extends Renderer.LensExtension {
  kubeObjectDetailItems = [
    {
      kind: exampleObject.kind,
      apiVersions: exampleObject.apiVersions,
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<Example>) => <ExampleDetails {...props} />,
      },
    },
  ];

  clusterPages = [
    {
      id: "examples-page",
      components: {
        Page: () => <ExamplesPage extension={this} />,
      },
    },
  ];

  clusterPageMenus = [
    {
      id: "example",
      title: "Example",
      target: { pageId: "examples-page" },
      components: {
        Icon: ExampleIcon,
      },
    },
  ];
}
