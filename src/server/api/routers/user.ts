import { z } from "zod"

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc"
import { db } from "@/server/db"

export const userRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ input }) => {
      const user = await db.user.findUnique({
        where: {
          id: input.id,
        },
      })

      if (!user) {
        // TODO: Improve error handling
        console.log("User not found")
        return null
      }

      return user
    }),
})
