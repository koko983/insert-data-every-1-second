CREATE TABLE IF NOT EXISTS `clients_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gender` varchar(6) NOT NULL,
  `codename` varchar(20) NOT NULL,
  `balance` int(11) NOT NULL,
  `creation_time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
