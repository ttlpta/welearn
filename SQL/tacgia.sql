/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-25 12:25:09
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `tacgia`
-- ----------------------------
DROP TABLE IF EXISTS `tacgia`;
CREATE TABLE `tacgia` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ten` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL DEFAULT '',
  `anh` varchar(555) COLLATE utf8_vietnamese_ci NOT NULL,
  `mieuta` varchar(555) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of tacgia
-- ----------------------------
