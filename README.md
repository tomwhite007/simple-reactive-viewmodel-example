# Simple Reactive Viewmodel Example

A simple example of how to implement reactive programming using the view model pattern with the `async` pipe. This structure allows the use of `ChangeDetectionStrategy.OnPush` in all components - which in large apps gives a noticeable performance benefit.

Doing this allows you to avoid subscribes inside your component, except if you need side effects to be called.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.
