#### Understanding Events

- Create a react boilerplate
- Using JSX do the following

1.

- Create a button with text `Click Me`
- Handle a event of type `click` on the button
- When user click on the button `alert` a message saying `Hello React Event`

// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
function App() {
  // Event handler function for button click
  const handleClick = () => {
    alert('Hello React Event');
  };

  // Render JSX
  return (
    <div>
      {/* Button with text 'Click Me' and event handler */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));


2.

- Create another button with text `How can I help you?`
- Handle a event of type `click`
- When user clicks `alert` three different messages as given below
  - To learn React use https://reactjs.org
  - React and ReactDOM works together
  - Babel helps in writing JSX
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
function App() {
  // Event handler function for first button click
  const handleClick = () => {
    alert('Hello React Event');
  };

  // Event handler function for second button click
  const handleHelpClick = () => {
    alert(
      "To learn React, use https://reactjs.org\nReact and ReactDOM work together\nBabel helps in writing JSX"
    );
  };

  // Render JSX
  return (
    <div>
      {/* First button */}
      <button onClick={handleClick}>Click Me</button>
      
      {/* Second button */}
      <button onClick={handleHelpClick}>How can I help you?</button>
    </div>
  );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

3.

- Create three button with text `Arya`, `John` and `Bran`
- When clicked on any button alert message with the name like `Hello Arya|John|Bran`
- Don't write three different click handler function
- One function should be able to handle this.
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
function App() {
  // Event handler function for button click
  const handleClick = (name) => {
    alert(`Hello ${name}`);
  };

  // Render JSX
  return (
    <div>
      {/* Button for Arya */}
      <button onClick={() => handleClick('Arya')}>Arya</button>
      
      {/* Button for John */}
      <button onClick={() => handleClick('John')}>John</button>
      
      {/* Button for Bran */}
      <button onClick={() => handleClick('Bran')}>Bran</button>
    </div>
  );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

4.

- Do the same this you did above in (3) but use `class` component to do this
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define a class component
class App extends React.Component {
  // Event handler function for button click
  handleClick = (name) => {
    alert(`Hello ${name}`);
  };

  // Render method
  render() {
    return (
      <div>
        {/* Button for Arya */}
        <button onClick={() => this.handleClick('Arya')}>Arya</button>
        
        {/* Button for John */}
        <button onClick={() => this.handleClick('John')}>John</button>
        
        {/* Button for Bran */}
        <button onClick={() => this.handleClick('Bran')}>Bran</button>
      </div>
    );
  }
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

5.

- Use the data given below

```js
let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];
```

- Map over the data and create button for each
- Each button should have different text based on the value
- When user clicks on the button display the name of fruit in `alert`
- Don't forget to use `key` when you are using `map` on array
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define a functional component
function App() {
  // Data for fruits
  let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

  // Event handler function for button click
  const handleClick = (name) => {
    alert(name);
  };

  // Render JSX
  return (
    <div>
      {/* Map over the data and create buttons for each fruit */}
      {fruits.map((fruit) => (
        <button key={fruit.id} onClick={() => handleClick(fruit.value)}>
          {fruit.value}
        </button>
      ))}
    </div>
  );
}

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
