/*
Navicat MySQL Data Transfer

Source Server         : local-connection
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-17 16:43:45
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
  `tongtien` int(20) DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Ve` (`ve_id`),
  KEY `Khach hang` (`khachhang_id`),
  CONSTRAINT `Khach hang` FOREIGN KEY (`khachhang_id`) REFERENCES `khachhang` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Ve` FOREIGN KEY (`ve_id`) REFERENCES `ve` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of donhang
-- ----------------------------
INSERT INTO `donhang` VALUES ('7', '8', '2', '1', '', '1', '2', '12', '2017-04-05 03:51:03', '2017-04-07 04:25:23');
INSERT INTO `donhang` VALUES ('9', '12', '2', '1', '', '0', '2', '12', '2017-04-07 02:40:26', '2017-04-07 02:40:26');
INSERT INTO `donhang` VALUES ('10', '15', '5', '1', '', '1', '1', '12333', '2017-04-07 03:19:32', '2017-04-07 07:28:07');
INSERT INTO `donhang` VALUES ('11', '15', '6', '1', '', '0', '3', '2', '2017-04-07 03:19:32', '2017-04-07 07:28:59');
INSERT INTO `donhang` VALUES ('12', '15', '2', '1', '', '1', '2', '12', '2017-04-07 03:19:32', '2017-04-07 07:28:07');
INSERT INTO `donhang` VALUES ('13', '16', '3', '8', '', '0', '3', '24', '2017-04-07 03:20:35', '2017-04-07 03:20:35');
INSERT INTO `donhang` VALUES ('14', '18', '2', '1', '', '0', '2', '12', '2017-04-10 02:21:53', '2017-04-10 02:21:53');
