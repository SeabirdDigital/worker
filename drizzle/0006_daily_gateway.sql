CREATE TABLE `p_site_users` (
	`user_email` varchar(512) NOT NULL,
	`site_id` varchar(24) NOT NULL,
	`clearance` enum('admin','moderator','writer','spectator') NOT NULL,
	PRIMARY KEY(`site_id`,`user_email`)
);

CREATE TABLE `p_users` (
	`email` varchar(512) NOT NULL,
	`username` varchar(32) PRIMARY KEY NOT NULL,
	`given_name` varchar(32) NOT NULL,
	`surname` varchar(32) NOT NULL,
	`pfp` varchar(512));
