import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

// Axios (used by plaid) does not work well with edge
export const runtime = 'edge';

// All routes are prepended with /api
const app = new Hono().basePath('/api')

// a simple route
app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

// parameter route
// app.get('/test/:testId', (c) => {
//     const testId = c.req.param('testId');

//     console.log('Test route ' + testId);

//     return c.json({message: 'Test route ' + testId});
// })

// Zod params validations
app.get('/test/:testId',
    zValidator(
      'param',
      z.object({
        testId: z.string(),
      })
    ),
    (c) => {
      const {testId} = c.req.valid('param');
      return c.json(
        {
          ok: true,
          message: 'Created!',
        }, 201
      )
    }
  )

export const GET = handle(app)
export const POST = handle(app)
