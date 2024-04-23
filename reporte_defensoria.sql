CREATE DATABASE  IF NOT EXISTS `reportes_defensoria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reportes_defensoria`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: reportes_defensoria
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `asesorados`
--

DROP TABLE IF EXISTS `asesorados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asesorados` (
  `id_asesorado` int NOT NULL auto_increment,
  `id_estado_civil` int DEFAULT NULL,
  `numero_hijos` int DEFAULT NULL,
  `ingreso_mensual` double DEFAULT NULL,
  `id_genero` int DEFAULT NULL,
  `estado` varchar(60) DEFAULT NULL,
  `municipio` varchar(60) DEFAULT NULL,
  `ciudad` varchar(60) DEFAULT NULL,
  `colonia` varchar(60) DEFAULT NULL,
  `codigo_postal` varchar(45) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  PRIMARY KEY (`id_asesorado`),
  KEY `fk_estado_civil_idx` (`id_estado_civil`),
  KEY `fk_genero_idx` (`id_genero`),
  CONSTRAINT `fk_estados_civiles` FOREIGN KEY (`id_estado_civil`) REFERENCES `estados_civiles` (`id_estado_civil`),
  CONSTRAINT `fk_generos` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesorados`
--



--
-- Table structure for table `asesores`
--

DROP TABLE IF EXISTS `asesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asesores` (
  `id_asesor` int NOT NULL,
  `nombre_asesor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_asesor`),
  CONSTRAINT `fk_empleados` FOREIGN KEY (`id_asesor`) REFERENCES `empleados` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesores`
--

LOCK TABLES `asesores` WRITE;
/*!40000 ALTER TABLE `asesores` DISABLE KEYS */;
/*!40000 ALTER TABLE `asesores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asesorias`
--

DROP TABLE IF EXISTS `asesorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asesorias` (
  `id_asesoria` int NOT NULL AUTO_INCREMENT,
  `estatus_requisitos` tinyint DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `id_empleado` int NOT NULL,
  `id_asesorado` int NOT NULL,
  `id_tipo_juicio` int NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `municipio` varchar(45) DEFAULT NULL,
  `id_motivo` int DEFAULT NULL,
  `id_distrito_judicial` int DEFAULT NULL,
  `id_zona` int DEFAULT NULL,
  `id_municipio_distrito` int DEFAULT NULL,
  PRIMARY KEY (`id_asesoria`),
  KEY `fk_asesorado_asesoria_idx` (`id_asesorado`),
  KEY `fk_tipo_juicio_idx` (`id_tipo_juicio`),
  KEY `fk_empleado_asesoria_idx` (`id_empleado`),
  KEY `fk_motivo_idx` (`id_motivo`),
  KEY `fk_distrito_judicial_idx` (`id_distrito_judicial`),
  KEY `fk_zona_idx` (`id_zona`),
  KEY `fk_municipio_distrito_idx` (`id_municipio_distrito`),
  CONSTRAINT `fk_asesorado_asesoria` FOREIGN KEY (`id_asesorado`) REFERENCES `asesorados` (`id_asesorado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_asesoria_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_distrito_judicial` FOREIGN KEY (`id_distrito_judicial`) REFERENCES `distritos_judiciales` (`id_distrito_judicial`),
  CONSTRAINT `fk_id_tipo_juicio_asesoria` FOREIGN KEY (`id_tipo_juicio`) REFERENCES `tipos_juicios` (`id_tipo_juicio`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_motivos` FOREIGN KEY (`id_motivo`) REFERENCES `motivos` (`id_motivo`),
  CONSTRAINT `fk_municipio_distrito` FOREIGN KEY (`id_municipio_distrito`) REFERENCES `municipios_distritos` (`id_municipio_distrito`),
  CONSTRAINT `fk_zona` FOREIGN KEY (`id_zona`) REFERENCES `zonas` (`id_zona`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesorias`
--

LOCK TABLES `asesorias` WRITE;
/*!40000 ALTER TABLE `asesorias` DISABLE KEYS */;
INSERT INTO `asesorias` VALUES 
(1,1,'2020-01-01',1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),
(2,1,'2020-02-02',2,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL),
(3,1,'2020-03-03',3,NULL,3,NULL,NULL,NULL,NULL,NULL,NULL),
(4,1,'2020-04-04',4,NULL,4,NULL,NULL,NULL,NULL,NULL,NULL),
(5,1,'2020-05-05',5,NULL,5,NULL,NULL,NULL,NULL,NULL,NULL),
(6,1,'2020-06-06',6,NULL,6,NULL,NULL,NULL,NULL,NULL,NULL),
(7,1,'2020-07-07',7,NULL,7,NULL,NULL,NULL,NULL,NULL,NULL),
(8,1,'2020-08-08',8,NULL,8,NULL,NULL,NULL,NULL,NULL,NULL),
(9,1,'2020-09-09',9,NULL,9,NULL,NULL,NULL,NULL,NULL,NULL),
(10,1,'2020-10-10',10,NULL,10,NULL,NULL,NULL,NULL,NULL,NULL),
(11,1,'2020-11-11',11,NULL,11,NULL,NULL,NULL,NULL,NULL,NULL),
(12,1,'2020-12-12',12,NULL,12,NULL,NULL,NULL,NULL,NULL,NULL),
(13,1,'2021-01-01',13,NULL,13,NULL,NULL,NULL,NULL,NULL,NULL),
(14,1,'2021-02-02',14,NULL,14,NULL,NULL,NULL,NULL,NULL,NULL),
(15,1,'2021-03-03',15,NULL,15,NULL,NULL,NULL,NULL,NULL,NULL),
(16,1,'2021-04-04',16,NULL,16,NULL,NULL,NULL,NULL,NULL,NULL),
(17,1,'2021-05-05',16,NULL,17,NULL,NULL,NULL,NULL,NULL,NULL),
(18,1,'2021-06-06',15,NULL,18,NULL,NULL,NULL,NULL,NULL,NULL),
(19,1,'2021-07-07',14,NULL,19,NULL,NULL,NULL,NULL,NULL,NULL),
(20,1,'2021-08-08',13,NULL,20,NULL,NULL,NULL,NULL,NULL,NULL),
(21,1,'2021-09-09',12,NULL,21,NULL,NULL,NULL,NULL,NULL,NULL),
(22,1,'2021-10-10',11,NULL,22,NULL,NULL,NULL,NULL,NULL,NULL),
(23,1,'2021-11-11',10,NULL,23,NULL,NULL,NULL,NULL,NULL,NULL),
(24,1,'2021-12-12',9,NULL,24,NULL,NULL,NULL,NULL,NULL,NULL),
(25,1,'2022-01-01',8,NULL,25,NULL,NULL,NULL,NULL,NULL,NULL),
(26,1,'2022-02-02',7,NULL,26,NULL,NULL,NULL,NULL,NULL,NULL),
(27,1,'2022-03-03',6,NULL,27,NULL,NULL,NULL,NULL,NULL,NULL),
(28,1,'2022-04-04',5,NULL,28,NULL,NULL,NULL,NULL,NULL,NULL),
(29,1,'2022-05-05',4,NULL,29,NULL,NULL,NULL,NULL,NULL,NULL),
(30,1,'2022-06-06',3,NULL,30,NULL,NULL,NULL,NULL,NULL,NULL),
(31,1,'2023-12-16',17,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(32,1,'2023-01-16',18,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(33,1,'2023-03-23',19,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(34,1,'2023-12-25',20,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(35,1,'2024-01-16',21,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(36,1,'2020-06-16',22,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(37,1,'2021-08-10',23,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(38,1,'2024-01-16',24,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(39,1,'2021-08-10',25,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(40,1,'2023-12-16',26,NULL,31,NULL,NULL,NULL,NULL,NULL, NULL),
(41,1,'2024-01-16',27,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(42,1,'2021-08-10',28,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(43,1,'2023-12-16',29,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(44,1,'2023-12-16',30,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(45,1,'2021-08-10',31,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(46,1,'2023-12-16',32,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(47,1,'2024-01-16',17,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(48,1,'2023-12-16',18,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(49,1,'2024-01-16',19,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(50,1,'2023-12-16',20,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(51,1,'2024-01-16',21,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(52,1,'2023-12-16',22,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(53,1,'2021-08-10',23,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(54,1,'2023-12-16',24,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(55,1,'2023-12-16',25,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(56,1,'2021-08-10',26,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(57,1,'2023-12-16',27,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(58,1,'2023-01-16',28,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(59,1,'2023-12-16',29,NULL,31,NULL,NULL,NULL,NULL,NULL,NULL),
(60,1,'2023-01-16',30,NULL,31,NULL,NULL,NULL,NULL,NULL, NULL),
(61,1,'2015-11-16',1,NULL,70,NULL,NULL,NULL,NULL,NULL,NULL),
(62,1,'2016-10-19',2,NULL,71,NULL,NULL,NULL,NULL,NULL,NULL),
(63,1,'2016-10-19',36,NULL,72,NULL,NULL,NULL,NULL,NULL,NULL),
(64,1,'2017-09-19',1,NULL,73,NULL,NULL,NULL,NULL,NULL,NULL),
(65,1,'2018-05-10',2,NULL,74,NULL,NULL,NULL,NULL,NULL,NULL),
(66,1,'2016-10-19',36,NULL,75,NULL,NULL,NULL,NULL,NULL,NULL),
(67,1,'2019-02-15',1,NULL,76,NULL,NULL,NULL,NULL,NULL,NULL),
(68,1,'2019-02-15',2,NULL,77,NULL,NULL,NULL,NULL,NULL,NULL),
(69,1,'2015-11-16',36,NULL,78,NULL,NULL,NULL,NULL,NULL,NULL),
(70,1,'2020-03-02',1,NULL,79,NULL,NULL,NULL,NULL,NULL,NULL),
(71,1,'2019-02-15',2,NULL,89,NULL,NULL,NULL,NULL,NULL,NULL),
(72,1,'2020-03-02',36,NULL,88,NULL,NULL,NULL,NULL,NULL,NULL),
(73,1,'2019-02-15',1,NULL,87,NULL,NULL,NULL,NULL,NULL,NULL),
(74,1,'2021-04-22',2,NULL,86,NULL,NULL,NULL,NULL,NULL,NULL),
(75,1,'2015-11-16',36,NULL,85,NULL,NULL,NULL,NULL,NULL,NULL),
(76,1,'2022-09-12',1,NULL,84,NULL,NULL,NULL,NULL,NULL,NULL),
(77,1,'2022-09-05',2,NULL,83,NULL,NULL,NULL,NULL,NULL,NULL),
(78,1,'2022-09-12',36,NULL,82,NULL,NULL,NULL,NULL,NULL,NULL),
(79,1,'2020-03-02',1,NULL,81,NULL,NULL,NULL,NULL,NULL,NULL),
(80,1,'2021-04-22',2,NULL,80,NULL,NULL,NULL,NULL,NULL,NULL),
(81,1,'2022-09-12',36,NULL,90,NULL,NULL,NULL,NULL,NULL,NULL),
(82,1,'2020-03-02',1,NULL,61,NULL,NULL,NULL,NULL,NULL,NULL),
(83,1,'2021-04-22',2,NULL,62,NULL,NULL,NULL,NULL,NULL,NULL),
(84,1,'2022-09-12',36,NULL,63,NULL,NULL,NULL,NULL,NULL,NULL),
(85,1,'2015-11-16',1,NULL,64,NULL,NULL,NULL,NULL,NULL,NULL),
(86,1,'2020-03-02',2,NULL,65,NULL,NULL,NULL,NULL,NULL,NULL),
(87,1,'2016-10-19',36,NULL,66,NULL,NULL,NULL,NULL,NULL,NULL),
(88,1,'2015-11-16',1,NULL,67,NULL,NULL,NULL,NULL,NULL,NULL),
(89,1,'2020-03-02',2,NULL,68,NULL,NULL,NULL,NULL,NULL,NULL),
(90,1,'2021-04-22',36,NULL,69,NULL,NULL,NULL,NULL,NULL,NULL),
(91,1,'2025-10-21',49,NULL,91,NULL,NULL,NULL,NULL,NULL,NULL),
(92,1,'2025-11-11',50,NULL,92,NULL,NULL,NULL,NULL,NULL,NULL),
(93,1,'2025-02-02',51,NULL,93,NULL,NULL,NULL,NULL,NULL,NULL),
(94,1,'2025-01-01',52,NULL,94,NULL,NULL,NULL,NULL,NULL,NULL),
(95,1,'2025-03-03',53,NULL,95,NULL,NULL,NULL,NULL,NULL,NULL),
(96,1,'2025-04-06',54,NULL,96,NULL,NULL,NULL,NULL,NULL,NULL),
(97,1,'2025-05-04',55,NULL,97,NULL,NULL,NULL,NULL,NULL,NULL),
(98,1,'2025-05-23',56,NULL,98,NULL,NULL,NULL,NULL,NULL,NULL),
(99,1,'2024-06-15',57,NULL,99,NULL,NULL,NULL,NULL,NULL,NULL),
(100,1,'2024-10-12',58,NULL,100,NULL,NULL,NULL,NULL,NULL,NULL),
(101,1,'2024-11-11',59,NULL,101,NULL,NULL,NULL,NULL,NULL,NULL),
(102,1,'2025-11-11',60,NULL,102,NULL,NULL,NULL,NULL,NULL,NULL),
(103,1,'2026-01-11',61,NULL,103,NULL,NULL,NULL,NULL,NULL,NULL),
(104,1,'2025-03-03',62,NULL,104,NULL,NULL,NULL,NULL,NULL,NULL),
(105,1,'2025-01-01',63,NULL,105,NULL,NULL,NULL,NULL,NULL,NULL),
(106,1,'2024-06-06',64,NULL,106,NULL,NULL,NULL,NULL,NULL,NULL),
(107,1,'2025-09-09',51,NULL,107,NULL,NULL,NULL,NULL,NULL,NULL),
(108,1,'2025-08-08',52,NULL,108,NULL,NULL,NULL,NULL,NULL,NULL),
(109,1,'2025-07-07',53,NULL,109,NULL,NULL,NULL,NULL,NULL,NULL),
(110,1,'2026-08-18',54,NULL,110,NULL,NULL,NULL,NULL,NULL,NULL),
(111,1,'2026-02-12',55,NULL,111,NULL,NULL,NULL,NULL,NULL,NULL),
(112,1,'2026-12-12',56,NULL,112,NULL,NULL,NULL,NULL,NULL,NULL),
(113,1,'2026-10-11',57,NULL,113,NULL,NULL,NULL,NULL,NULL,NULL),
(114,1,'2025-12-13',58,NULL,114,NULL,NULL,NULL,NULL,NULL,NULL),
(115,1,'2024-11-18',59,NULL,115,NULL,NULL,NULL,NULL,NULL,NULL),
(116,1,'2024-11-17',60,NULL,116,NULL,NULL,NULL,NULL,NULL,NULL),
(117,1,'2025-11-21',61,NULL,117,NULL,NULL,NULL,NULL,NULL,NULL),
(118,1,'2025-01-17',62,NULL,118,NULL,NULL,NULL,NULL,NULL,NULL),
(119,1,'2026-02-24',63,NULL,119,NULL,NULL,NULL,NULL,NULL,NULL),
(120,1,'2026-03-21',64,NULL,120,NULL,NULL,NULL,NULL,NULL, NULL);
/*!40000 ALTER TABLE `asesorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defensores`
--

DROP TABLE IF EXISTS `defensores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `defensores` (
  `id_defensor` int NOT NULL AUTO_INCREMENT,
  `nombre_defensor` varchar(100) NOT NULL,
  PRIMARY KEY (`id_defensor`),
  CONSTRAINT `fk_defesor_empleado` FOREIGN KEY (`id_defensor`) REFERENCES `empleados` (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `defensores`
--

LOCK TABLES `defensores` WRITE;
/*!40000 ALTER TABLE `defensores` DISABLE KEYS */;
INSERT INTO `defensores` VALUES (1,'Juan Carlos Pérez García'),(2,'Ana María Rodríguez Martínez'),(3,'Luis Antonio Sánchez Herrera'),(4,'Elena Ramírez Jiménez'),(5,'Carlos Alberto Torres Gómez'),(6,'María Fernanda López Vargas'),(7,'Javier Alejandro Mendoza Silva'),(8,'Paula Andrea González Pérez'),(9,'Roberto Carlos Ruiz Ramírez'),(10,'Laura Isabel Medina García'),(11,'Francisco Javier Rodríguez Martín'),(12,'Sofía Patricia Pérez Torres'),(13,'Miguel Ángel Soto Ruiz'),(14,'Carmen Rosa García López'),(15,'David Alejandro Martínez Sánchez'),(16,'Isabel Cristina Gómez Hernández'),(49,'José Alberto Lopez'),(50,'Antonio Altamirano Espinoza'),(51,'Jesus Gabriel Valenzuela'),(52,'Germán Rojas Inzunza'),(53,'Jorge Gomez Valencia'),(54,'Roberto Inzunza Lopez'),(55,'Marco Camacho Hernandez'),(56,'Alan Gonzalez Días'),(57,'Santiago Alvarez Ruiz'),(58,'Francisco Dominguez Flores'),(59,'Erick Martinez Costa'),(60,'Abraham Vazquez Ramos'),(61,'Gabriel Hernandez Burgos'),(62,'Alex Ramos Blanco'),(63,'Juan Iglesias Bravo'),(64,'Pablo Rodriguez Moreno');
/*!40000 ALTER TABLE `defensores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distritos_judiciales`
--

DROP TABLE IF EXISTS `distritos_judiciales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distritos_judiciales` (
  `id_distrito_judicial` int NOT NULL AUTO_INCREMENT,
  `nombre_distrito_judicial` varchar(100) NOT NULL,
  PRIMARY KEY (`id_distrito_judicial`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distritos_judiciales`
--

LOCK TABLES `distritos_judiciales` WRITE;
/*!40000 ALTER TABLE `distritos_judiciales` DISABLE KEYS */;
INSERT INTO `distritos_judiciales` VALUES (1,'Distrito Judicial de Alamos'),(2,'Distrito Judicial de Agua Prieta'),(3,'Distrito Judicial de Altar'),(4,'Distrito Judicial de Cajeme'),(5,'Distrito Judicial de Cananea'),(6,'Distrito Judicial de Guaymas'),(7,'Distrito Judicial de Hermosillo'),(8,'Distrito Judicial de Huatabampo'),(9,'Distrito Judicial de Magdalena'),(10,'Distrito Judicial de Moctezuma'),(11,'Distrito Judicial de Navojoa'),(12,'Distrito Judicial de Nogales'),(13,'Distrito Judicial de Puerto Peñasco'),(14,'Distrito Judicial de San Luis Rio Colorado'),(15,'Distrito Judicial de Sahuaripa'),(16,'Distrito Judicial de Ures');
/*!40000 ALTER TABLE `distritos_judiciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id_empleado` int NOT NULL AUTO_INCREMENT,
  `tipo_empleado` varchar(100) NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'defensor'),(2,'defensor'),(3,'defensor'),(4,'defensor'),(5,'defensor'),(6,'defensor'),(7,'defensor'),(8,'defensor'),(9,'defensor'),(10,'defensor'),(11,'defensor'),(12,'defensor'),(13,'defensor'),(14,'defensor'),(15,'defensor'),(16,'defensor'),(17,'asesor'),(18,'asesor'),(19,'asesor'),(20,'asesor'),(21,'asesor'),(22,'asesor'),(23,'asesor'),(24,'asesor'),(25,'asesor'),(26,'asesor'),(27,'asesor'),(28,'asesor'),(29,'asesor'),(30,'asesor'),(31,'asesor'),(32,'asesor'),(33,'asesor'),(34,'asesor'),(35,'asesor'),(36,'asesor'),(37,'asesor'),(38,'asesor'),(39,'asesor'),(40,'asesor'),(41,'asesor'),(42,'asesor'),(43,'asesor'),(44,'asesor'),(45,'asesor'),(46,'asesor'),(47,'asesor'),(48,'asesor'),(49,'defensor'),(50,'defensor'),(51,'defensor'),(52,'defensor'),(53,'defensor'),(54,'defensor'),(55,'defensor'),(56,'defensor'),(57,'defensor'),(58,'defensor'),(59,'defensor'),(60,'defensor'),(61,'defensor'),(62,'defensor'),(63,'defensor'),(64,'defensor');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados_civiles`
--

DROP TABLE IF EXISTS `estados_civiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados_civiles` (
  `id_estado_civil` int NOT NULL AUTO_INCREMENT,
  `estado_civil` varchar(50) NOT NULL,
  PRIMARY KEY (`id_estado_civil`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_civiles`
--

LOCK TABLES `estados_civiles` WRITE;
/*!40000 ALTER TABLE `estados_civiles` DISABLE KEYS */;
INSERT INTO `estados_civiles` VALUES (1,'Soltero(a)'),(2,'Casado(a)'),(3,'Unión Libre'),(4,'Separado(a)'),(5,'Divorciado(a)'),(6,'Viudo(a)');
/*!40000 ALTER TABLE `estados_civiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id_genero` int NOT NULL AUTO_INCREMENT,
  `descripcion_genero` varchar(25) NOT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Masculino'),(2,'Femenino'),(3,'No Binario');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motivos`
--

DROP TABLE IF EXISTS `motivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `motivos` (
  `id_motivo` int NOT NULL AUTO_INCREMENT,
  `descripcion_motivo` varchar(75) NOT NULL,
  PRIMARY KEY (`id_motivo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motivos`
--

LOCK TABLES `motivos` WRITE;
/*!40000 ALTER TABLE `motivos` DISABLE KEYS */;
INSERT INTO `motivos` VALUES (1,'Discapacidad o enfermedad'),(2,'Ama de casa'),(3,'En busca de empleo'),(4,'Pensionado(a)');
/*!40000 ALTER TABLE `motivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipios_distritos`
--

DROP TABLE IF EXISTS `municipios_distritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipios_distritos` (
  `id_municipio_distrito` int NOT NULL,
  `nombre_municipio` varchar(100) NOT NULL,
  PRIMARY KEY (`id_municipio_distrito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios_distritos`
--

LOCK TABLES `municipios_distritos` WRITE;
/*!40000 ALTER TABLE `municipios_distritos` DISABLE KEYS */;
INSERT INTO `municipios_distritos` VALUES (29,'Aconchi'),(41,'Agua Prieta'),(60,'Álamos'),(80,'Altar'),(134,'Arivechi'),(135,'Arizpe'),(159,'Atil'),(204,'Bacadéhuachi'),(206,'Bacanora'),(207,'Bacerac'),(209,'Bacoachi'),(210,'Bácum'),(215,'Banámichi'),(218,'Baviácora'),(219,'Bavispe'),(226,'Benito Juárez'),(230,'Benjamín Hill'),(246,'Caborca'),(251,'Cajeme'),(270,'Cananea'),(285,'Carbó'),(505,'Cucurpe'),(516,'Cumpas'),(528,'Divisaderos'),(585,'Empalme'),(600,'Etchojoa'),(616,'Fronteras'),(631,'General Plutarco Elías Calles'),(643,'Granados'),(660,'Guaymas'),(674,'Hermosillo'),(694,'Huachinera'),(704,'Huásabas'),(706,'Huatabampo'),(727,'Huépac'),(757,'Imuris'),(882,'La Colorada'),(950,'Magdalena'),(1001,'Mazatán'),(1056,'Moctezuma'),(1085,'Naco'),(1086,'Nácori Chico'),(1087,'Nacozari de García'),(1103,'Navojoa'),(1117,'Nogales'),(1160,'Ónavas'),(1162,'Opodepe'),(1163,'Oquitoa'),(1232,'Pitiquito'),(1253,'Puerto Peñasco'),(1266,'Quiriego'),(1276,'Rayón'),(1297,'Rosario'),(1304,'Sahuaripa'),(1396,'San Felipe de Jesús'),(1434,'San Ignacio Río Muerto'),(1440,'San Javier'),(1550,'San Luis Río Colorado'),(1592,'San Miguel de Horcasitas'),(1645,'San Pedro de la Cueva'),(1712,'Santa Ana'),(1744,'Santa Cruz'),(1929,'Sáric'),(1963,'Soyopa'),(1964,'Suaqui Grande'),(2085,'Tepache'),(2255,'Trincheras'),(2258,'Tubutama'),(2295,'Ures'),(2355,'Villa Hidalgo'),(2359,'Villa Pesqueira'),(2413,'Yécora');
/*!40000 ALTER TABLE `municipios_distritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_juicios`
--

DROP TABLE IF EXISTS `tipos_juicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_juicios` (
  `id_tipo_juicio` int NOT NULL AUTO_INCREMENT,
  `tipo_juicio` varchar(100) NOT NULL,
  PRIMARY KEY (`id_tipo_juicio`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_juicios`
--

LOCK TABLES `tipos_juicios` WRITE;
/*!40000 ALTER TABLE `tipos_juicios` DISABLE KEYS */;
INSERT INTO `tipos_juicios` VALUES (1,'Divorcio Incausado'),(2,'Divorcio Voluntario'),(3,'J. Vol de Acred. de Hechos de Concubinato'),(4,'J. Vol de Convenio Judicial (Pensión y Convivencia)'),(5,'J. Vol. Acred. Hechos de Defunción'),(6,'J. Vol. Acred. Hechos de Dep. Económica'),(7,'J. Vol. Acred. Hechos de Nacimiento'),(8,'J. Vol. de Cancelación de Pensión'),(9,'J. Vol. de Consignación de Pensión'),(10,'Nulidad de Acta de Nacimiento'),(11,'Oral Cuestiones Familiares (Convivencia)'),(12,'Oral de Alimentos'),(13,'Sucesorio Intestamentario'),(14,'Sucesorio Testamentario');
/*!40000 ALTER TABLE `tipos_juicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turnos`
--

DROP TABLE IF EXISTS `turnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `turnos` (
  `id_turno` int NOT NULL AUTO_INCREMENT,
  `fecha_turno` date NOT NULL,
  `hora_turno` time NOT NULL,
    `id_asesoria` int,
  PRIMARY KEY (`id_turno`),
    KEY `fk_id_asesoria_idx` (`id_asesoria`),
	CONSTRAINT `fk_id_asesoria` FOREIGN KEY (`id_asesoria`) REFERENCES `asesorias` (`id_asesoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turnos`
--

LOCK TABLES `turnos` WRITE;
/*!40000 ALTER TABLE `turnos` DISABLE KEYS */;
/*!40000 ALTER TABLE `turnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zonas`
--

DROP TABLE IF EXISTS `zonas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zonas` (
  `id_zona` int NOT NULL AUTO_INCREMENT,
  `nombre_zona` varchar(50) NOT NULL,
  PRIMARY KEY (`id_zona`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zonas`
--

LOCK TABLES `zonas` WRITE;
/*!40000 ALTER TABLE `zonas` DISABLE KEYS */;
INSERT INTO `zonas` VALUES (1,'NORTE'),(2,'CENTRO'),(3,'SUR');
/*!40000 ALTER TABLE `zonas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 12:08:43
