ALTER TABLE `users` MODIFY COLUMN `given_name` varchar(32) NOT NULL;
ALTER TABLE `users` MODIFY COLUMN `surname` varchar(32) NOT NULL;
ALTER TABLE `users` ADD `username` varchar(32);