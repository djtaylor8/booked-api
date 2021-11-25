function auditions(parent, args, context) {
    return context.prisma.audition.findMany()
}

module.exports = {
    auditions,
}