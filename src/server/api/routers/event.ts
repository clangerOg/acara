import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc"
import { db } from "@/server/db"
import { createEventSchema } from "@/server/schemas"
import { z } from "zod"

export const eventRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const res = await db.event.findUnique({
        where: {
          id: input.id,
        },
      })

      return res
    }),
  create: adminProcedure
    .input(createEventSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id

      const res = await db.event.create({
        data: {
          name: input.name,
          description: input.description,
          location: input.location,
          draft: input.draft,
          start: input.startDate,
          end: input.endDate,
          creatorId: userId,
        },
      })

      return res
    }),
  getAll: protectedProcedure.query(async () => {
    const res = await db.event.findMany()

    return res
  }),
})
