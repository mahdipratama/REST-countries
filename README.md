<div id="top"></div>

<div align="center">
  <h2 align="center">REST Countries API with color theme switcher</h2>
  <p align="center">
    <br />
    <br />
    <a href="https://rest-countries-vite.netlify.app" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/mahdipratama/REST-countries" target="_blank">Report Bug</a>
    ·
  </p>
</div>

<!-- Bagdes -->
<div align="center">
  <!-- Profile -->

  <!-- Status -->
  <a href="#">
    <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge" alt="Status Completed">
  </a>

</div>

#

<div align="center">

![](./src/assets/desktop-preview.jpg)

</div>

## The Challenge

The challenge is integrating with the <a href='https://restcountries.com/' target=_blank>REST Countries API</a> to pull country data and display it like in the designs.

- Your users should be able to:
  - See all countries from the API on the homepage
  - Search for a country using an input field
  - Filter countries by region
  - Click on a country to see more detailed information on a separate page
  - Click through to the border countries on the detail page
  - Toggle the color scheme between light and dark mode (optional)

<br>

## **What I learned**

* define `context.jsx` file to create a global state that can be used by any component in the application
* Usage of `useContext` and `createContext`to enable the passing of data through the component tree without the need to pass down props manually at every level.
* Usage of `useRef` hook is used to access the current value of the search input field without the need to re-render the component on every change.
* <a href="https://reactrouter.com/en/main" target="_blank">React Router</a> to create multiple pages or views within our single-page application by using URLs to navigate between them.
* A lot of minor things

<br>

<h2 align="center">Links</h2>

- Live Site URL: [https://rest-countries-vite.netlify.app](https://rest-countries-vite.netlify.app)
- Solution: [https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-reactjs-vite-Anz7OzOn9S](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-reactjs-vite-Anz7OzOn9S)

<br>

## Table of contents

- [](#)
  - [The Challenge](#the-challenge)
  - [Table of contents](#table-of-contents)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Acknowledgments](#acknowledgments)

## My process

### Built with
<!-- Bagdes -->

![](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- Mobile-first approach
- Flex Layout
- React Router

## Instructions

When using `vite` in order to build this solution

- Install all dependencies:

```bash
npm install
```

- If you want to edit the code and test, in the root folder of this repository, run this command from the command line:

```bash
npm run dev
```


- Run build command from command line:

```bash
npm run build
```
