-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: ce.kyralo.online    Database: amall
-- ------------------------------------------------------
-- Server version	8.0.19

 SET NAMES utf8mb4 ;

--
-- Table structure for table `tb_account_platform`
--

DROP TABLE IF EXISTS `tb_account_platform`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_account_platform` (
  `id` char(32) NOT NULL COMMENT '自增id',
  `uid` char(32) NOT NULL DEFAULT '' COMMENT '账号id',
  `platform_id` varchar(60) NOT NULL DEFAULT '' COMMENT '平台id',
  `platform_token` varchar(60) NOT NULL DEFAULT '' COMMENT '平台access_token',
  `type` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '平台类型 0:未知,1:facebook,2:google,3:wechat,4:qq,5:weibo,6:twitter',
  `nickname` varchar(60) NOT NULL DEFAULT '' COMMENT '昵称',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_account_platform_uid` (`uid`) USING BTREE,
  KEY `idx_account_platform_platform_id` (`platform_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='第三方用户信息';


LOCK TABLES `tb_account_platform` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_admin`
--

DROP TABLE IF EXISTS `tb_admin`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_admin` (
  `id` char(32) NOT NULL COMMENT '管理员ID',
  `name` varchar(45) NOT NULL COMMENT '管理员用户名',
  `mail` varchar(255) DEFAULT '' COMMENT '管理员邮箱',
  `password` varchar(255) NOT NULL COMMENT '管理员密码',
  `telephone` varchar(32) NOT NULL DEFAULT '' COMMENT '管理员电话',
  `sex` tinyint NOT NULL DEFAULT '2' COMMENT '0表示男, 1表示女, 2表示未知',
  `avatar_url` varchar(255) NOT NULL DEFAULT '/avatar/boy.jpg' COMMENT '管理员头像 (默认路径 “/avatar/boy.jpg”)',
  `super_key` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '超级管理员标识 (0,普通管理员  1,超级管理员)',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tb_admin_name` (`name`),
  UNIQUE KEY `uk_tb_admin_telephone` (`telephone`),
  UNIQUE KEY `uk_tb_admin_mail` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理员';


LOCK TABLES `tb_admin` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_attr`
--

DROP TABLE IF EXISTS `tb_commodity_attr`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_attr` (
  `id` char(32) NOT NULL COMMENT '销售属性ID',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '销售属性名称',
  `attr_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '销售属性描述',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='销售属性表 (产品参数)';


LOCK TABLES `tb_commodity_attr` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_attr_value`
--

DROP TABLE IF EXISTS `tb_commodity_attr_value`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_attr_value` (
  `id` char(32) NOT NULL COMMENT '销售属性值ID',
  `attr_id` char(32) NOT NULL DEFAULT '' COMMENT '销售属性ID',
  `value` varchar(255) NOT NULL DEFAULT '' COMMENT '销售属性值',
  `attr_value_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '销售属性值描述',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='销售属性值';


LOCK TABLES `tb_commodity_attr_value` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_brands`
--

DROP TABLE IF EXISTS `tb_commodity_brands`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_brands` (
  `id` char(32) NOT NULL COMMENT '品牌ID',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '品牌名称',
  `brands_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '品牌描述',
  `logo_url` varchar(255) NOT NULL DEFAULT '' COMMENT '品牌logo图片',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='品牌表';


LOCK TABLES `tb_commodity_brands` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_category`
--

DROP TABLE IF EXISTS `tb_commodity_category`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '商品类型ID',
  `parent_category_id` int DEFAULT '-1' COMMENT '父级商品类型ID 默认为 -1 表示当前商品类型无父类型',
  `name` varchar(45) NOT NULL COMMENT '商品类型 名称',
  `info` varchar(255) NOT NULL COMMENT '商品类型 类型说明',
  `icon_url` varchar(255) NOT NULL COMMENT '商品类型 图标',
  `pic_url` varchar(255) NOT NULL COMMENT '商品类型 大图',
  `is_primary` tinyint unsigned DEFAULT '0' COMMENT '0表示一级类型, 1表示其他类型(二级类型), 默认为0',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:ENABLE, 0:DISABLE, -1:DELETED',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tb_commodity_type_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品类型';


LOCK TABLES `tb_commodity_category` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_size`
--

DROP TABLE IF EXISTS `tb_commodity_size`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_size` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '商品尺码自增ID',
  `sku_id` char(32) NOT NULL DEFAULT '' COMMENT 'SKU ID',
  `size_name` varchar(32) NOT NULL COMMENT '商品尺码名',
  `size_desc` json NOT NULL COMMENT 'sku描述(商家对产品的描述) json存储 e.g: [{"name":"腰围", "value":"62-72"},{"name":"裤长", "value":"92"}]',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='sku表';


LOCK TABLES `tb_commodity_size` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_sku`
--

DROP TABLE IF EXISTS `tb_commodity_sku`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_sku` (
  `id` char(32) NOT NULL COMMENT 'SKU ID',
  `spu_id` char(32) NOT NULL DEFAULT '' COMMENT 'SPU ID',
  `merchant_id` char(32) NOT NULL DEFAULT '' COMMENT '商家ID',
  `sku_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT 'sku描述(商家对产品的描述)',
  `banner_url` text COMMENT 'banner图片 多个图片逗号分隔',
  `main_url` text COMMENT '商品介绍主图 多个图片逗号分隔',
  `commodity_parameters` text COMMENT '商品参数 {attr_value_id} 多个销售属性值逗号分隔 固定加上 颜色, 尺码属性',
  `commodity_graphic_details` text COMMENT '图文详情 图片url 多个图片逗号分隔',
  `commodity_in_effect` text COMMENT '穿着效果 图片url 多个图片逗号分隔',
  `commodity_size_specification` text COMMENT '尺码说明 {attr_value_id} (map保存尺码名) 多个销售属性值逗号分隔',
  `price_fee` int unsigned NOT NULL DEFAULT '0' COMMENT '售价，整数方式保存',
  `price_scale` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '售价，金额对应的小数位数',
  `market_price_fee` int unsigned NOT NULL DEFAULT '0' COMMENT '市场价，整数方式保存',
  `market_price_scale` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '市场价，金额对应的小数位数',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='sku表';


LOCK TABLES `tb_commodity_sku` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_commodity_sku_stock`
--

DROP TABLE IF EXISTS `tb_commodity_sku_stock`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_sku_stock` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `sku_id` char(32) NOT NULL DEFAULT '' COMMENT 'SKU ID',
  `sku_color` char(32) NOT NULL DEFAULT '' COMMENT 'SKU color',
  `sku_size_name` char(32) NOT NULL DEFAULT '' COMMENT 'SKU 商品尺码名',
  `quantity` int unsigned NOT NULL DEFAULT '0' COMMENT '库存量',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='sku库存表';


LOCK TABLES `tb_commodity_sku_stock` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `tb_commodity_spu`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_commodity_spu` (
  `id` char(32) NOT NULL COMMENT 'SPU ID',
  `brand_id` char(32) NOT NULL DEFAULT '' COMMENT '品牌ID',
  `category_id` int unsigned NOT NULL COMMENT '分类ID',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT 'spu名称',
  `spu_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT 'spu描述',
  `selling_point` varchar(255) NOT NULL DEFAULT '' COMMENT '卖点',
  `unit` varchar(255) NOT NULL DEFAULT '' COMMENT 'spu单位',
  `banner_url` text COMMENT 'banner图片 多个图片逗号分隔',
  `main_url` text COMMENT '商品介绍主图 多个图片逗号分隔',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品spu表';


LOCK TABLES `tb_commodity_spu` WRITE;
INSERT INTO `tb_commodity_spu` VALUES ('7ca2b33ce2664bb18f6b35d2674ab015','1',1,'1','1','','1','1','1',1,NULL,NULL);
UNLOCK TABLES;

--
-- Table structure for table `tb_merchant`
--

DROP TABLE IF EXISTS `tb_merchant`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_merchant` (
  `id` char(32) NOT NULL COMMENT '商家ID',
  `name` varchar(45) NOT NULL COMMENT '商家用户名',
  `mail` varchar(255) NOT NULL COMMENT '商家邮箱',
  `password` varchar(255) NOT NULL COMMENT '商家密码',
  `store_name` varchar(255) NOT NULL DEFAULT '' COMMENT '商家店名',
  `telephone` varchar(32) NOT NULL DEFAULT '' COMMENT '商家负责人电话',
  `info` varchar(255) NOT NULL COMMENT '商家业务经营说明',
  `address` varchar(255) NOT NULL COMMENT '商家地址',
  `sex` tinyint NOT NULL DEFAULT '2' COMMENT '0表示男, 1表示女, 2表示未知',
  `avatar_url` varchar(255) NOT NULL DEFAULT '/avatar/boy.jpg' COMMENT '管理员头像 (默认路径 “/avatar/boy.jpg”)',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tb_merchant_name` (`name`),
  UNIQUE KEY `uk_tb_merchant_mail` (`mail`),
  UNIQUE KEY `uk_tb_merchant_telephone` (`telephone`),
  KEY `idx_tb_merchant_store_name` (`store_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商家';


LOCK TABLES `tb_merchant` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_order`
--

DROP TABLE IF EXISTS `tb_order`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_order` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `num` char(28) NOT NULL COMMENT '订单号 日期加id',
  `user_id` char(32) NOT NULL COMMENT '用户id',
  `sku_id` char(32) NOT NULL COMMENT 'SKU id',
  `pay_fee` int unsigned NOT NULL DEFAULT '0' COMMENT '付款，整数方式保存',
  `pay_scale` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '付款，金额对应的小数位数',
  `payment_type` tinyint unsigned DEFAULT NULL COMMENT '支付类型,1-在线支付',
  `postage` int DEFAULT '0' COMMENT '运费,单位是元',
  `status` int DEFAULT '0' COMMENT '订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭',
  `payment_time` datetime DEFAULT NULL COMMENT '支付时间',
  `send_time` datetime DEFAULT NULL COMMENT '发货时间',
  `end_time` datetime DEFAULT NULL COMMENT '交易完成时间',
  `close_time` datetime DEFAULT NULL COMMENT '交易关闭时间',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tb_order_num` (`num`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单';


LOCK TABLES `tb_order` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_user` (
  `id` char(32) NOT NULL COMMENT '用户ID',
  `name` varchar(45) NOT NULL COMMENT '用户名',
  `mail` varchar(255) NOT NULL COMMENT '用户邮箱',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `telephone` varchar(32) NOT NULL COMMENT '用户电话',
  `sex` tinyint NOT NULL DEFAULT '2' COMMENT '0表示男, 1表示女, 2表示未知',
  `avatar_url` varchar(255) NOT NULL DEFAULT '/avatar/boy.jpg' COMMENT '用户头像 (默认路径 “/avatar/boy.jpg”)',
  `is_vip` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '是否为vip,0表示是,1表示不是, 默认为0',
  `status` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '状态 1:enable, 0:disable, -1:deleted',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tb_user_name` (`name`),
  UNIQUE KEY `uk_tb_user_mail` (`mail`),
  UNIQUE KEY `uk_tb_user_telephone` (`telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户';


LOCK TABLES `tb_user` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_address`
--

DROP TABLE IF EXISTS `tb_user_address`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_user_address` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '用户地址ID',
  `user_id` char(32) NOT NULL COMMENT '用户ID',
  `province` varchar(20) DEFAULT '' COMMENT '省份',
  `city` varchar(20) DEFAULT '' COMMENT '城市',
  `district` varchar(20) DEFAULT '' COMMENT '区/县',
  `zip_code` varchar(6) DEFAULT '' COMMENT '邮编',
  `location` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户地址';


LOCK TABLES `tb_user_address` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `tb_user_collection`
--

DROP TABLE IF EXISTS `tb_user_collection`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tb_user_collection` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '用户地址ID',
  `user_id` char(32) NOT NULL COMMENT '用户ID',
  `sku_id` char(32) NOT NULL COMMENT 'SKU ID',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户收藏';


LOCK TABLES `tb_user_collection` WRITE;
UNLOCK TABLES;


-- Dump completed on 2020-07-08 19:43:10
