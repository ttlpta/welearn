/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-27 21:57:33
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `khachhang`
-- ----------------------------
DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE `khachhang` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `danhxung` int(1) NOT NULL,
  `ten` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL,
  `dienthoai` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL,
  `namsinh` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `khuvuc` varchar(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `lydobiet` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `datungthamgia` int(1) NOT NULL,
  `nguoigioithieu` varchar(155) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of khachhang
-- ----------------------------
