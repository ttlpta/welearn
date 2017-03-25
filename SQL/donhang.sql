/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-24 22:46:22
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `donhang`
-- ----------------------------
DROP TABLE IF EXISTS `donhang`;
CREATE TABLE `donhang` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `khachhang_id` int(10) NOT NULL,
  `ve_id` int(10) NOT NULL,
  `soluong` int(10) NOT NULL,
  `note` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of donhang
-- ----------------------------
