/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : welearn

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-03 07:20:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tacgia
-- ----------------------------
DROP TABLE IF EXISTS `tacgia`;
CREATE TABLE `tacgia` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ten` varchar(55) COLLATE utf8_vietnamese_ci NOT NULL DEFAULT '',
  `anh` varchar(555) COLLATE utf8_vietnamese_ci NOT NULL,
  `mieuta` longtext COLLATE utf8_vietnamese_ci,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

-- ----------------------------
-- Records of tacgia
-- ----------------------------
INSERT INTO `tacgia` VALUES ('17', 'date', 'USbmDEFRR02.jpg', '', '2017-03-25 07:51:55', '2017-03-25 07:51:55');
INSERT INTO `tacgia` VALUES ('18', 'Phạm Tuấn Anh', 'SIJQ0T2z9gScreenshot (12).png', '<h5 class=\'information-text\'>TRẦN NAM ANH - bậc thầy huấn luyện về giọng nói nổi tiếng trong\r\n                                và ngoài nước, với hơn 22 năm kinh nghiệm trong nghề. </h5>\r\n                            <h5 class=\'information-text\'>Ông xuất thân từ Huế, nhưng huấn luyện giọng cho nhiều ca sĩ,\r\n                                diễn viên miền Bắc và cả miền Nam. Đặc biệt, ông được công nhận là chuyên gia huấn luyện\r\n                                tiếng nói (Voice Coach), đã đào tạo và giúp cho rất nhiều diễn giả, MC, ca sĩ, diễn\r\n                                viên, xướng ngôn viên, hoa hậu,... thành công tuyệt đỉnh khi đứng trên sân khấu. Hiện\r\n                                ông là Trưởng Khoa tiếng nói trường Đại học Sân khấu điện ảnh Tp.HCM.</h5>\r\n                            <h5 class=\'information-text\'>Khách hàng tiêu biểu</h5>\r\n                            <h5 class=\'information-text\'>• Các Đài phát thanh và truyền hình: Đài Tiếng nói nhân dân Tp\r\n                                HCM (VOH), VTV, HTV, Vĩnh Long (THVL), Bà rịa - Vũng tàu (BRT)...</h5>\r\n                            <h5 class=\'information-text\'>• NVH Thanh Niên Tp.HCM: đào tạo hơn 60 khóa MC, 80 khóa Nghệ\r\n                                thuật nói chuyện trước công chúng.</h5>\r\n                            <h5 class=\'information-text\'>Những học trò hiện nay là những diễn giả, nghệ sỹ tên tuổi\r\n                                như:</h5>\r\n                            <h5 class=\'information-text\'>• Diễn giả: Quách Tuấn Khanh, Trần Đức Tuấn, Lê Nhật Trường\r\n                                Chinh, Hồng Phương Lan...</h5>\r\n                            <h5 class=\'information-text\'>• SK kịch Idecaf: Đại Nghĩa, Đình Toàn, Lương thế Thành, Hoàng\r\n                                Anh, Lê Khánh, Xuân Thùy...</h5>\r\n                            <h5 class=\'information-text\'>• SK kịch Hồng Vân: Thanh Thúy, Đức Thịnh, Ốc Thanh Vân, Hòa\r\n                                Hiệp, Bá Thắng, Hoàng Thy...</h5>\r\n                            <h5 class=\'information-text\'>• SK kịch Sài Gòn: Bảo Châu, Trần Tuấn, Tấn Hưng, Đại Ngọc\r\n                                Trâm, Huỳnh Ngân, Việt Hà, Tiết Cương... </h5>\r\n                            <h5 class=\'information-text\'>• SK kịch 5B Võ văn Tần: Lê Phương, Quý Bình, Tuyết Thu, Cát\r\n                                Tường, Lê Bê La...</h5>\r\n                            <h5 class=\'information-text\'>• Những nghệ sỹ hoạt động tự do: Kiều Oanh, Việt Hương, Thúy\r\n                                Nga, Gia Bảo, Khương Ngọc, Quang Tuấn, Tăng Bảo Quyên, Mai Phương, Minh Béo...</h5>\r\n                            <h5 class=\'information-text\'></h5>', '2017-03-25 08:06:34', '2017-04-06 06:00:58');
INSERT INTO `tacgia` VALUES ('19', 'test', 'NFLNxo6mo814952_458715380849494_1158297841_n.jpg', '<p>TRẦN NAM ANH - bậc thầy huấn luyện về giọng n&oacute;i nổi tiếng trong v&agrave; ngo&agrave;i nước, với hơn 22 năm kinh nghiệm trong nghề.</p>\r\n\r\n<p>&Ocirc;ng xuất th&acirc;n từ Huế, nhưng huấn luyện giọng cho nhiều ca sĩ, diễn vi&ecirc;n miền Bắc v&agrave; cả miền Nam. Đặc biệt, &ocirc;ng được c&ocirc;ng nhận l&agrave; chuy&ecirc;n gia huấn luyện tiếng n&oacute;i (Voice Coach), đ&atilde; đ&agrave;o tạo v&agrave; gi&uacute;p cho rất nhiều diễn giả, MC, ca sĩ, diễn vi&ecirc;n, xướng ng&ocirc;n vi&ecirc;n, hoa hậu,... th&agrave;nh c&ocirc;ng tuyệt ', '2017-03-25 08:27:45', '2017-04-02 00:52:33');
INSERT INTO `tacgia` VALUES ('20', 'rrrr', 'B5iAyaagoo806_557801287568024_1545750434_n.jpg', '<p><strong>xxxx</strong></p>\r\n', '2017-03-25 08:29:24', '2017-03-25 09:04:23');
INSERT INTO `tacgia` VALUES ('21', 'test2rrrr', '59862_120639381423004_1018082249_n.jpg', '<p><strong>xxxxx</strong></p>\r\n', '2017-03-25 09:04:52', '2017-03-25 09:33:28');
