import { describe, it, expect } from 'vitest'
import { CORS_ALLOW, isOriginAllowed } from './index'

describe('worker-utils', () => {
  it.each([
    ['https://ball.exchange', true],
    ['https://pancakeswap.com', true],
    ['https://aptosball.exchange', false],
    ['https://aptos.ball.exchange', true],
    ['https://ball.exchange.com', false],
    ['http://ball.exchange', false],
    ['https://pancake.run', false],
    ['https://test.pancake.run', true],
    ['http://localhost:3000', true],
    ['http://localhost:3001', true],
  ])(`isOriginAllowed(%s)`, (origin, expected) => {
    expect(isOriginAllowed(origin, CORS_ALLOW)).toBe(expected)
  })
})
