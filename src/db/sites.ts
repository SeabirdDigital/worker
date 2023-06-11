import { relations } from "drizzle-orm";
import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { pages } from "./pages";
import { siteUsers } from "./users";

export const sites = mysqlTable("p_sites", {
	id: varchar("id", { length: 24 }).primaryKey(),
	name: varchar("name", { length: 512 }).notNull(),
	tagline: varchar("tagline", { length: 512 }),
	ico: varchar("ico", { length: 512 }),
	logo: varchar("logo", { length: 512 }),
});

export const sitesRelations = relations(sites, ({ many, one }) => ({
	pages: many(pages),
	hosts: many(hosts),
	colors: one(colors, { fields: [sites.id], references: [colors.siteId] }),
	restaurantData: one(restaurantData, {
		fields: [sites.id],
		references: [restaurantData.siteId],
	}),
	users: many(siteUsers),
}));

export const hosts = mysqlTable("p_hosts", {
	host: varchar("host", { length: 255 }).primaryKey(),
	siteId: varchar("siteId", { length: 24 }),
});

export const hostsRelations = relations(hosts, ({ one }) => ({
	site: one(sites, {
		fields: [hosts.siteId],
		references: [sites.id],
	}),
}));

export const colors = mysqlTable("p_colors", {
	siteId: varchar("siteId", { length: 24 }).primaryKey(),
	primary: varchar("primary", { length: 6 }).default("6750A4"),
	secondary: varchar("secondary", { length: 6 }).default("958DA5"),
	tertiary: varchar("tertiary", { length: 6 }).default("B58392"),
	neutral: varchar("neutral", { length: 6 }).default("939094"),
});

export const colorsRelations = relations(colors, ({ one }) => ({
	site: one(sites, {
		fields: [colors.siteId],
		references: [sites.id],
	}),
}));

export const restaurantData = mysqlTable("p_restaurant_data", {
	siteId: varchar("siteId", { length: 24 }).primaryKey(),
	phone: varchar("phone", { length: 24 }).notNull(),
	email: varchar("email", { length: 512 }).notNull(),
	address: varchar("address", { length: 512 }).notNull(),
});

export const restaurantDataRelations = relations(restaurantData, ({ one }) => ({
	site: one(sites, {
		fields: [restaurantData.siteId],
		references: [sites.id],
	}),
}));
