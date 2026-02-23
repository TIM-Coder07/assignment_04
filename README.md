<!-- Ans to the Q No 1:  -->
getElementById: Selects a single element by its unique ID. Returns one element.

getElementsByClassName: Selects all elements with a specific class name. Returns a live HTMLCollection (updates automatically if the DOM changes).

querySelector: Selects the first element that matches a CSS selector. Returns a single element.

querySelectorAll: Selects all elements matching a CSS selector. Returns a static NodeList (does not auto-update when DOM changes).

<!-- Ans to the Q No 2:  -->
I first create a new element, optionally set its attributes, content, or classes, and then insert it into the DOM by appending it to a parent element. This allows dynamic modification of the page structure.


<!-- Ans to the Q No 3:  -->
Event Bubbling is when an event triggered on a child element propagates upward through its parent elements in the DOM hierarchy. This means the event first happens on the target element and then moves up to ancestors, allowing parents to react to events on their children.

<!-- Ans to the Q No 4:  -->
Event Delegation is a technique where you attach a single event listener to a parent element instead of each child. It works because of event bubbling: the parent can detect events triggered by its children.
Usefulness: Reduces memory usage, allows handling dynamic elements added later, and simplifies event management.


<!-- Ans to the Q No 5:  -->
preventDefault(): Stops the default behavior of an element (e.g., prevents a link from navigating or a form from submitting).

stopPropagation(): Stops the event from bubbling up (or capturing down) the DOM, preventing parent elements from receiving the event.