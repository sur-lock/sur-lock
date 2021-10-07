-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: j5a501.p.ssafy.io    Database: surlock
-- ------------------------------------------------------
-- Server version	5.7.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `image_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime(6) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  UNIQUE KEY `UK_lfptu4mlxs53ndn82isp5s1er` (`image_name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'2021-10-06 10:23:52.073000','jpeg','cf2e9a24-d7b3-4515-9cdc-5b73c5251d8f'),(2,'2021-10-06 10:35:24.571000','jpg','9465c8e7-5a9a-42d6-833b-0adeb16af605'),(3,'2021-10-06 10:36:30.050000','jpg','eb992507-bb63-4a78-87e4-9c27fd7a44ae'),(4,'2021-10-06 13:40:39.529000','png','4a7083b9-f465-452d-8793-166776fa403f'),(5,'2021-10-06 13:40:54.860000','jpg','cc16a9c2-3047-4f97-80da-1dde30e8f0a8'),(6,'2021-10-06 13:41:53.003000','png','505c0e0f-dddb-4a70-b62a-9891a0d374d6'),(7,'2021-10-06 13:42:04.691000','jpg','ca6321b3-caae-413a-906e-2ff57ed677c9'),(8,'2021-10-06 15:23:16.874000','png','7404f8b0-c0aa-4def-96fa-296a7221ce15'),(9,'2021-10-06 15:24:08.937000','jpg','968c1937-2266-473c-b169-d018e599e7ec'),(10,'2021-10-06 15:24:46.100000','jpg','912f2323-78da-4e48-beeb-0671c5b68c38'),(11,'2021-10-06 15:25:18.223000','png','cad3cf32-1e90-417f-94ad-03efa636c85a'),(12,'2021-10-06 15:25:44.584000','jpg','6b7f8fa3-c300-4fc0-b76a-3e9750b7ae22'),(13,'2021-10-06 15:25:53.375000','jpg','94e390f7-ba82-4467-8199-b94f760ef770'),(14,'2021-10-06 15:26:05.049000','png','1424f2e4-25b0-444e-9493-6d0359489705'),(15,'2021-10-06 15:32:56.366000','png','8a3b78de-0901-4832-b9a4-7d0a181a04ff'),(16,'2021-10-06 15:33:21.842000','jpg','d4d3f63f-1576-412f-9966-4f71a45210dc'),(17,'2021-10-06 15:50:15.216000','jpg','d384b9bf-d4fa-442c-87d9-deb134c507a2'),(18,'2021-10-06 15:50:17.708000','jpg','710e6bb2-7872-449c-a75f-fec612f7504e'),(19,'2021-10-06 15:50:20.431000','png','94f72f06-2f6e-4370-aa12-6ec399ffdb75'),(20,'2021-10-06 15:50:29.114000','png','25b33e76-7493-4592-aed9-e3cdcde8e33e'),(21,'2021-10-06 23:22:53.716000','png','ab46ec24-0d48-4226-a900-0f2e2d81a676'),(22,'2021-10-07 04:34:22.874000','jpg','16f77234-8238-4c09-9a5a-b24379fc2ed5'),(23,'2021-10-07 04:34:26.128000','jpg','4afd79b2-1646-4ce8-b59c-23b9f411240c'),(24,'2021-10-07 04:37:45.146000','jpg','e220a058-70fe-4ef3-9b5d-da2d14271e20'),(25,'2021-10-07 04:41:35.215000','jpg','40db844c-8144-4256-954e-d2c53910eb29');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07 10:59:50
