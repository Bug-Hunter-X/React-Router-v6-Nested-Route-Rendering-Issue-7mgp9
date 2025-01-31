# React Router v6 Nested Route Rendering Bug

This repository demonstrates a common, yet subtle, bug encountered when working with nested routes in React Router v6.  The issue lies in how nested routes are defined and how the parent component handles the rendering of its children.

## Bug Description

The provided `App.js` file showcases a scenario where nested routes are not rendering properly.  Despite the structure seeming correct, only the parent route component renders. Child components are not rendered, leading to incomplete application functionality. The solution addresses this issue, illustrating correct nested route implementation in React Router v6. 

## Solution

The solution (`AppSolution.js`) corrects the issue by ensuring proper route nesting and rendering.  It provides a practical example of how to correctly implement nested routes to avoid this common mistake.