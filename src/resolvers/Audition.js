function createdBy(parent, args, context) {
    return context.prisma.audition.findUnique({ where: { id: parent.id } }).createdBy()
}

module.exports = {
    createdBy,
}