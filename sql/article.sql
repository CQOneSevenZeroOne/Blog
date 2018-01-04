/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : blog

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 01/04/2018 15:42:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `cont` text,
  `author` varchar(20) DEFAULT NULL,
  `clicknum` int(11) DEFAULT '0',
  `commentnum` int(11) DEFAULT '0',
  `ptime` datetime DEFAULT NULL,
  `catname` varchar(10) DEFAULT NULL,
  `catid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `article`
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES ('2', '王企鹅', '<p>放弃噶</p>', '气温', '0', '0', '2018-01-04 13:28:00', '阿发a', '0'), ('3', '123', '<p>123</p>', '123', '0', '0', '2018-01-04 14:31:00', '123', '0'), ('4', '123', '<p>123</p>', '123', '0', '0', '2018-01-04 14:40:44', '123', '0'), ('5', '123', '<h1 style=\"text-align: center;\">这是一片测试文章</h1>', '123', '0', '0', '2018-01-04 14:42:14', '123', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
