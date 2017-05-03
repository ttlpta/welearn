/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-03 07:19:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `parent_id` int(3) DEFAULT '0',
  `lft` int(3) DEFAULT NULL,
  `rght` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Người lớn', '0', '1', '6');
INSERT INTO `categories` VALUES ('2', 'Trẻ em', '0', '7', '8');
INSERT INTO `categories` VALUES ('3', 'Bán hàng', '1', '2', '3');
INSERT INTO `categories` VALUES ('4', 'Bất động sản', '1', '4', '5');
