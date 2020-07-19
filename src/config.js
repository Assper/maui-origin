export const config = {
  port: process.env.CONFIG,
  envUrl: process.env.ENV_URL,
  urls: {
    dev: process.env.DEV_URL,
    test: process.env.TEST_URL,
    live: process.env.LIVE_URL
  }
}
