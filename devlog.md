# Tutorial Timestamp
[https://youtu.be/N_uNKAus0II?t=2662]
## Running the project for development
`npm run dev`
(defaults to localhost:3000)

## Pages and Routing
- Nextjs uses folder and file based routing.
- `page.tsx` (and a default export component) within any folder of the app folder represents that route.
- Use square brackets to denote a variable path name.
- Use parentheses to organize routes. THis is purely organizational, and has no effect on the route.

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
When we create an api route, we add a `route.ts` file. Within that file, we define a function for the method used to access the route.
```
api/
 L test/
  L [testId]/
   L route.ts
```

### .Next Cache
Changes made to routes make a change in the `.next` directory cache. To fix any updates to the cache, close out of any nextjs development terminals, remove the entire `.next` directory, and then run the app from the termional once again. This re-initializes the directory.

## ShadCn
ShadCN is *not* a component library. It is a collection of re-usable components that can be copied and pasted into the app.
ShadCn components can be installed once and then modified freely to fit your app in different ways.
A **variant** is a pre-defined set of classes that we can add to style a single component different ways. Rather than making differnt components for an accept button and a cancel button, we can simply have one button with two defined variants.

## Clerk

## HonoJs
