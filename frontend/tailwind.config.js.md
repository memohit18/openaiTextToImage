## Tailwind CSS Configuration Documentation 

**Table of Contents**

* [Configuration Overview](#configuration-overview)
* [Content](#content)
* [Theme](#theme)
    * [Screen Sizes](#screen-sizes)
    * [Font Families](#font-families)
    * [Box Shadows](#box-shadows)
* [Plugins](#plugins)

## Configuration Overview

This document outlines the configuration for the Tailwind CSS framework within this project. The configuration file leverages JavaScript and utilizes the `module.exports` syntax.

## Content

The `content` property defines the files that Tailwind CSS will scan for class names to generate its utility classes. 

| Property | Value | Description |
|---|---|---|
| `content` | `['./src/**/*.{js,jsx}']` | Specifies that Tailwind CSS should look for class names in all `.js` and `.jsx` files within the `src` directory and its subdirectories. |

## Theme

The `theme` property allows for customizing the default Tailwind CSS theme.

### Screen Sizes

The `screens` property extends the default screen sizes provided by Tailwind CSS to include a new `xs` screen size. 

| Screen | Value | Description |
|---|---|---|
| `xs` | `480px` |  A new screen size with a minimum width of 480 pixels. |

### Font Families

The `fontFamily` property defines a custom font family named `inter`.

| Font Family | Value | Description |
|---|---|---|
| `inter` | `['Inter var', 'sans-serif']` |  Specifies the `Inter var` font family as the primary choice, and defaults to a generic sans-serif font if `Inter var` is not available. |

### Box Shadows

The `boxShadow` property defines two custom box shadows, `card` and `cardhover`.

| Box Shadow | Value | Description |
|---|---|---|
| `card` | `0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)` |  A subtle box shadow with a light gray color, commonly used for cards or other content containers. |
| `cardhover` | `0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)` |  A more pronounced box shadow with a darker gray color, commonly used for hover states of cards or other content containers. |

## Plugins

The `plugins` property allows for adding third-party plugins to extend Tailwind CSS's functionality. In this case, no plugins are being used. 
