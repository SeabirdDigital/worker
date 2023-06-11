import { relations } from "drizzle-orm";
import { json, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { sites } from "./sites";

export const pages = mysqlTable("p_pages", {
  id: serial("id").primaryKey(),
  siteId: varchar("siteId", { length: 24 }).notNull(),
  slug: varchar("slug", { length: 24 }).notNull(),
  data: json("data").notNull(),
});

export const pagesRelations = relations(pages, ({ one }) => ({
  site: one(sites, { fields: [pages.siteId], references: [sites.id] }),
}));
