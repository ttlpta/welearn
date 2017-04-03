/*
Navicat MySQL Data Transfer

Source Server         : local-connection
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-03 14:57:59
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
  `quyenloi` varchar(2000) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `trangthai` int(1) NOT NULL,
  `soluong` int(5) NOT NULL,
  `diadiem` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `thoigian` datetime NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of ve
-- ----------------------------
INSERT INTO `ve` VALUES ('2', 'asdasdasdd  dasdasdasdasd asddas', '2', '123', '12', 'asd', '1', '123', 'dd', '2017-03-27 06:59:00', '2017-03-27 06:59:50', '2017-03-27 09:28:55');
INSERT INTO `ve` VALUES ('3', 'general', '3', '9', '3', '<p>ddasdas</p>', '0', '3', 'dasdasdasd', '2017-03-27 07:02:00', '2017-03-27 07:03:32', '2017-03-27 08:30:22');
INSERT INTO `ve` VALUES ('5', 'adasdas', '1', '12333', '12333', '', '0', '123', 'dddd', '2017-03-27 08:06:00', '2017-03-27 08:07:23', '2017-03-27 08:07:23');
INSERT INTO `ve` VALUES ('6', 'vip', '3', '123', '2', '<p>ddasdas tttttttttttttttttttttttttttttttttt</p>', '0', '123', '123', '2017-03-27 08:16:00', '2017-03-27 08:29:48', '2017-03-27 08:29:48');
INSERT INTO `ve` VALUES ('7', 'gold', '3', '1234', '12', '<p>ddasddasda123 12312321as</p>', '1', '123', 'asd', '2017-03-30 16:52:10', '2017-03-28 16:52:14', '2017-03-30 16:52:18');
