import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/index.d.js'

const app = new Hono()
const prisma = new PrismaClient()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
