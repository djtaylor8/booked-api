function auditions(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).auditions()
  }
  
  module.exports = {
    auditions,
  }