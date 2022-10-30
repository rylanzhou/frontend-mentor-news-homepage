# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![](./assets/images/screenshot.png)

### Links

- Solution URL: _TO BE ADDED_
- Live Site URL: _TO BE ADDED_

## My process

### Built with

- Semantic HTML5 markup
- Sass
- CSS custom properties
- CSS Grid
- Typescript

### What I learned

To deal with mobile screen size, `100vh` will cause part of the content to be masked by mobile browser's headers and footers. Use customized css property `--height` to set container's height.

```js
window.onresize = () => {
  if (mobile()) {
    document.documentElement.style.setProperty('--height', window.innerHeight + 'px');
  }
};
```

```css
body {
  height: var(--height);
}
```

Use `grid-template-area` on container element, and `grid-area` on child elements to better control element layout.

```css
.container {
  grid-template-area:
    'a a b'
    'a a b'
    'c c c';
}

.child-a {
  grid-area: a;
}

.child-b {
  grid-area: b;
}
```
