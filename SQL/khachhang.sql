/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-03 07:20:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for khachhang
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
  `khoahoctungthamgia` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `nguoigioithieu` varchar(155) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of khachhang
-- ----------------------------
INSERT INTO `khachhang` VALUES ('1', '1', 'Tuananh', '12345677', 'a@a.com', '1993', 'Hà Nội', 'khac', '0', null, null, '2017-03-27 22:32:53', '2017-03-27 22:32:59');
INSERT INTO `khachhang` VALUES ('2', '0', '234', '234', 'a111@a.com', '234', 'Đà Nẵng', '234', '0', null, '23423', '2017-04-08 09:39:38', '2017-04-08 09:39:38');
INSERT INTO `khachhang` VALUES ('3', '0', 'Phạm Tuấn Anh', '01689695393', 'a111@a.com', '1993', 'Đà Nẵng', '1231', '0', null, '12123', '2017-04-08 09:43:20', '2017-04-08 09:43:20');
INSERT INTO `khachhang` VALUES ('4', '0', 'Anh', '01689695393', 'tuananh200898@gmail.com', '1993', 'Hà Nội', 'aaaa', '0', null, 'ss', '2017-04-17 17:10:49', '2017-04-17 17:10:49');
INSERT INTO `khachhang` VALUES ('5', '1', 'Vân', '01689695393', 'tuananh2008981@gmail.com', '11111', 'Đà Nẵng', 'Báo', '0', null, '23423', '2017-04-24 13:53:01', '2017-04-24 13:53:01');
INSERT INTO `khachhang` VALUES ('6', '0', 'TEST', '01689695393', 'tuananh200898@gmail.com', '111', 'Bình Phước', '111', '1', null, 'asdasd', '2017-04-24 15:38:35', '2017-04-24 15:38:35');
INSERT INTO `khachhang` VALUES ('7', '2', 'dsadasdasd', '123123123', 'a111@a.com', '1993', 'Đà Nẵng', 'asdasdasd', '1', null, 'asdasdasd', '2017-04-24 15:41:18', '2017-04-24 15:41:18');
INSERT INTO `khachhang` VALUES ('8', '1', 'fdsfsdf', '324234', 'wer@a.com', 'asdasd', 'Đắk Lắk', 'dasdasd', '1', 'adasdsad, teadasd', 'adasda', '2017-04-24 15:45:53', '2017-04-24 15:45:53');
INSERT INTO `khachhang` VALUES ('9', '0', 'asdsad12312312', '312312', 'a111@a.com', '123', 'Cao Bằng', 'DASDSAD', '0', '', '', '2017-04-27 16:22:51', '2017-04-27 16:22:51');
