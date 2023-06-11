ALTER TABLE `p_colors` MODIFY COLUMN `primary` varchar(6) DEFAULT '6750A4';
ALTER TABLE `p_colors` MODIFY COLUMN `secondary` varchar(6) DEFAULT '958DA5';
ALTER TABLE `p_colors` MODIFY COLUMN `tertiary` varchar(6) DEFAULT 'B58392';
ALTER TABLE `p_colors` MODIFY COLUMN `neutral` varchar(6) DEFAULT '939094';
ALTER TABLE `p_sites` MODIFY COLUMN `tagline` varchar(512);
ALTER TABLE `p_sites` MODIFY COLUMN `ico` varchar(512);
ALTER TABLE `p_sites` MODIFY COLUMN `logo` varchar(512);