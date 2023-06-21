import { eq } from "drizzle-orm";
import { z } from "zod";
import { colors, hosts, restaurantData, sites } from "~/db/sites";
import db from "~/utils/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export type Site = {
	id: string;
	name: string;
	tagline: string;
	ico: string;
	logo: string;
	hosts: { siteId: string; host: string }[];
};

export const sitesRouter = createTRPCRouter({
	get: publicProcedure
		.input(z.object({ id: z.string().nullable() }))
		.query(async ({ input }) => {
			if (input.id)
				return (await db.select().from(sites)).find(
					(site) => site.id == input.id
				);

			return db.query.sites.findMany({
				with: {
					hosts: true,
				},
			});
		}),
	new: publicProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string(),
				tagline: z.string().nullable(),
				colors: z.object({
					primary: z.string().nullable(),
					secondary: z.string().nullable(),
					tertiary: z.string().nullable(),
					neutral: z.string().nullable(),
				}),
				hosts: z.array(z.string()),
				restaurantData: z
					.object({
						phone: z.string(),
						email: z.string(),
						address: z.string(),
					})
					.nullish(),
			})
		)
		.mutation(async ({ input }) => {
			await db.insert(sites).values({
				id: input.id,
				name: input.name,
				tagline: input.tagline,
			});

			for (let i = 0; i < input.hosts.length; i++) {
				const host = input.hosts[i];

				if (host)
					await db.insert(hosts).values({
						siteId: input.id,
						host,
					});
			}

			await db.insert(colors).values({
				siteId: input.id,
				...input.colors,
			});

			if (input.restaurantData)
				await db.insert(restaurantData).values({
					siteId: input.id,
					...input.restaurantData,
				});
		}),
	delete: publicProcedure.input(z.string()).mutation(async ({ input }) => {
		await db.delete(sites).where(eq(sites.id, input));
	}),
});
