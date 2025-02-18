import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(() => {
  try {
    return {
      message: 'Hello World',
      timestamp: new Date().toISOString()
    }
  } catch {
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})
