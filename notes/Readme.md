# React Guidelines

## Naming component and filename

```
<!-- Filename -->
Message.tsx

<!-- Component Name -->
function Message() {}
```

## Building Components

- Create folder named `/components` and save all components on this folder

## Rendering markup with JSX

- Every component should `return()`
- Use conditional markup when rendering `condition ? true : false`
- Instead of returning `null` in a conditional. Use `conditional && <Component />`
- Use `children: ReactNode` to support children rendering

## Managing state

- `useState()`
- Avoid redundant state variables
- Avoid deeply nested structure
- Group relevant state variables

## Passing input via props

- Shape the prop of the component via interface

## Props vs State

- Props

  - Immutable
  - Unchangable
  - Input passed to a component like function args

- State
  - Internal data of a component
  - Cause a re-render
  - Can change

## Debugging React apps

- Install React Chrome tools

## Pure Components
