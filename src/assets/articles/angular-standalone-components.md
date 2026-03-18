# Angular Standalone Components Architecture

Angular Standalone components are a new paradigm in Angular development that allows you to build applications without `NgModules`. This significantly reduces boilerplate and makes the framework easier to learn and use.

## Why Standalone?

With standalone components, directives, and pipes, you can:
- **Reduce boilerplate**: No more `NgModule` declarations.
- **Simplify lazy loading**: Directly load components in your routes.
- **Easier mental model**: Everything is self-contained.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<h1>Hello World!</h1>`
})
export class HelloComponent {}
```

## Migration

Migrating to standalone is relatively simple thanks to the Angular CLI migration schematic. Just run:

```bash
ng generate @angular/core:standalone
```

This changes everything automatically!
