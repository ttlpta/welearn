/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-24 22:45:54
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `giohang`
-- ----------------------------
DROP TABLE IF EXISTS `giohang`;
CREATE TABLE `giohang` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `khachhang_id` int(10) NOT NULL,
  `ve_id` int(10) NOT NULL,
  `soluong` int(10) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of giohang
-- ----------------------------
