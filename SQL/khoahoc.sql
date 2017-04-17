/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-28 21:27:57
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `khoahoc`
-- ----------------------------
DROP TABLE IF EXISTS `khoahoc`;
CREATE TABLE `khoahoc` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ten` varchar(55) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `mieutangan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `luotxem` int(10) NOT NULL DEFAULT '0',
  `tacgia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `anh` varchar(555) COLLATE utf8_unicode_ci NOT NULL,
  `video_youtube` varchar(555) COLLATE utf8_unicode_ci NOT NULL,
  `noidung` varchar(755) COLLATE utf8_unicode_ci NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `theloai` int(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of khoahoc
-- ----------------------------
INSERT INTO `khoahoc` VALUES ('1', 'test  23', 'aaa', '12', '1', 'T6dPrJJr5wTulips.jpg', '<div style=\"position:relative;height:0;padding-bottom:56.25%\"><iframe src=\"https://www.youtube.com/embed/p_bVoKkPU1Q?ecver=2\" width=\"640\" height=\"360\" frameborder=\"0\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe></div>', '<p>dddd</p>\r\n', '1', '0', '2017-03-27 03:00:03', '2017-03-27 04:36:37');
