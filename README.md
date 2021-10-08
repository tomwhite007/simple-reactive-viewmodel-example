# Simple Reactive Viewmodel Example

A simple example of how to implement reactive programming using the view model pattern with the `async` pipe. This structure allows the use of `ChangeDetectionStrategy.OnPush` in all components - which in large apps gives a noticeable performance benefit.

Doing this allows you to avoid subscribes inside your component, except if you need side effects to be called.

The key part of the code for this implementation is in:

[src/app/book-manager/book-manager-component-state.service.ts](src/app/book-manager/book-manager-component-state.service.ts)

## Imperative Viewmodel Comparison

For comparison, I've implemented the state service imperatively:

[src/app/book-manager-imperative/book-manager-imperative-state.service.ts](src/app/book-manager-imperative/book-manager-imperative-state.service.ts)

The biggest downside of this method is not being able to use `ChangeDetectionStrategy.OnPush` in all components - without manually calling Change Detection occasionally.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.
