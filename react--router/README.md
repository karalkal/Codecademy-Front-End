## Install depenedancies:
npm install

## Install router:
npm install --save react-router-dom@6

## Start app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## this.project :-) is about:
**Defining different views, or routes, that our application will render for various URL paths. For example, we might want to render an About component for the /about path and a SignUp component for the /sign-up path. 
React Router gives us two options to define routes: JSX or objects. In this lesson, we’ll be learning to implement routes using JSX notation.**
## 1. 
`createBrowserRouter` will define a router that prevents URL changes from causing the page to reload. Instead, URL changes will allow the router to determine which of its defined routes to render while passing along information about the current URL’s path as props.
## 2. 
import RouterProvider, then make our router available to our entire application by `<RouterProvider router={ router } />`. Meanwhile router looks like this:
```
const router =
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={<Root />}>
    {/* Add Routes here! */}
  </Route>
```

## 3. 
The `.createBrowserRouter` method accepts an array of `<Route>` objects, so we’ll need to use React Router’s `.createRoutesFromElements` method to configure our routes with JSX. We also need to use React Router’s `<Route>` component to define our routes. These components can be imported from the `react-router-dom` package, alongside the `.createBrowserRouter` method, like so:
```
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from `react-router-dom`
```
The <Route> component is designed to render (or not render) a component based on the current URL path. Each <Route> component should include:
1. A path prop indicating the exact URL path that will cause the route to render.
2. An element prop describing the component to be rendered.
```
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/about' element={ <About/> } />
));
```
3. Certain components, like sidebars, navigation bars, and footers, that we want to render with every page view -> Define a root-level component that contains layout elements we want to render consistently. We can then nest the rest of our routes within this root-level component, like so:
```
/* imports ... */ 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    // nested routes here will render along with the <Root/> component
  </Route>
));
```
## 4.
Both Link and NavLink components work much like anchor tags:
They have a to prop that indicates the location to redirect the user to, similar to the anchor tag’s href attribute.
They wrap some HTML to use as the display for the link.
But **anchor tag refreshes the page, these do not**.
```
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>     // the link will automatically have an 'active' class applied to it
```
## 5.