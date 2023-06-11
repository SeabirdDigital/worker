CREATE TABLE `p_pages` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`siteId` varchar(24) NOT NULL,
	`slug` varchar(24) NOT NULL,
	`data` json NOT NULL);

CREATE TABLE `p_restaurant` (
	`siteId` varchar(24) PRIMARY KEY NOT NULL,
	`primary` varchar(6) NOT NULL,
	`secondary` varchar(6) NOT NULL,
	`tertiary` varchar(6) NOT NULL,
	`neutral` varchar(6) NOT NULL);

CREATE TABLE `p_restaurant_data` (
	`siteId` varchar(24) PRIMARY KEY NOT NULL,
	`phone` varchar(24) NOT NULL,
	`email` varchar(512) NOT NULL,
	`address` varchar(512) NOT NULL);

CREATE TABLE `p_sites` (
	`id` varchar(24) PRIMARY KEY NOT NULL,
	`name` varchar(512) NOT NULL,
	`tagline` varchar(512) NOT NULL,
	`ico` varchar(512) NOT NULL,
	`logo` varchar(512) NOT NULL);

CREATE TABLE `site_users` (
	`user_email` varchar(512) NOT NULL,
	`site_id` varchar(24) NOT NULL,
	`clearance` enum('admin','moderator','writer','spectator') NOT NULL,
	PRIMARY KEY(`site_id`,`user_email`)
);

CREATE TABLE `users` (
	`email` varchar(512) PRIMARY KEY NOT NULL,
	`given_name` varchar(32),
	`surname` varchar(32),
	`pfp` varchar(512));
