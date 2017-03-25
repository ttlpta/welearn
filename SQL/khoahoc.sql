/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-25 17:47:15
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `khoahoc`
-- ----------------------------
DROP TABLE IF EXISTS `khoahoc`;
CREATE TABLE `khoahoc` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ten` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL DEFAULT '',
  `mieutangan` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `luotxem` int(10) NOT NULL DEFAULT '0',
  `tacgia` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `anh` varchar(555) COLLATE utf8_vietnamese_ci NOT NULL,
  `video_youtube` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL,
  `noidung` varchar(755) COLLATE utf8_vietnamese_ci NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of khoahoc
-- ----------------------------
