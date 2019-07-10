## [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

[useState Hook](https://reactjs.org/docs/hooks-state.html)

A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

[useEffect Hook](https://reactjs.org/docs/hooks-effect.html)

The Effect Hook lets you perform side effects in function components:

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
