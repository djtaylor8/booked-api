function newAuditionSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_AUDITION")
  }
  
  const newAudition = {
    subscribe: newAuditionSubscribe,
    resolve: payload => {
      return payload
    },
  }
  
  module.exports = {
    newAudition,
  }