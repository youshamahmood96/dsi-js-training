// react events


// ----------------Synthetic events-----------------------------

// A synthetic event is a cross-browser wrapper around the browser’s native event.
// React implements a synthetic events system that brings consistency and high performance to React apps and interfaces. 
// It achieves consistency by normalizing events so that they have the same properties across different browsers and platforms.
// It achieves high performance by automatically using event delegation
// In actuality, React doesn’t attach event handlers to the nodes themselves. 
// Instead, a single event listener is attached to the root of the document.
// When an event is fired, React maps it to the appropriate component element.

// why synthetic events?

// React normalizes events so that they have consistent properties across different browsers.

// ----------------Synthetic events-----------------------------

// When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. 
// Instead, just provide a listener when the element is initially rendered.

// hooks?

// special functions whcih lets use to hook into react features. usually functions are stateless, but we can introduce state
// using the useState hook.

// useState

// single state (array,object)
// multiple state

// useEffect
// simple api
// cleanup, why needed

