import { relations } from "drizzle-orm";
import {
	mysqlEnum,
	mysqlTable,
	primaryKey,
	varchar,
} from "drizzle-orm/mysql-core";
import { sites } from "./sites";

export const siteUsers = mysqlTable(
	"p_site_users",
	{
		userId: varchar("user_id", { length: 512 }),
		siteId: varchar("site_id", { length: 24 }).references(() => sites.id),
		clearance: mysqlEnum("clearance", [
			"admin",
			"moderator",
			"writer",
			"spectator",
		]).notNull(),
	},
	(t) => ({
		pk: primaryKey(t.userId, t.siteId),
	})
);
