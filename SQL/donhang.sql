/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-27 22:24:16
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
  `note` varchar(555) COLLATE utf8_vietnamese_ci NOT NULL,
  `trangthai` int(1) NOT NULL COMMENT 'Chưa liên lạc, Chờ thanh toán, Đã Thanh toán',
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Ve` (`ve_id`),
  KEY `Khach hang` (`khachhang_id`),
  CONSTRAINT `Khach hang` FOREIGN KEY (`khachhang_id`) REFERENCES `khachhang` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Ve` FOREIGN KEY (`ve_id`) REFERENCES `ve` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of donhang
-- ----------------------------
