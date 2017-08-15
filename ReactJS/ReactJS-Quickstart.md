QUICK START

# JSX
- You can embed any JavaScript expression in JSX by wrapping it in curly braces.

 - You can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

 - You may use quotes to specify string literals as attributes:
 ```
const element = <div tabIndex="0"></div>;
```

 - You may also use curly braces to embed a JavaScript expression in an attribute:
 ```
 const element = <img src={user.avatarUrl}></img>;
 ```
- Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. Otherwise JSX will treat the attribute as a string literal rather than an expression. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

- If a tag is empty, you may close it immediately with />, like XML:
```
const element = <img src={user.avatarUrl} />;
```
- Since JSX is closer to JavaScript than HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
```
For example, class becomes className in JSX, and tabindex becomes tabIndex
```

- JSX Prevents Injection Attacks (prevent XSS (cross-site-scripting) attacks)

- Babel compiles JSX down to React.createElement() calls.

# Rendering Elements
- Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

- React elements are immutable

- The only way to update the UI is to create a new element, and pass it to ReactDOM.render().

- React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

- Thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

# Components & Props
- Render Components
- Composing Components
- Extracting Components
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- Always start component names with a capital letter.
```
For example, <div /> represents a DOM tag, but <Welcome /> represents a component and requires Welcome to be in scope.
```

- Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top of the view hierarchy.

- Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.

- All React components must act like pure functions with respect to their props.

# State & Lifecycle
- State is similar to props, but it is private and fully controlled by the component.

- Local state is exactly that: a feature available only to classes.

- mouting & unmounting
```
These methods are called "lifecycle hooks".
componentDidMount() {} : hook runs after the component output has been rendered to the DOM
componentWillUnmount() {} : hook runs after the component is ever removed from the DOM
```

- Using State Correctly
Do Not Modify State Directly
```
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});

The only place where you can assign this.state is the constructor.
```
State Updates May Be Asynchronous
```
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct (Arrow function)
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
// Correct (Not Arrow function)
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```
State Updates are Merged
```
When you call setState(), React merges the object you provide into the current state.
For example, your state may contain several independent variables:
 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
Then you can update them independently with separate setState() calls:
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.
```

The Data Flows Down (read on https://facebook.github.io/react/docs/state-and-lifecycle.html)

# Handling Events
Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
- (*) React events are named using camelCase, rather than lowercase. (onclick vs onClick)
- (*) With JSX you pass a function as the event handler, rather than a string.
- (*) Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:
```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

vs

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

- When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

- You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default
```
this.handleClick = this.handleClick.bind(this);
```

- If you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

- If calling bind annoys you, there are two ways you can get around this.
Property initializer syntax
```
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

Arrow function
```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

- The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem.

# Conditional Rendering
- Element Variables
- Inline If with Logical && Operator
- Inline If-Else with Conditional Operator
- Preventing Component from Rendering
```
Returning null from a component's render method does not affect the firing of the component's lifecycle methods. For instance, componentWillUpdate and componentDidUpdate will still be called.
```

# Lists & Keys
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

- A "key" is a special string attribute you need to include when creating lists of elements

- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

- When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

- If you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.

- Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays:

- Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
```
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

- Embedding map() in JSX

# Forms
- Controlled Components
- In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

- In React, a <textarea> uses a value attribute instead.

- computed property name

- since setState() automatically merges a partial state into the current state, we only needed to call it with the changed parts.

# Lifting State Up

# Composition vs Inheritance
- React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

# Thinking in React

