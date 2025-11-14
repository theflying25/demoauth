import "dotenv/config";

console.log(process.env.DATABASE_URL); // 👈 test line

export const prismaConfig = {
  url: process.env.DATABASE_URL!,
};
