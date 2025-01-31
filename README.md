# @flock/black-sun

Black sun is the Design System of Flock. It's name has been derived from the flocking behaviour of birds occurring in the marshlands in Denmark. The Danish call it "sort sol", because the amount of birds are so much that they obliterate the sunset. [Read more on Wikipedia](<https://en.wikipedia.org/wiki/Sort_sol_(bird_flock)>).

It exposes the color set defined in the Flock style guide.

## Install

```sh
npm i --save @flock/black-sun
```

## Usage

### Infima

[Infima](https://infima.dev/) is a modern styling framework used with [Docusaurus](https://docusaurus.io/).

This package exports a custom theme, which overrides the Infima CSS custom properties.

To make use of the custom theme, create a theme in the presets of the docusaurus configuration file `docusaurus.config.ts` and add the path to the `custom.css` file.

```js
presets: [
    [
      "classic",
      {
        theme: {
          customCss: './node_modules/@flock/black-sun/build/infima/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
```

Your ready to use the Flock. theme.

## Contributing

Read the [CONTRIBUTING.md](./CONTRIBUTING.md) if you want to contribute to this project.

## Maintainer

If you are a package maintainer, read the [MAINTAINERS.md](./MAINTAINERS.md) for information about package maintenance.

## Changelog

The changelog can be found on the [Releases page](https://github.com/flock-community/@flock/black-sun/releases).
