import { relations } from "drizzle-orm";
import {
  mysqlEnum,
  mysqlTable,
  primaryKey,
  varchar,
} from "drizzle-orm/mysql-core";
import { sites } from "./sites";

export const users = mysqlTable("users", {
  email: varchar("email", { length: 512 }).primaryKey(),
  givenName: varchar("given_name", { length: 32 }),
  surname: varchar("surname", { length: 32 }),
  pfp: varchar("pfp", { length: 512 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  sites: many(sites),
}));

export const siteUsers = mysqlTable(
  "site_users",
  {
    userEmail: varchar("user_email", { length: 512 }).references(
      () => users.email
    ),
    siteId: varchar("site_id", { length: 24 }).references(() => sites.id),
    clearance: mysqlEnum("clearance", [
      "admin",
      "moderator",
      "writer",
      "spectator",
    ]).notNull(),
  },
  (t) => ({
    pk: primaryKey(t.userEmail, t.siteId),
  })
);

export const usersToGroupsRelations = relations(siteUsers, ({ one }) => ({
  user: one(users, {
    fields: [siteUsers.userEmail],
    references: [users.email],
  }),
  site: one(sites, {
    fields: [siteUsers.siteId],
    references: [sites.id],
  }),
}));
