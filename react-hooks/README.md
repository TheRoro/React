# Custom Hooks

## useState

- It declares a state variable. This is a way to preserve some values between the function calls. `useState` is a new way to use the same capabilities that `this.state` provides in a class component. Variables disappear when the function exists but state variables are preserved by React.

## useEffect

- By using this hook, you tell react that your component needs to do something after render. By default, `useEffect` runs after every render. It is a different approach than the traditional lifecycle that we had on class components. The React documentation recommends to think of that as effects that happen "after render" instead of `mounting` and `updating`. `useEffect` handles updates by default, it cleans up the previous effects before applying the next effect. To skip applying an effect, because there are some values that didn't change during the re-render, we pass a parameter to the `dependency array []` and React will compare if the value inside the array has changed and only if it has, it will apply the effect. This also works with arrays as values. If you only want to apply your effect once, you can pass an `empty array []` as a parameter.

https://www.youtube.com/watch?v=f687hBjwFcM

https://reactjs.org/

Made with 🦔 by **Rodrigo Ramirez**.
