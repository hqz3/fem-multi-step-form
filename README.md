# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Notes](#notes)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

#### Mobile

#### Desktop

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://fem-multi-step-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- TypeScript
- React
- Redux Toolkit

### Notes

The main challenge of this project was state management across multiple components. Originally, I implemented React's built-in useContext feature to hold these states. But since every new component consumes from the same context, the growing number of states to track and manage became an issue. Moreover, since all the project's components were nested within the same context provider, every single state change triggered every single component to re-render. This was especially pronounced when typing into form fields, when every key press triggered unnecessary component re-renders.

For both performance reasons and my personal obsession with minimizing component renders, I refactored the project with Redux Toolkit, a robust state manager, which is significantly easier to use than Redux as it abstracts away and simplifies much of Redux's boilerplate syntax. Redux Toolkit's `createSlice` feature was particularly useful to modularize different states and their respective reducers.
