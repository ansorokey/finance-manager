# Tutorial Timestamp
[https://youtu.be/N_uNKAus0II?t=732]

## Start the project
`npm run dev`
(defaults to localhost:3000)

## Routing
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
