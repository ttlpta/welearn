/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-03 07:20:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ve
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
  `thoigian_batdau` datetime NOT NULL,
  `thoigian_ketthuc` datetime NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `khoahoc` (`khoahoc_id`),
  CONSTRAINT `khoahoc` FOREIGN KEY (`khoahoc_id`) REFERENCES `khoahoc` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of ve
-- ----------------------------
INSERT INTO `ve` VALUES ('1', 'Sài gòn', '1', '123', '12', '<p>tessst ssd</p>\r\n', '1', null, 'Sài Gòn', '2017-03-27 14:35:00', '2017-04-08 08:46:00', '2017-03-27 14:35:45', '2017-04-08 08:46:23');
INSERT INTO `ve` VALUES ('2', 'very vip', '1', '1234', null, 'tttttt', '1', null, 'Hà Nội', '2017-04-04 15:22:00', '2017-11-08 09:10:00', '2017-04-04 15:23:20', '2017-04-08 09:10:49');
INSERT INTO `ve` VALUES ('3', 'Ve new ve', '2', '123', '12', '', '1', null, '1234', '2017-04-08 08:37:00', '2017-04-08 08:40:00', '2017-04-08 08:41:22', '2017-04-24 13:52:08');
INSERT INTO `ve` VALUES ('4', 'Vip', '3', '1111', '11', 'Choi', '1', null, 'Hà Nội', '2017-04-24 13:50:00', '2017-04-24 16:50:00', '2017-04-24 13:51:29', '2017-04-24 13:51:29');
