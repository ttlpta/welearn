/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-27 21:34:00
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `ve`
-- ----------------------------
DROP TABLE IF EXISTS `ve`;
CREATE TABLE `ve` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ten` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL,
  `khoahoc_id` int(3) NOT NULL,
  `gia_thuong` int(10) NOT NULL,
  `gia_khuyenmai` int(10) DEFAULT NULL,
  `quyenloi` varchar(555) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `soluong` int(5) DEFAULT NULL,
  `diadiem` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `thoigian` datetime NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `khoahoc` (`khoahoc_id`),
  CONSTRAINT `khoahoc` FOREIGN KEY (`khoahoc_id`) REFERENCES `khoahoc` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of ve
-- ----------------------------
