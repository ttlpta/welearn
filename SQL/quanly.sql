/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-25 09:49:40
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `quanly`
-- ----------------------------
DROP TABLE IF EXISTS `quanly`;
CREATE TABLE `quanly` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL DEFAULT '',
  `password` varchar(155) COLLATE utf8_vietnamese_ci NOT NULL,
  `role` int(1) NOT NULL DEFAULT '1',
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of quanly
-- ----------------------------
INSERT INTO `quanly` VALUES ('1', '1', '3', '3', '2017-02-08 09:12:47', '2017-03-07 09:12:50');
INSERT INTO `quanly` VALUES ('2', 'ttlpta', '$2y$10$fUqk7XauimrRVlKJYLYGNe6g4Ng.w7NMme2nFFM/8OIV0F7WqT3Hy', '1', '2017-03-25 02:42:21', '0000-00-00 00:00:00');
