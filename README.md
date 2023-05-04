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
![fem-multi-step-form netlify app_(iPhone SE)](https://user-images.githubusercontent.com/68667158/235542839-80c50ad5-706b-4fdf-bc77-1477d80a5b02.png)

#### Desktop
![fem-multi-step-form netlify app_(Nest Hub Max)](https://user-images.githubusercontent.com/68667158/235542920-ef82f3a0-d01a-46c1-a359-31b22bfd7630.png)


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/mobile-responsive-multistep-form-w-react-typescript-and-redux-toolkit-XOFWjlMD-T)
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

The main challenge for this project was managing states across multiple components. To avoid prop drilling, I originally implemented React's built-in useContext hook to hold these states. But since every new component consumes from the same context, the growing number of states to track and manage became an issue. Moreover, since all the components were nested within the same context provider, every single state change triggered every mounted component to re-render. This was especially pronounced when typing into form fields since every single key press triggered unrelated components to unnecessarily re-render.

For both performance reasons and my personal impulse to minimize component re-renders, I refactored the project using Redux Toolkit, a robust state manager, which is easier to use than Redux as it abstracts away much of Redux's boilerplate code. Redux Toolkit's `createSlice` feature was particularly useful for modularizing different states and their respective reducers. In addition to more organized code, components now re-render only when its subscribed states have changed.
