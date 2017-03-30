/*
Navicat MySQL Data Transfer

Source Server         : local-connection
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-30 16:36:01
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
  `khoahoc_id` int(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Ve` (`ve_id`),
  KEY `Khach hang` (`khachhang_id`),
  CONSTRAINT `Khach hang` FOREIGN KEY (`khachhang_id`) REFERENCES `khachhang` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Ve` FOREIGN KEY (`ve_id`) REFERENCES `ve` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of donhang
-- ----------------------------
INSERT INTO `donhang` VALUES ('1', '1', '2', '11', '', '1', '2', '2017-03-28 03:46:57', '2017-03-28 03:52:12');
INSERT INTO `donhang` VALUES ('2', '1', '5', '13', '', '1', '1', '2017-03-29 07:25:35', '2017-03-29 07:25:35');
INSERT INTO `donhang` VALUES ('3', '1', '5', '23', 'aa', '1', '1', '2017-03-30 15:59:47', '2017-03-30 15:59:51');
