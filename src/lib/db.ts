import { PrismaClient } from '@prisma/client';

// Ensure the PrismaClient is instantiated only once
// This is a common pattern for Next.js and Prisma to avoid too many connections
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
