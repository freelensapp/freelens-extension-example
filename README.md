# @freelensapp/extension-example

<!-- markdownlint-disable MD013 -->

[![Home](https://img.shields.io/badge/%F0%9F%8F%A0-freelens.app-02a7a0)](https://freelens.app)
[![GitHub](https://img.shields.io/github/stars/freelensapp/freelens?style=flat&label=GitHub%20%E2%AD%90)](https://github.com/freelensapp/freelens)
[![Release](https://img.shields.io/github/v/release/freelensapp/freelens-extension-example?display_name=tag&sort=semver)](https://github.com/freelensapp/freelens-extension-example)
[![Integration tests](https://github.com/freelensapp/freelens-extension-example/actions/workflows/integration-tests.yaml/badge.svg?branch=main)](https://github.com/freelensapp/freelens-extension-example/actions/workflows/integration-tests.yaml)
[![npm](https://img.shields.io/npm/v/@freelensapp/extension-example.svg)](https://www.npmjs.com/package/@freelensapp/extension-example)

<!-- markdownlint-enable MD013 -->

This repository serves as an example how to build and publish extensions for
Freelens application.

It does not provide any useful functionality beside adding an additional menu
entry.

## Install

To install open Freelens and go to Extensions (`ctrl`+`shift`+`E` or
`cmd`+`shift`+`E`), and install `@freelensapp/extension-example`.

or:

Use a following URL in the browser:
[freelens://app/extensions/install/%40freelensapp%2Fextension-example](freelens://app/extensions/install/%40freelensapp%2Fextension-example)

## Build from the source

You can build the extension using this repository.

### Prerequisites

Use [NVM](https://github.com/nvm-sh/nvm) or
[mise-en-place](https://mise.jdx.dev/) or
[windows-nvm](https://github.com/coreybutler/nvm-windows) to install the
required Node.js version.

From the root of this repository:

```sh
nvm install
# or
mise install
# or
winget install CoreyButler.NVMforWindows
nvm install 22.14.0
nvm use 22.14.0
```

Install Pnpm:

```sh
corepack install
# or
curl -fsSL https://get.pnpm.io/install.sh | sh -
# or
winget install pnpm.pnpm
```

### Build extension

```sh
pnpm i
pnpm build
pnpm pack
```

### Install built extension

The tarball for the extension will be placed in the current directory. In
Freelens, navigate to the Extensions list and provide the path to the tarball
to be loaded, or drag and drop the extension tarball into the Freelens window.
After loading for a moment, the extension should appear in the list of enabled
extensions.

## License

Copyright (c) 2025 Freelens Authors.

[MIT License](https://opensource.org/licenses/MIT)
