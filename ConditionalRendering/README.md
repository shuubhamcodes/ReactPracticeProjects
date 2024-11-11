Conditional Rendering
Conditional rendering in React means displaying or hiding elements based on certain conditions. React’s declarative nature allows us to use JavaScript expressions directly in the JSX to control the rendered output.

1. Basic Conditional Rendering Using if-else Statements
If you need to display a component based on a simple condition, an if-else statement works well.

jsx
Copy code
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

// Usage:
<Greeting isLoggedIn={true} />
In this example, if isLoggedIn is true, the component will display "Welcome back!" Otherwise, it displays "Please sign up."

2. Using Ternary Operators for Shorter Conditions
Ternary operators are useful for simple conditions where you want a concise solution.

jsx
Copy code
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign up."}</h1>;
}
3. Logical && Operator
For cases where you only want to render a component if a condition is true, you can use the && operator.


function WarningBanner({ warn }) {
  return (
    <div>
      {warn && <p>Warning: You have unsaved changes!</p>}
    </div>
  );
}

// Usage:
<WarningBanner warn={true} />
4. Combining Multiple Conditions
If you have multiple conditions, you can use nested conditions, switch statements, or even break the logic into smaller functions.

Building an Example: Show and Hide Components
Let’s create a ToggleButton component that shows and hides a message when clicked.


import React, { useState } from 'react';

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message is visible!</p>}
    </div>
  );
}

export default ToggleButton;
In this example:

We use useState to manage the visibility of a message.
The toggleVisibility function inverts the current state.
The message is displayed only when isVisible is true.
