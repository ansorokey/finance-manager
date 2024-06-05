import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import accounts from "./accounts";

// Axios (used by plaid) does not work well with edge
export const runtime = 'edge';

// All routes are prepended with /api
const app = new Hono().basePath('/api')

app.route("/accounts", accounts);

export const GET = handle(app)
export const POST = handle(app)
