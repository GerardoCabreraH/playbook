const TweetService = require('./../../app/services/tweetService')

describe("Tests for TweetService", () => {

  test("Create a new tweet", () => {
    const tweet = TweetService.create("tweet", "GerardoCabreraH")
    expect(tweet.message).toBe("tweet")
    expect(tweet.username).toBe("GerardoCabreraH")
    expect(tweet.usersRetweet).not.toBeUndefined()
  })

  test("Add a new userRetweet", () => {
    const tweet = TweetService.create("tweet", "GerardoCabreraH")
    TweetService.addUserRetweet(tweet, "UserRetweet1")
    expect(tweet.usersRetweet).toContain("UserRetweet1")
  })

})