// 1
const { PrismaClient } = require("@prisma/client")

// 2
const prisma = new PrismaClient()

// 3
async function main() {
  const newAudition = await prisma.audition.create({
    data: {
        description: 'Frightened Inmate #2',
        location: 'Sample casting agency',
      },
    })
  const allAuditions = await prisma.audition.findMany()
  console.log(allAuditions)
}

// 4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })