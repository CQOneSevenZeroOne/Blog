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

 Date: 01/04/2018 15:42:32 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `comm`
-- ----------------------------
DROP TABLE IF EXISTS `comm`;
CREATE TABLE `comm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usrname` varchar(20) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `artid` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `ptime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `comm`
-- ----------------------------
BEGIN;
INSERT INTO `comm` VALUES ('16', '1212', 'fifas基地撒娇', '1', '1223@weqwe.ccom', '2018-01-04 14:27:10');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
