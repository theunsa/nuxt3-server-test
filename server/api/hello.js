export default defineEventHandler
((event) => {
  return {
    hello : 'wonderful world ' + Math.random(),
    date: new Date()
  }
})