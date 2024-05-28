# Tutorial Timestamp
[https://youtu.be/N_uNKAus0II?t=732]

## Running the project for development
`npm run dev`
(defaults to localhost:3000)

## Pages and Routing
- Nextjs uses folder and file based routing.
- `page.tsx` within any folder of the app folder represents that route.
- Use square brackets to denote a variable path name.

```
app/
 L page.tsx
/

test/
 L page.tsx
/test

test/
 L [testId]/
  L page.tsx
/test/<testId>
```

## ShadCn
ShadCN is *not* a component library. It is a collection of re-usable components that can be copied and pasted into the app.
ShadCn components can be installed once and then modified freely to fit your app in different ways.
A **variant** is a pre-defined set of classes that we can add to style a single component different ways. Rather than making differnt components for an accept button and a cancel button, we can simply have one button with two defined variants.
