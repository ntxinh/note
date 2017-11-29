# 1. What is Redux?

## History of Redux
- Was developed in 2015 by Dan Abramov
- Andrew Clark joined
- Flux implementation
- Flux
  + A design pattern developed by Facebook
  + An alternative to MVC, MVP or MVVM (replace two-way data communication)
  + Variations of MVC design pattern
- In Flux, the data flow in one direction

## How Redux works
- With Redux you cannot use multiple stores, 
- and because there is only one store, there's no need for a dispatcher. 
- The store will dispatch the actions directly.
- Having one stores mean that all of your state will be located in one place
- We refer to this as the single source of truth.
- Storing everything in one place makes it much easier to reason about the data within your application.
- And since we have all of the data here, it should make it a litle easier for us to track down bugs too
- Now at this point you may be thinking that we lose modularity by storing all of the data in one object. One object does not sound very modular.
- But with Redux, modularity is obtained through functions. Instead of breaking the state up into different objects, we will create functions that are designed to manage specific leaves and branches of this state tree.

- Functional Programming:
  + Pure functions
  + Immutability
  + Composition

# 2. Understanding Reducers