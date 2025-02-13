const Tweet = require('./../../app/models/tweet')

describe("Unit Tests for Tweet class", () => {

  test('1) Create empty object', () => {
    const tweet = new Tweet()
    expect(tweet.message).toBeUndefined()
    expect(tweet.username).toBeUndefined()
  })

	test('2) Create a tweet object', () => {
    const tweet = new Tweet("I'm the tweet", "GerardoCabreraH")
		expect(tweet.message).toBe("I'm the tweet")
		expect(tweet.username).toBe("GerardoCabreraH")
	});
})
