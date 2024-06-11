import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import accounts from "./accounts";

// Axios (used by plaid) does not work well with edge
export const runtime = 'edge';

// All routes are prepended with /api
const app = new Hono().basePath('/api');

// all sub routes must be chained in order to export
const routes = app
    .route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
