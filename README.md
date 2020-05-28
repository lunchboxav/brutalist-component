# Tense aka Brutalist Component 

Tense is a Design System that implements brutalism design style in form of reusable components written in Svelte. It aims to provide its users sets of brash, bold and beutiful component that gives extra characteristic edge and sense of expresiveness to a digital product (website, web app, etc). This is still very early in development. 

## Design Tokens

For the time being, a design token yaml file is available and will be updated extensively everytime a design principle is established. This file consists of tokens (aka, key-value pairs) of established variables that build the whole design system. The flow of using this token file is as follows:

1. The yaml file (`token.yaml`) is processed using [Eightshapes' build system](https://github.com/EightShapes/esds-generators/tree/master/packages/esds-token-compiler) to generate SCSS variables in `vars.scss` file. 
2. This SCSS variable file will then be referred inside the main stylesheet, `styles.scss` where majority of CSS classes will be defined. 
3. Finally, each component should be able to refer to the required class(es) from the main stylesheed.

So, in short: 
`token.yaml` :point_right: `vars.scss` :point_right: `styles.scss` :point_right: `Component.svelte`

With this in place, any significant fundamental change to the design should be expressed inside the token and the change will propagated throughout Component's build.
