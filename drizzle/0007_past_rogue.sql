DROP TABLE `p_users`;
ALTER TABLE `p_site_users` DROP PRIMARY KEY;

ALTER TABLE `p_site_users` ADD `user_id` varchar(512) NOT NULL;
ALTER TABLE `p_site_users` DROP COLUMN `user_email`;
ALTER TABLE `p_site_users` ADD PRIMARY KEY(`site_id`,`user_id`);