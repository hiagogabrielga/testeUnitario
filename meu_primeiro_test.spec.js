const { test, expect, describe } = require('@jest/globals')

test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4)
})