CREATE DATABASE  IF NOT EXISTS `defensoria_asesorias` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `defensoria_asesorias`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: defensoria_asesorias
-- ------------------------------------------------------
-- Server version	8.0.36

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
  `id_asesorado` int NOT NULL,
  `estatus_trabajo` tinyint NOT NULL,
  `id_motivo` int DEFAULT NULL,
  `id_estado_civil` int NOT NULL,
  `numero_hijos` int DEFAULT NULL,
  `ingreso_mensual` double DEFAULT NULL,
  PRIMARY KEY (`id_asesorado`),
  KEY `fk_estado_civil_idx` (`id_estado_civil`),
  KEY `fk_motivo_asesorado_idx` (`id_motivo`),
  CONSTRAINT `fk_estado_civil_asesorado` FOREIGN KEY (`id_estado_civil`) REFERENCES `estados_civiles` (`id_estado_civil`),
  CONSTRAINT `fk_motivo_asesorado` FOREIGN KEY (`id_motivo`) REFERENCES `motivos` (`id_motivo`),
  CONSTRAINT `fk_persona_asesorado` FOREIGN KEY (`id_asesorado`) REFERENCES `personas` (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesorados`
--

LOCK TABLES `asesorados` WRITE;
/*!40000 ALTER TABLE `asesorados` DISABLE KEYS */;
INSERT INTO `asesorados` VALUES (1,0,3,1,0,NULL),(2,0,3,1,0,NULL),(3,0,3,1,0,NULL),(4,0,3,1,0,NULL),(5,0,3,1,0,NULL),(6,0,3,1,0,NULL),(7,0,3,1,0,NULL),(8,0,3,1,0,NULL),(9,0,3,1,0,NULL),(10,0,3,1,0,NULL),(11,0,3,1,0,NULL),(12,0,3,1,0,NULL),(13,0,3,1,0,NULL),(14,0,3,1,0,NULL),(15,0,3,1,0,NULL),(16,0,3,1,0,NULL),(17,0,3,1,0,NULL),(18,0,3,1,0,NULL),(19,0,3,1,0,NULL),(20,0,3,1,0,NULL),(21,0,3,1,0,NULL),(22,0,3,1,0,NULL),(23,0,3,1,0,NULL),(24,0,3,1,0,NULL),(25,0,3,1,0,NULL),(26,0,3,1,0,NULL),(27,0,3,1,0,NULL),(28,0,3,1,0,NULL),(29,0,3,1,0,NULL),(30,0,3,1,0,NULL),(31,0,3,1,3,NULL),(32,0,3,1,3,NULL),(33,0,3,1,3,NULL),(34,0,3,1,1,NULL),(35,0,1,1,0,NULL),(36,0,1,1,0,NULL),(37,0,1,1,3,NULL),(38,0,3,1,0,NULL),(39,0,1,1,2,NULL),(40,0,3,1,0,NULL),(41,0,1,1,2,NULL),(42,0,1,1,0,NULL),(43,0,1,1,3,NULL),(44,0,3,1,0,NULL),(45,0,1,1,3,NULL),(46,0,3,1,1,NULL),(47,0,3,1,0,NULL),(48,0,1,1,3,NULL),(49,0,3,1,0,NULL),(50,0,3,1,3,NULL),(51,0,1,1,0,NULL),(52,0,3,1,2,NULL),(53,0,3,1,0,NULL),(54,0,3,1,3,NULL),(55,0,1,1,0,NULL),(56,0,3,1,3,NULL),(57,0,3,1,0,NULL),(58,0,3,1,3,NULL),(59,0,2,1,2,NULL),(60,0,3,1,3,NULL),(61,0,1,6,1,NULL),(62,0,2,5,1,NULL),(63,0,3,4,2,NULL),(64,0,4,3,3,NULL),(65,0,1,2,1,NULL),(66,0,2,1,2,NULL),(67,0,3,6,3,NULL),(68,0,4,5,3,NULL),(69,0,1,4,2,NULL),(70,0,2,3,2,NULL),(71,0,3,2,2,NULL),(72,0,4,1,1,NULL),(73,0,1,6,2,NULL),(74,0,2,5,3,NULL),(75,0,3,4,1,NULL),(76,0,4,3,2,NULL),(77,0,1,2,3,NULL),(78,0,2,1,5,NULL),(79,0,3,6,2,NULL),(80,0,4,5,1,NULL),(81,0,1,4,3,NULL),(82,0,2,3,1,NULL),(83,0,3,2,2,NULL),(84,0,4,1,3,NULL),(85,0,1,6,1,NULL),(86,0,2,5,2,NULL),(87,0,3,4,3,NULL),(88,0,4,3,2,NULL),(89,0,1,2,1,NULL),(90,0,2,1,2,NULL),(91,0,3,2,1,NULL),(92,0,3,1,0,NULL),(93,0,1,2,0,NULL),(94,0,1,1,1,NULL),(95,0,3,1,1,NULL),(96,0,3,1,0,NULL),(97,0,2,2,2,NULL),(98,0,2,2,1,NULL),(99,0,2,2,0,NULL),(100,0,3,1,1,NULL),(101,0,4,2,4,NULL),(102,0,4,1,2,NULL),(103,0,3,1,3,NULL),(104,0,2,2,5,NULL),(105,0,4,1,0,NULL),(106,0,3,1,2,NULL),(107,0,3,1,3,NULL),(108,0,2,2,1,NULL),(109,0,3,2,6,NULL),(110,0,4,2,1,NULL),(111,0,4,1,3,NULL),(112,0,3,2,1,NULL),(113,0,2,2,2,NULL),(114,0,3,2,3,NULL),(115,0,4,1,1,NULL),(116,0,3,1,0,NULL),(117,0,2,2,7,NULL),(118,0,3,3,1,NULL),(119,0,4,6,3,NULL),(120,0,1,6,3,NULL),(121,0,1,1,2,NULL);
/*!40000 ALTER TABLE `asesorados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asesores`
--

DROP TABLE IF EXISTS `asesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asesores` (
  `id_asesor` int NOT NULL,
  `nombre_asesor` varchar(100) NOT NULL,
  PRIMARY KEY (`id_asesor`),
  CONSTRAINT `fk_asesor_asesor_empleado` FOREIGN KEY (`id_asesor`) REFERENCES `empleados` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesores`
--

LOCK TABLES `asesores` WRITE;
/*!40000 ALTER TABLE `asesores` DISABLE KEYS */;
INSERT INTO `asesores` VALUES (17,'Alejandro García Rodríguez'),(18,'Sofia Hernandez Perez'),(19,'Ana Ramirez Castillo'),(20,'Juan Morales Santos'),(21,'Maria González Ruiz'),(22,'Javier Torres Medina'),(23,'Laura Fernandez Mendoza'),(24,'Diego Castro Jiménez'),(25,'Andrea Navarro Vargas'),(26,'Luis Diaz Herrera'),(27,'Paula Rojas Flores'),(28,'Daniel Paredes Silva'),(29,'Valeria Soto González'),(30,'Ricardo Ortega Montoya'),(31,'Natalia Gutierrez Ramos'),(32,'Carlos Martinez Lopez'),(33,'RAFAEL HUIDOBRO CARDENAS'),(34,'MACLOVIA TARAZON MADRID'),(35,'AMELIA CASTRO VALDEZ'),(36,'ISMAEL ALEJANDRO CHAVARIN HERNANDEZ'),(37,'DAVID ANTONIO SOTO FELIX'),(38,'EDUARDO ALJAVID FRANCO'),(39,'LAURA GAXIOLA GARCIA'),(40,'TOMAS ELENO BURBOA TAPIA'),(41,'ANA ISABEL MONARRZ TRUJILLO'),(42,'RAUL GARCIA LOPEZ'),(43,'GABRIELA DE LA RIVA AMPARANO'),(44,'ARMANDO ARVAYO GONZALEZ'),(45,'JESUS ALEJANDRO OCHOA DANIEL'),(46,'ROSA MARHA JUVERA FLORES'),(47,'GABRIELA DE LA RIVA AMPARANO'),(48,'ARMANDO ARVAYO GONZALEZ'),(73,'Jose Jesus Orozco Dos'),(74,'Jose Jesus Dos'),(75,'Jose Jesus Orozco Dos');
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
  `resumen_asesoria` varchar(250) NOT NULL,
  `conclusion_asesoria` varchar(250) NOT NULL,
  `estatus_requisitos` tinyint NOT NULL,
  `fecha_registro` date NOT NULL,
  `id_empleado` int NOT NULL DEFAULT '0',
  `id_asesorado` int NOT NULL DEFAULT '0',
  `usuario` varchar(195) NOT NULL,
  `id_tipo_juicio` int NOT NULL DEFAULT '0',
  `id_usuario` int NOT NULL,
  `id_distrito_judicial` int NOT NULL DEFAULT '0',
  `id_municipio_distrito` int NOT NULL DEFAULT '0',
  `estatus_asesoria` enum('NO_TURNADA','TURNADA') NOT NULL DEFAULT 'NO_TURNADA',
  PRIMARY KEY (`id_asesoria`),
  KEY `fk_asesorado_asesoria_idx` (`id_asesorado`),
  KEY `fk_tipo_juicio_idx` (`id_tipo_juicio`),
  KEY `fk_empleado_asesoria_idx` (`id_empleado`),
  KEY `fk_id_distrito_judicial_idx` (`id_distrito_judicial`),
  KEY `id_municipio_distrito_fk_idx` (`id_municipio_distrito`),
  CONSTRAINT `fk_asesorado_asesoria` FOREIGN KEY (`id_asesorado`) REFERENCES `asesorados` (`id_asesorado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_asesoria_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_id_distrito_judicial` FOREIGN KEY (`id_distrito_judicial`) REFERENCES `distritos_judiciales` (`id_distrito_judicial`),
  CONSTRAINT `fk_id_tipo_juicio_asesoria` FOREIGN KEY (`id_tipo_juicio`) REFERENCES `tipos_juicios` (`id_tipo_juicio`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_municipio_distrito_fk` FOREIGN KEY (`id_municipio_distrito`) REFERENCES `municipios_distritos` (`id_municipio_distrito`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asesorias`
--

LOCK TABLES `asesorias` WRITE;
/*!40000 ALTER TABLE `asesorias` DISABLE KEYS */;
INSERT INTO `asesorias` VALUES (1,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-01-01',1,1,'DPS Usuario Cuatro',10,4,1,60,'TURNADA'),(2,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-02-02',2,2,'DPS Usuario Cinco',10,5,2,41,'NO_TURNADA'),(3,'Asesoramiento sobre divorcio voluntario iniciado','Conclusión: Divorcio Voluntario concedido',1,'2020-03-03',3,3,'DPS Usuario Seis',2,6,3,80,'NO_TURNADA'),(4,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2020-04-04',4,4,'DPS Usuario Siete',14,7,4,210,'NO_TURNADA'),(5,'Asesoramiento sobre cancelación de pensión iniciado','Conclusión: Cancelación de Pensión procesada',1,'2020-05-05',5,5,'DPS Usuario Ocho',8,8,5,135,'NO_TURNADA'),(6,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-06-06',6,6,'DPS Usuario Cuatro',10,4,6,585,'NO_TURNADA'),(7,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-07-07',7,7,'DPS Usuario Cinco',10,5,7,285,'NO_TURNADA'),(8,'Asesoramiento sobre divorcio voluntario iniciado','Conclusión: Divorcio Voluntario concedido',1,'2020-08-08',8,8,'DPS Usuario Seis',2,6,8,226,'NO_TURNADA'),(9,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2020-09-09',9,9,'DPS Usuario Siete',14,7,9,230,'NO_TURNADA'),(10,'Asesoramiento sobre cancelación de pensión iniciado','Conclusión: Cancelación de Pensión procesada',1,'2020-10-10',10,10,'DPS Usuario Ocho',8,8,10,528,'NO_TURNADA'),(11,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-11-11',11,11,'DPS Usuario Cuatro',10,4,11,1103,'NO_TURNADA'),(12,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2020-12-12',12,12,'DPS Usuario Cinco',10,5,12,1117,'NO_TURNADA'),(13,'Asesoramiento sobre divorcio voluntario iniciado','Conclusión: Divorcio Voluntario concedido',1,'2021-01-01',13,13,'DPS Usuario Seis',2,6,13,631,'NO_TURNADA'),(14,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2021-02-02',14,14,'DPS Usuario Siete',14,7,14,1550,'NO_TURNADA'),(15,'Asesoramiento sobre cancelación de pensión iniciado','Conclusión: Cancelación de Pensión procesada',1,'2021-03-03',15,15,'DPS Usuario Ocho',8,8,15,134,'NO_TURNADA'),(16,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2021-04-04',16,16,'DPS Usuario Cuatro',10,4,16,215,'NO_TURNADA'),(17,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2021-05-05',16,17,'DPS Usuario Cinco',10,5,16,727,'NO_TURNADA'),(18,'Asesoramiento sobre divorcio voluntario iniciado','Conclusión: Divorcio Voluntario concedido',1,'2021-06-06',15,18,'DPS Usuario Seis',2,6,15,1304,'NO_TURNADA'),(19,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2021-07-07',14,19,'DPS Usuario Siete',14,7,14,1550,'NO_TURNADA'),(20,'Asesoramiento sobre cancelación de pensión iniciado','Conclusión: Cancelación de Pensión procesada',1,'2021-08-08',13,20,'DPS Usuario Ocho',8,8,13,1253,'NO_TURNADA'),(21,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2021-09-09',12,21,'DPS Usuario Cuatro',10,4,12,1117,'NO_TURNADA'),(22,'Asesoramiento sobre nulidad de acta de nacimiento iniciado','Conclusión: Nulidad de Acta de Nacimiento confirmada',1,'2021-10-10',11,22,'DPS Usuario Cinco',10,5,11,1266,'NO_TURNADA'),(23,'Asesoramiento sobre divorcio voluntario iniciado','Conclusión: Divorcio Voluntario concedido',1,'2021-11-11',10,23,'DPS Usuario Seis',2,6,10,2355,'NO_TURNADA'),(24,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2021-12-12',9,24,'DPS Usuario Siete',14,7,9,950,'NO_TURNADA'),(25,'Asesoramiento sobre cancelación de pensión iniciado','Conclusión: Cancelación de Pensión procesada',1,'2022-01-01',8,25,'DPS Usuario Ocho',8,8,8,600,'NO_TURNADA'),(26,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2022-02-02',7,26,'DPS Usuario Cuatro',14,4,7,1440,'NO_TURNADA'),(27,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2022-03-03',6,27,'DPS Usuario Cinco',14,5,6,660,'NO_TURNADA'),(28,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2022-04-04',5,28,'DPS Usuario Seis',14,6,5,209,'NO_TURNADA'),(29,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2022-05-05',4,29,'DPS Usuario Siete',14,7,4,251,'NO_TURNADA'),(30,'Asesoramiento sobre sucesorio testamentario iniciado','Conclusión: Sucesorio Testamentario completado',1,'2022-06-06',3,30,'DPS Usuario Ocho',14,8,3,1163,'NO_TURNADA'),(31,'En resumen la asesoria trato de como resolver el divorcio en cuestion por inconformidad de la pareja','Al final se pudo llegar a un acuerdo que era lo mejor se repartieron los vienes en cantidades equitativas',1,'2023-12-16',17,31,'DPS Usuario Nueve',1,9,1,60,'NO_TURNADA'),(32,'En resumen la asesoria trato de anular la acta del asesorado pues contiene una falta de ortografia en su nombre y su fecha de nacimiento','Al final se pudo anular la acta y actualizar los datos',1,'2023-01-16',18,31,'DPS Usuario Cinco',10,5,2,207,'NO_TURNADA'),(33,'En resumen la asesoria trato de un divorcio por maltrato','Al final se pudo llegar a un acuerdo el padre debera firmar el divorcio y proporcionar manutencion a los hijos de la pareja',1,'2023-03-23',19,31,'DPS Usuario Diez',1,10,3,1929,'NO_TURNADA'),(34,'En resumen la asesoria trato de la anulacion de su acta de nacimeinto pues esta incorrecto su nombre','Al final se pudo anular dicha acta y actualizar la informacion',1,'2023-12-25',20,31,'DPS Usuario Once',10,11,4,1297,'NO_TURNADA'),(35,'En resumen la asesoria trato de un conflicto familiar por la pelea de la custodia de los hijos','Al final se pudo llegar a un acuerdo y la madre tendra la custodia',1,'2024-01-16',21,31,'DPS Usuario Once',11,11,5,270,'NO_TURNADA'),(36,'En resumen la asesoria trato de la anulacion de un acta de nacimiento por informacion erronea la fecha de nacimiento esta incorrecta','Al final se pudo anular dicha acta y actualizar la informacion',1,'2020-06-16',22,31,'DPS Usuario Once',10,11,6,585,'NO_TURNADA'),(37,'En resumen la asesoria trato de anular la acta de nacimiento pues presentaba errores de ortografia en el nombre','Al final se pudo anular dicha acta y actualizar la informacion',1,'2021-08-10',23,31,'DPS Usuario Cinco',10,5,7,1963,'NO_TURNADA'),(38,'En resumen la asesoria trato de resolver los problemas de violencia en el hogar','Al final se llego al acuerdo de realizar un divorcio y asignar una orden de restricion a el padre',1,'2024-01-16',24,31,'DPS Usuario Diez',11,10,8,706,'NO_TURNADA'),(39,'En resumen la asesoria trato de la anulacion de un acta de nacimiento por informacion erronea la fecha de nacimiento esta incorrecta','Al final se pudo anular dicha acta y actualizar la informacion',1,'2021-08-10',25,31,'DPS Usuario Once',10,11,9,505,'NO_TURNADA'),(40,'En resumen la asesoria trato de completar un divorcio pues el hombre de la relación ya no amaba a su pareja','Al final se pudo concretar el divorcio',1,'2023-12-16',26,31,'DPS Usuario Nueve',1,9,10,643,'NO_TURNADA'),(41,'En resumen la asesoria trato de anular la acta de nacimiento de la madre del asesorado','No se pudo concretar pues la madre no estuvo deacuerdo con el tramite',1,'2024-01-16',27,31,'DPS Usuario Cinco',10,5,11,1103,'NO_TURNADA'),(42,'En resumen la asesoria trato de la resolucion de un divorcio','Al final se concreto el divorcio y se dividieron los bienes.',1,'2021-08-10',28,31,'DPS Usuario Nueve',1,9,12,1744,'NO_TURNADA'),(43,'En resumen la asesoria trato de antender una orden de restriccion de parte de una madre hacia su pareja por maltrato a sus hijos','Al final se llevo a la corte el caso y se otorgo la orden de restriccion.',1,'2023-12-16',29,31,'DPS Usuario Cinco',11,5,13,631,'NO_TURNADA'),(44,'En resumen la asesoria trato de una anulacion de la acta de nacimiento del asesorado','Al final se le otorgo una nueva acta de nacimiento',1,'2023-12-16',30,31,'DPS Usuario Nueve',10,9,14,1550,'NO_TURNADA'),(45,'En resumen la asesoria trato del cambio de su acta de nacimeinto pues ya no tenia el mismo nombre','Al final se le otorgo una nueva acta de nacimiento',1,'2021-08-10',31,31,'DPS Usuario Nueve',10,9,15,2413,'NO_TURNADA'),(46,'En resumen la asesoria trato de un divorcio por maltrato','Al final se pudo llegar a un acuerdo el padre debera firmar el divorcio y proporcionar manutencion a los hijos de la pareja',1,'2023-12-16',32,31,'DPS Usuario Diez',1,10,16,1645,'NO_TURNADA'),(47,'En resumen la asesoria trato de una anulacion de acta de nacimiento por errores en la misma','Al final se le otorgo una nueva acta de nacimiento',1,'2024-01-16',17,31,'DPS Usuario Cinco',10,5,1,60,'NO_TURNADA'),(48,'En resumen la asesoria trato de una anulacion de acta de nacimiento por errores en la misma','Al final se le otorgo una nueva acta de nacimiento',1,'2023-12-16',18,31,'DPS Usuario Nueve',10,9,2,207,'NO_TURNADA'),(49,'En resumen la asesoria trato de un divorcio ocacionado por la falta de atencion y se queria dividir los bienes equitativamente','Al final se pudo llegar a un acuerdo con los responsables del robo',1,'2024-01-16',19,31,'DPS Usuario Nueve',1,9,3,2258,'NO_TURNADA'),(50,'En resumen la asesoria trato de la anulacion de acta de nacimeinto por conflito entre su fecha de naciemiento reagistrada y la real','Al final se le otorgo una nueva acta de nacimiento',1,'2023-12-16',20,31,'DPS Usuario Cinco',10,5,4,251,'NO_TURNADA'),(51,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2024-01-16',21,31,'DPS Usuario Cinco',10,5,5,1085,'NO_TURNADA'),(52,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-12-16',22,31,'DPS Usuario Nueve',10,9,6,660,'NO_TURNADA'),(53,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2021-08-10',23,31,'DPS Usuario Nueve',12,9,7,882,'NO_TURNADA'),(54,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-12-16',24,31,'DPS Usuario Cinco',10,5,8,226,'NO_TURNADA'),(55,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-12-16',25,31,'DPS Usuario Nueve',10,9,9,1712,'NO_TURNADA'),(56,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2021-08-10',26,31,'DPS Usuario Once',12,11,10,516,'NO_TURNADA'),(57,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-12-16',27,31,'DPS Usuario Cinco',10,5,11,1266,'NO_TURNADA'),(58,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-01-16',28,31,'DPS Usuario Nueve',10,9,12,1744,'NO_TURNADA'),(59,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-12-16',29,31,'DPS Usuario Diez',10,10,13,1253,'NO_TURNADA'),(60,'En resumen la asesoria trato de alimentos y paternidad.','Al final se pudo llegar a un acuerdo con los responsables padre y madre.',1,'2023-01-16',30,31,'DPS Usuario Nueve',12,9,14,1550,'NO_TURNADA'),(61,'Se informa de los requisitos','Asesorado cumple con requisitos',1,'2015-11-16',1,70,'DPS Usuario Cinco',1,5,1,60,'NO_TURNADA'),(62,'Informes de Divorcio Voluntario','Asesorado cumple con requisitos',1,'2016-10-19',2,71,'DPS Usuario Nueve',2,9,2,616,'NO_TURNADA'),(63,'Requisitos de hecho de concubinato','Asesorado no tiene como demostrar',1,'2016-10-19',36,72,'DPS Usuario Cinco',3,5,4,210,'NO_TURNADA'),(64,'Convenio de pension','Asesorado cumple con todos los requisitos',1,'2017-09-19',1,73,'DPS Usuario Ocho',4,8,1,60,'NO_TURNADA'),(65,'Se informa sobre la acreditacion de hechos de defuncion','Asesorado queda en regresar con los papeles',1,'2018-05-10',2,74,'DPS Usuario Ocho',5,8,2,694,'NO_TURNADA'),(66,'Se informa sobre los requisitos','Asesorado queda en regresar con los papeles',1,'2016-10-19',36,75,'DPS Usuario Nueve',6,9,4,1297,'NO_TURNADA'),(67,'Persona quiere acreditar hechos de nacimiento','Requiere actas de no registro',1,'2019-02-15',1,76,'DPS Usuario Cinco',7,5,1,60,'NO_TURNADA'),(68,'Solciita cancelacion de pension','No cumple con los requerimientos',1,'2019-02-15',2,77,'DPS Usuario Ocho',8,8,2,41,'NO_TURNADA'),(69,'Asesorada quiere demandar pension','Regresara con documentos',1,'2015-11-16',36,78,'DPS Usuario Nueve',9,9,4,251,'NO_TURNADA'),(70,'Anular acta de nacimiento','Requiere papeles de registro civil',1,'2020-03-02',1,79,'DPS Usuario Ocho',10,8,1,60,'NO_TURNADA'),(71,'Solicita convencias familiares','Inicia tramite',1,'2019-02-15',2,89,'DPS Usuario Nueve',11,9,2,207,'NO_TURNADA'),(72,'Solicita informes para demanar alimentos a expareja','Inicia tramite',1,'2020-03-02',36,88,'DPS Usuario Ocho',12,8,4,1297,'NO_TURNADA'),(73,'Padre no realizo testamento y quiere cambair propietario de casa','Asesorado puede iniciar tramite',1,'2019-02-15',1,87,'DPS Usuario Siete',13,7,1,60,'NO_TURNADA'),(74,'Asesorado quiere hacer valer testamento de su padre','Asesorado requiere juntar documentos',1,'2021-04-22',2,86,'DPS Usuario Ocho',14,8,2,207,'NO_TURNADA'),(75,'Se informa de los requisitos','Asesorado indica que regresera con los socumentos',1,'2015-11-16',36,85,'DPS Usuario Cinco',1,5,4,1297,'NO_TURNADA'),(76,'Informes de Divorcio Voluntario','Asesorado indica que regresera con los socumentos',1,'2022-09-12',1,84,'DPS Usuario Nueve',2,9,1,60,'NO_TURNADA'),(77,'Requisitos de hecho de concubinato','Asesorado inicia tramite',1,'2022-09-05',2,83,'DPS Usuario Siete',3,7,2,616,'NO_TURNADA'),(78,'Convenio de reduccion','Inicia tramite',1,'2022-09-12',36,82,'DPS Usuario Cinco',4,5,4,251,'NO_TURNADA'),(79,'Se informa sobre la acreditacion de hechos de defuncion','Asesorado buscara documentos',1,'2020-03-02',1,81,'DPS Usuario Seis',5,6,1,60,'NO_TURNADA'),(80,'Se informa sobre los requisitos','Asesorado queda en regresar con los papeles',1,'2021-04-22',2,80,'DPS Usuario Siete',6,7,2,694,'NO_TURNADA'),(81,'Solicita informes para acreditar hechos de nacimiento','Asesorado volvera con papeles',1,'2022-09-12',36,90,'DPS Usuario Nueve',7,9,4,1297,'NO_TURNADA'),(82,'Solicita informes para cancelar pension','Tienen los documentos para realizar el tramite',1,'2020-03-02',1,61,'DPS Usuario Ocho',8,8,1,60,'NO_TURNADA'),(83,'Requiere pension','No puede solicitar pension',1,'2021-04-22',2,62,'DPS Usuario Nueve',9,9,2,41,'NO_TURNADA'),(84,'Solicita informes para nulidad de acta de nacimiento','Cumple con los requerimientos',1,'2022-09-12',36,63,'DPS Usuario Siete',10,7,4,1434,'NO_TURNADA'),(85,'Solicita convencias familiares','Requiere tiempo para documentar',1,'2015-11-16',1,64,'DPS Usuario Cinco',11,5,1,60,'NO_TURNADA'),(86,'Solicita informes para demanar alimentos a expareja','No cumple con requisitos',1,'2020-03-02',2,65,'DPS Usuario Ocho',12,8,2,207,'NO_TURNADA'),(87,'Hijos quieren sustentarse como heredeos','No cumple con requisitos',1,'2016-10-19',36,66,'DPS Usuario Cinco',13,5,4,210,'NO_TURNADA'),(88,'Solicita informes Sucesorio Testamentario','Se le informa de los requisitos',1,'2015-11-16',1,67,'DPS Usuario Seis',14,6,1,60,'NO_TURNADA'),(89,'Se informa de los requisitos','Asesorado Quiere pensarlo',1,'2020-03-02',2,68,'DPS Usuario Ocho',1,8,2,616,'NO_TURNADA'),(90,'Informes de Divorcio Voluntario','Asesorado cumple con requisitos',1,'2021-04-22',36,69,'DPS Usuario Nueve',2,9,4,1434,'NO_TURNADA'),(91,'Asesoramiento para divorcio voluntario','Divorcio completado',1,'2025-10-21',49,91,'DPS Usuario Cinco',2,5,4,1434,'NO_TURNADA'),(92,'Asesoramiento sobre Sucesorio testamentario','Sucesorio Testamentario completo',1,'2025-11-11',50,92,'DPS Usuario Siete',14,7,4,210,'NO_TURNADA'),(93,'Asesoramiento sobre divorcio incausado por tendencias violentas de la pareja','Divorcio incausado completado',1,'2025-02-02',51,93,'DPS Usuario Cinco',1,5,4,1434,'NO_TURNADA'),(94,'Asesoramiento sobre nulidad de acta de nacimiento por doble registro','Nulidad completada',1,'2025-01-01',52,94,'DPS Usuario Doce',10,12,4,210,'NO_TURNADA'),(95,'Asesoramiento por oral de alimentos para 2 hijos','Oral de alimentos aceptado',1,'2025-03-03',53,95,'DPS Usuario Doce',12,12,4,210,'NO_TURNADA'),(96,'Asesoramiento por sucesorio intestamentado','Sucesorio intestamentario completo',1,'2025-04-06',54,96,'DPS Usuario Siete',13,7,4,210,'NO_TURNADA'),(97,'Asesoramiento por oral cuestiones familiares en contra de su hijo menor de edad','Oral cuestiones familiares completado',1,'2025-05-04',55,97,'DPS Usuario Seis',11,6,4,210,'NO_TURNADA'),(98,'Asesoramiento sobre Consignación de pension a favor del visitante en contra de su conyuge','Consignación de pension aceptada',1,'2025-05-23',56,98,'DPS Usuario Ocho',9,8,4,1434,'NO_TURNADA'),(99,'Asesoramiento sobre cancelacion de pension','pruebas aceptadas Cancelacion de pension aceptada',1,'2024-06-15',57,99,'DPS Usuario Seis',8,6,4,1434,'NO_TURNADA'),(100,'Asesoramiento sobre Acred. Hechos de concubinato ','Hechos aceptados Concubinato completo',1,'2024-10-12',58,100,'DPS Usuario Ocho',3,8,4,1434,'NO_TURNADA'),(101,'Asesoramiento para divorcio voluntario','Divorcio completado',1,'2024-11-11',59,101,'DPS Usuario Ocho',2,8,4,1434,'NO_TURNADA'),(102,'Asesoramiento sobre Sucesorio testamentario','Sucesorio Testamentario completo',1,'2025-11-11',60,102,'DPS Usuario Siete',14,7,4,210,'NO_TURNADA'),(103,'Asesoramiento sobre divorcio incausado por tendencias violentas de la pareja','Divorcio incausado completado',1,'2026-01-11',61,103,'DPS Usuario Nueve',1,9,4,210,'NO_TURNADA'),(104,'Asesoramiento sobre nulidad de acta de nacimiento por doble registro','Nulidad completada',1,'2025-03-03',62,104,'DPS Usuario Cinco',10,5,4,1434,'NO_TURNADA'),(105,'Asesoramiento por oral de alimentos para 2 hijos','Oral de alimentos aceptado',1,'2025-01-01',63,105,'DPS Usuario Doce',12,12,4,210,'NO_TURNADA'),(106,'Asesoramiento por sucesorio intestamentado','Sucesorio intestamentario completo',1,'2024-06-06',64,106,'DPS Usuario Seis',13,6,4,251,'NO_TURNADA'),(107,'Asesoramiento por oral cuestiones familiares en contra de su hijo menor de edad','Oral cuestiones familiares completado',1,'2025-09-09',51,107,'DPS Usuario Siete',11,7,4,210,'NO_TURNADA'),(108,'Asesoramiento sobre Consignación de pension a favor del visitante en contra de su conyuge','Consignación de pension aceptada',1,'2025-08-08',52,108,'DPS Usuario Nueve',9,9,4,210,'NO_TURNADA'),(109,'Asesoramiento sobre cancelacion de pension','pruebas aceptadas Cancelacion de pension aceptada',1,'2025-07-07',53,109,'DPS Usuario Cinco',8,5,4,251,'NO_TURNADA'),(110,'Asesoramiento sobre Acred. Hechos de concubinato ','Hechos aceptados Concubinato completo',1,'2026-08-18',54,110,'DPS Usuario Ocho',3,8,4,210,'NO_TURNADA'),(111,'Asesoramiento para divorcio voluntario','Divorcio completado',1,'2026-02-12',55,111,'DPS Usuario Doce',2,12,4,1434,'NO_TURNADA'),(112,'Asesoramiento sobre Sucesorio testamentario','Sucesorio Testamentario completo',1,'2026-12-12',56,112,'DPS Usuario Nueve',14,9,4,1434,'NO_TURNADA'),(113,'Asesoramiento sobre divorcio incausado por tendencias violentas de la pareja','Divorcio incausado completado',1,'2026-10-11',57,113,'DPS Usuario Seis',1,6,4,210,'NO_TURNADA'),(114,'Asesoramiento sobre nulidad de acta de nacimiento por doble registro','Nulidad completada',1,'2025-12-13',58,114,'DPS Usuario Ocho',10,8,4,1434,'NO_TURNADA'),(115,'Asesoramiento por oral de alimentos para 2 hijos','Oral de alimentos aceptado',1,'2024-11-18',59,115,'DPS Usuario Nueve',12,9,4,251,'NO_TURNADA'),(116,'Asesoramiento por sucesorio intestamentado','Sucesorio intestamentario completo',1,'2024-11-17',60,116,'DPS Usuario Doce',13,12,4,1434,'NO_TURNADA'),(117,'Asesoramiento por oral cuestiones familiares en contra de su hijo menor de edad','Oral cuestiones familiares completado',1,'2025-11-21',61,117,'DPS Usuario Cinco',11,5,4,210,'NO_TURNADA'),(118,'Asesoramiento sobre Consignación de pension a favor del visitante en contra de su conyuge','Consignación de pension aceptada',1,'2025-01-17',62,118,'DPS Usuario Siete',9,7,4,1434,'NO_TURNADA'),(119,'Asesoramiento sobre cancelacion de pension','pruebas aceptadas Cancelacion de pension aceptada',1,'2026-02-24',63,119,'DPS Usuario Nueve',8,9,4,251,'NO_TURNADA'),(120,'Asesoramiento sobre Acred. Hechos de concubinato ','Hechos aceptados Concubinato completo',1,'2026-03-21',64,120,'DPS Usuario Doce',3,12,4,210,'NO_TURNADA'),(121,'sdsadsadsadasdas','asdsadsadsadsad',0,'2024-03-31',8,121,'DPS Dos Usuario',5,2,5,135,'TURNADA');
/*!40000 ALTER TABLE `asesorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_requisitos`
--

DROP TABLE IF EXISTS `catalogo_requisitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalogo_requisitos` (
  `id_catalogo` int NOT NULL AUTO_INCREMENT,
  `descripcion_catalogo` varchar(75) NOT NULL,
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_requisitos`
--

LOCK TABLES `catalogo_requisitos` WRITE;
/*!40000 ALTER TABLE `catalogo_requisitos` DISABLE KEYS */;
INSERT INTO `catalogo_requisitos` VALUES (1,'Requisitos','ACTIVO'),(2,'Carta compromiso','ACTIVO'),(3,'Citatorio','ACTIVO'),(4,'Prueba','INACTIVO'),(5,'Prueba 3','ACTIVO');
/*!40000 ALTER TABLE `catalogo_requisitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defensores`
--

DROP TABLE IF EXISTS `defensores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `defensores` (
  `id_defensor` int NOT NULL,
  `nombre_defensor` varchar(100) NOT NULL,
  PRIMARY KEY (`id_defensor`),
  CONSTRAINT `fk_defesor_empleado` FOREIGN KEY (`id_defensor`) REFERENCES `empleados` (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
-- Table structure for table `detalle_asesorias_catalogos`
--

DROP TABLE IF EXISTS `detalle_asesorias_catalogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_asesorias_catalogos` (
  `id_asesoria` int NOT NULL,
  `id_catalogo` int NOT NULL,
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_detalle`),
  KEY `fk_detalle_asesoria_idx` (`id_asesoria`),
  KEY `fk_detalle_catalogo_idx` (`id_catalogo`),
  CONSTRAINT `fk_detalle_asesoria` FOREIGN KEY (`id_asesoria`) REFERENCES `asesorias` (`id_asesoria`),
  CONSTRAINT `fk_detalle_catalogo` FOREIGN KEY (`id_catalogo`) REFERENCES `catalogo_requisitos` (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_asesorias_catalogos`
--

LOCK TABLES `detalle_asesorias_catalogos` WRITE;
/*!40000 ALTER TABLE `detalle_asesorias_catalogos` DISABLE KEYS */;
INSERT INTO `detalle_asesorias_catalogos` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9),(10,1,10),(11,1,11),(12,1,12),(13,1,13),(14,1,14),(15,1,15),(16,1,16),(17,1,17),(18,1,18),(19,1,19),(20,1,20),(21,1,21),(22,1,22),(23,1,23),(24,1,24),(25,1,25),(26,1,26),(27,1,27),(28,1,28),(29,1,29),(30,1,30),(31,1,31),(32,1,32),(33,1,33),(34,1,34),(35,1,35),(36,1,36),(37,1,37),(38,1,38),(39,1,39),(40,1,40),(41,1,41),(42,1,42),(43,1,43),(44,1,44),(45,1,45),(46,1,46),(47,1,47),(48,1,48),(48,1,49),(50,1,50),(51,1,51),(52,1,52),(53,1,53),(54,1,54),(55,1,55),(56,1,56),(57,1,57),(58,1,58),(59,1,59),(60,1,60),(61,1,61),(62,1,62),(63,1,63),(64,1,64),(65,1,65),(66,1,66),(67,1,67),(68,1,68),(69,1,69),(70,1,70),(71,1,71),(72,1,72),(73,1,73),(74,1,74),(75,1,75),(76,1,76),(77,1,77),(78,1,78),(79,1,79),(80,1,80),(81,1,81),(82,1,82),(83,1,83),(84,1,84),(85,1,85),(86,1,86),(87,1,87),(88,1,88),(89,1,89),(90,1,90),(91,1,91),(92,1,92),(93,1,93),(94,1,94),(95,1,95),(96,1,96),(97,1,97),(98,1,98),(99,1,99),(100,1,100),(101,1,101),(102,1,102),(103,1,103),(104,1,104),(105,1,105),(106,1,106),(107,1,107),(108,1,108),(109,1,109),(110,1,110),(111,1,111),(112,1,112),(113,1,113),(114,1,114),(115,1,115),(116,1,116),(117,1,117),(118,1,118),(119,1,119),(120,1,120),(121,1,121),(121,2,122),(121,3,123);
/*!40000 ALTER TABLE `detalle_asesorias_catalogos` ENABLE KEYS */;
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
  `id_zona` int NOT NULL,
  `id_municipio_distrito` int NOT NULL,
  PRIMARY KEY (`id_distrito_judicial`),
  KEY `fk_distrito_judicial_zona_idx` (`id_zona`),
  KEY `fk_distritito_judicial_municipio_distrito_idx` (`id_municipio_distrito`),
  CONSTRAINT `fk_distritito_judicial_municipio_distrito` FOREIGN KEY (`id_municipio_distrito`) REFERENCES `municipios_distritos` (`id_municipio_distrito`),
  CONSTRAINT `fk_distrito_judicial_zona` FOREIGN KEY (`id_zona`) REFERENCES `zonas` (`id_zona`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distritos_judiciales`
--

LOCK TABLES `distritos_judiciales` WRITE;
/*!40000 ALTER TABLE `distritos_judiciales` DISABLE KEYS */;
INSERT INTO `distritos_judiciales` VALUES (1,'Distrito Judicial de Alamos',3,60),(2,'Distrito Judicial de Agua Prieta',1,41),(3,'Distrito Judicial de Altar',1,80),(4,'Distrito Judicial de Cajeme',3,251),(5,'Distrito Judicial de Cananea',1,270),(6,'Distrito Judicial de Guaymas',3,660),(7,'Distrito Judicial de Hermosillo',2,674),(8,'Distrito Judicial de Huatabampo',3,706),(9,'Distrito Judicial de Magdalena',1,950),(10,'Distrito Judicial de Moctezuma',2,1056),(11,'Distrito Judicial de Navojoa',3,1103),(12,'Distrito Judicial de Nogales',1,1117),(13,'Distrito Judicial de Puerto Peñasco',1,1253),(14,'Distrito Judicial de San Luis Rio Colorado',1,1550),(15,'Distrito Judicial de Sahuaripa',1,1304),(16,'Distrito Judicial de Ures',1,2295);
/*!40000 ALTER TABLE `distritos_judiciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicilios`
--

DROP TABLE IF EXISTS `domicilios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domicilios` (
  `id_domicilio` int NOT NULL AUTO_INCREMENT,
  `calle_domicilio` varchar(75) NOT NULL,
  `numero_exterior_domicilio` varchar(25) DEFAULT NULL,
  `numero_interior_domicilio` varchar(25) DEFAULT NULL,
  `id_colonia` int NOT NULL,
  PRIMARY KEY (`id_domicilio`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicilios`
--

LOCK TABLES `domicilios` WRITE;
/*!40000 ALTER TABLE `domicilios` DISABLE KEYS */;
INSERT INTO `domicilios` VALUES (1,'Argentina','279','',21225),(2,'Argentina','282',NULL,21225),(3,'Argentina','284',NULL,21225),(4,'Constitución','201',NULL,21225),(5,'Constitución','203',NULL,21225),(6,'Nogales','746',NULL,49398),(7,'Nogales','748',NULL,49398),(8,'Nogales','753',NULL,49398),(9,'Nogales','754',NULL,49398),(10,'Nogales','749',NULL,49398),(11,'Salermo','924',NULL,85593),(12,'Salermo','927',NULL,85593),(13,'Salermo','923',NULL,85593),(14,'Messina','928',NULL,85593),(15,'Messina','929',NULL,85593),(16,'Isla Cozomel','1134',NULL,3587),(17,'Isla Cozomel','1136',NULL,3587),(18,'Isla Cozomel','1132',NULL,3587),(19,'Isla Cozomel','1122',NULL,3587),(20,'Isla Cozomel','1123',NULL,3587),(21,'Valle del Girasol','1107',NULL,146442),(22,'Valle del Girasol','1108',NULL,146442),(23,'Valle del Girasol','1109',NULL,146442),(24,'Valle del Trebol','1124',NULL,146442),(25,'Valle del Trebol','1126',NULL,146442),(26,'Valle del Trebol','1129',NULL,146442),(27,'Valle del Yori','1132',NULL,146442),(28,'Valle del Yori','1134',NULL,146442),(29,'Valle del Yori','1136',NULL,146442),(30,'Valle del Yori','1139',NULL,146442),(31,'13 de octubre','1130',NULL,197),(32,'24 de diciembre','5',NULL,210),(33,'14 de febrero','16',NULL,213),(34,'5 de mayo','513',NULL,233),(35,'Guadalupe rodriguez','352',NULL,239),(36,'18 de Marzo','400',NULL,240),(37,'Zempoala','6404',NULL,252),(38,'Querétaro','205',NULL,272),(39,'2 de Marzo','5',NULL,280),(40,'Trinidad Rodriguez','4254',NULL,290),(41,'Calle 21','2310',NULL,300),(42,'5 De Mayo','2015',NULL,310),(43,'Benito Juarez','27',NULL,320),(44,'José Mariano Abasolo','200',NULL,330),(45,'San Jorge','4',NULL,340),(46,'Cjon. Changuitos','10',NULL,350),(47,'C. Tecnológico de Veracruz','538',NULL,360),(48,'Leandro Izaguirre','107',NULL,370),(49,'Prof. Jesús Flores Valle','8280',NULL,380),(50,'Ricardo Flores Magón','1005',NULL,390),(51,'Paciencia','277',NULL,400),(52,'Isla de Pájaros','350',NULL,424),(53,'C. Tierra y Libertad','146',NULL,425),(54,'Huizache','32',NULL,435),(55,'De las flores','69',NULL,440),(56,'C.1910','31',NULL,450),(57,'Rufo Figueroa','8',NULL,460),(58,'Playas de Cozumel','65',NULL,481),(59,'Juana Figueoa Meza','616',NULL,480),(60,'Dr. Reyes Betancurt','21',NULL,490),(61,'Maximiliano R. López','110',NULL,148856),(62,'Mayo','130',NULL,93593),(63,'Misioneros','150','10',86685),(64,'Mango','160','5',86685),(65,'Melchor Ocampo','250','18',148856),(66,'M. Kino','2526',NULL,100946),(67,'Miguel Alemán Velasco','3658',NULL,110259),(68,'República Dominicana','6987',NULL,149723),(69,'Reyes Catolicos Este','7056',NULL,116091),(70,'Río Magdalena','856',NULL,148856),(71,'Topanga','2357',NULL,100946),(72,'Triticale','526',NULL,152901),(73,'Tlaxcala','3',NULL,113286),(74,'Tamaulipas','212',NULL,110259),(75,'Toscana','2126',NULL,113286),(76,'Bellota','2980',NULL,100946),(77,'Buckingham','365',NULL,110259),(78,'De La Vereda','4566',NULL,148856),(79,'Del Valle','1566',NULL,152901),(80,'Geronimos','1598',NULL,110259),(81,'Guayabo','3698',NULL,149723),(82,'Golfo Pérsico','2667',NULL,116091),(83,'Imuris','1569',NULL,113286),(84,'Ingeniero De La Peña','1256',NULL,152901),(85,'Kauri','8956',NULL,93593),(86,'Oscuro Norte','9865',NULL,113286),(87,'Opatas','315',NULL,116091),(88,'Quinta Del Rey','1598',NULL,152901),(89,'Quelite','1236',NULL,149723),(90,'Santo Tomás','3542',NULL,148856),(91,'Tia Lencha','614',NULL,22222),(92,'Piña','210',NULL,33333),(93,'Avenida Emiliano Zapata','314',NULL,2),(94,'C. 79 A','681',NULL,23232),(95,'Aluminio','151',NULL,54321),(96,'Av Xilantro','373',NULL,22251),(97,'S. Ignacio de Loyola','137',NULL,54015),(98,'Wagner','122',NULL,54016),(99,'24 de Febrero','41',NULL,46251),(100,'Progreso','79',NULL,46252),(101,'General E. Zapata','35',NULL,46253),(102,'Caudillo del Sur','153',NULL,46254),(103,'Yucatán','724',NULL,46255),(104,'Vicente Guerrero','15',NULL,46256),(105,'Felipe Angeles','1222',NULL,46258),(106,'Aquiles Serdán','546',NULL,46261),(107,'Juan Aldama','119',NULL,46263),(108,'Calle Josefa Ortiz De Domínguez','291',NULL,46265),(109,'Calle Gral. Cepeda','617',NULL,46266),(110,'Periodista Roberto Pita Cornejo','34',NULL,46269),(111,'20 de Noviembre','716',NULL,46270),(112,'Cuauhtémoc','166',NULL,46271),(113,'Río Actopan','499',NULL,46272),(114,'La Ceiba','150',NULL,46273),(115,'Calle Emiliano Zapata','218',NULL,46274),(116,'Popocatépetl','6909',NULL,46275),(117,'Rosales','943',NULL,46277),(118,'Lic. Isidro Fabela','11',NULL,46278),(119,'Álvaro Obregón','49',NULL,46279),(120,'Sexta Avenida Nte.','815',NULL,46280),(121,'Alberto','2905','',4844);
/*!40000 ALTER TABLE `domicilios` ENABLE KEYS */;
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
  `id_distrito_judicial` int NOT NULL,
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL DEFAULT 'ACTIVO',
  PRIMARY KEY (`id_empleado`),
  KEY `fk_empleado_distrito_judicial_idx` (`id_distrito_judicial`),
  CONSTRAINT `fk_empleado_distrito_judicial` FOREIGN KEY (`id_distrito_judicial`) REFERENCES `distritos_judiciales` (`id_distrito_judicial`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'defensor',1,'ACTIVO'),(2,'defensor',2,'ACTIVO'),(3,'defensor',3,'ACTIVO'),(4,'defensor',4,'ACTIVO'),(5,'defensor',5,'ACTIVO'),(6,'defensor',6,'ACTIVO'),(7,'defensor',7,'ACTIVO'),(8,'defensor',8,'ACTIVO'),(9,'defensor',9,'ACTIVO'),(10,'defensor',10,'ACTIVO'),(11,'defensor',11,'ACTIVO'),(12,'defensor',12,'ACTIVO'),(13,'defensor',13,'ACTIVO'),(14,'defensor',14,'ACTIVO'),(15,'defensor',15,'ACTIVO'),(16,'defensor',16,'ACTIVO'),(17,'asesor',1,'ACTIVO'),(18,'asesor',2,'ACTIVO'),(19,'asesor',3,'ACTIVO'),(20,'asesor',4,'ACTIVO'),(21,'asesor',5,'ACTIVO'),(22,'asesor',6,'ACTIVO'),(23,'asesor',7,'ACTIVO'),(24,'asesor',8,'ACTIVO'),(25,'asesor',9,'ACTIVO'),(26,'asesor',10,'ACTIVO'),(27,'asesor',11,'ACTIVO'),(28,'asesor',12,'ACTIVO'),(29,'asesor',13,'ACTIVO'),(30,'asesor',14,'ACTIVO'),(31,'asesor',15,'ACTIVO'),(32,'asesor',16,'ACTIVO'),(33,'asesor',1,'ACTIVO'),(34,'asesor',2,'ACTIVO'),(35,'asesor',3,'ACTIVO'),(36,'asesor',4,'ACTIVO'),(37,'asesor',5,'ACTIVO'),(38,'asesor',6,'ACTIVO'),(39,'asesor',7,'ACTIVO'),(40,'asesor',8,'ACTIVO'),(41,'asesor',9,'ACTIVO'),(42,'asesor',10,'ACTIVO'),(43,'asesor',11,'ACTIVO'),(44,'asesor',12,'ACTIVO'),(45,'asesor',13,'ACTIVO'),(46,'asesor',14,'ACTIVO'),(47,'asesor',15,'ACTIVO'),(48,'asesor',16,'ACTIVO'),(49,'defensor',4,'ACTIVO'),(50,'defensor',4,'ACTIVO'),(51,'defensor',4,'ACTIVO'),(52,'defensor',4,'ACTIVO'),(53,'defensor',4,'ACTIVO'),(54,'defensor',4,'ACTIVO'),(55,'defensor',4,'ACTIVO'),(56,'defensor',4,'ACTIVO'),(57,'defensor',4,'ACTIVO'),(58,'defensor',4,'ACTIVO'),(59,'defensor',4,'ACTIVO'),(60,'defensor',4,'ACTIVO'),(61,'defensor',4,'ACTIVO'),(62,'defensor',4,'ACTIVO'),(63,'defensor',4,'ACTIVO'),(64,'defensor',4,'ACTIVO'),(73,'asesor',4,'ACTIVO'),(74,'asesor',4,'INACTIVO'),(75,'asesor',4,'INACTIVO');
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
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL,
  PRIMARY KEY (`id_estado_civil`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_civiles`
--

LOCK TABLES `estados_civiles` WRITE;
/*!40000 ALTER TABLE `estados_civiles` DISABLE KEYS */;
INSERT INTO `estados_civiles` VALUES (1,'Soltero(a)','ACTIVO'),(2,'Casado(a)','ACTIVO'),(3,'Unión Libre','ACTIVO'),(4,'Separado(a)','ACTIVO'),(5,'Divorciado(a)','ACTIVO'),(6,'Viudo(a)','ACTIVO'),(7,'Prueba 4','INACTIVO');
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
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Masculino','ACTIVO'),(2,'Femenino','ACTIVO'),(3,'No Binario','ACTIVO'),(5,'Prueba','INACTIVO'),(6,'Prueba 5','INACTIVO');
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
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL,
  PRIMARY KEY (`id_motivo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motivos`
--

LOCK TABLES `motivos` WRITE;
/*!40000 ALTER TABLE `motivos` DISABLE KEYS */;
INSERT INTO `motivos` VALUES (1,'Discapacidad o enfermedad','ACTIVO'),(2,'Ama de casa','ACTIVO'),(3,'En busca de empleo','ACTIVO'),(4,'Pensionado(a)','ACTIVO'),(5,'Prueba','ACTIVO'),(6,'Prueba 5','INACTIVO');
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
  `id_distrito_judicial` int NOT NULL,
  PRIMARY KEY (`id_municipio_distrito`),
  KEY `fk_municipio_distrito_distrito_judicial_idx` (`id_distrito_judicial`),
  CONSTRAINT `fk_municipio_distrito_distrito_judicial` FOREIGN KEY (`id_distrito_judicial`) REFERENCES `distritos_judiciales` (`id_distrito_judicial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios_distritos`
--

LOCK TABLES `municipios_distritos` WRITE;
/*!40000 ALTER TABLE `municipios_distritos` DISABLE KEYS */;
INSERT INTO `municipios_distritos` VALUES (29,'Aconchi',16),(41,'Agua Prieta',2),(60,'Álamos',1),(80,'Altar',3),(134,'Arivechi',15),(135,'Arizpe',5),(159,'Atil',3),(204,'Bacadéhuachi',10),(206,'Bacanora',15),(207,'Bacerac',2),(209,'Bacoachi',5),(210,'Bácum',4),(215,'Banámichi',16),(218,'Baviácora',16),(219,'Bavispe',2),(226,'Benito Juárez',8),(230,'Benjamín Hill',9),(246,'Caborca',3),(251,'Cajeme',4),(270,'Cananea',5),(285,'Carbó',7),(505,'Cucurpe',9),(516,'Cumpas',10),(528,'Divisaderos',10),(585,'Empalme',6),(600,'Etchojoa',8),(616,'Fronteras',2),(631,'General Plutarco Elías Calles',13),(643,'Granados',10),(660,'Guaymas',6),(674,'Hermosillo',7),(694,'Huachinera',2),(704,'Huásabas',10),(706,'Huatabampo',8),(727,'Huépac',16),(757,'Imuris',9),(882,'La Colorada',7),(950,'Magdalena',9),(1001,'Mazatán',7),(1056,'Moctezuma',10),(1085,'Naco',5),(1086,'Nácori Chico',10),(1087,'Nacozari de García',10),(1103,'Navojoa',11),(1117,'Nogales',12),(1160,'Ónavas',7),(1162,'Opodepe',16),(1163,'Oquitoa',3),(1232,'Pitiquito',3),(1253,'Puerto Peñasco',13),(1266,'Quiriego',11),(1276,'Rayón',16),(1297,'Rosario',4),(1304,'Sahuaripa',15),(1396,'San Felipe de Jesús',16),(1434,'San Ignacio Río Muerto',4),(1440,'San Javier',7),(1550,'San Luis Río Colorado',14),(1592,'San Miguel de Horcasitas',7),(1645,'San Pedro de la Cueva',16),(1712,'Santa Ana',9),(1744,'Santa Cruz',12),(1929,'Sáric',3),(1963,'Soyopa',7),(1964,'Suaqui Grande',7),(2085,'Tepache',10),(2255,'Trincheras',3),(2258,'Tubutama',3),(2295,'Ures',16),(2355,'Villa Hidalgo',10),(2359,'Villa Pesqueira',16),(2413,'Yécora',15);
/*!40000 ALTER TABLE `municipios_distritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personas` (
  `id_persona` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido_materno` varchar(50) NOT NULL,
  `apellido_paterno` varchar(50) NOT NULL,
  `edad` int NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `id_domicilio` int NOT NULL,
  `id_genero` int NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `fk_domicilio_idx` (`id_domicilio`),
  KEY `fk_genero_idx` (`id_genero`),
  CONSTRAINT `fk_domicilio_persona` FOREIGN KEY (`id_domicilio`) REFERENCES `domicilios` (`id_domicilio`),
  CONSTRAINT `fk_genero_persona` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES (1,'Juan','García','Pérez',25,'644123456',1,2),(2,'Ana','Martínez','Rodríguez',30,'644987654',2,2),(3,'Pedro','López','Hernández',28,'644555111',3,1),(4,'María','Sánchez','Gómez',22,'644333444',4,2),(5,'Carlos','Fernández','Ruiz',35,'644777888',5,1),(6,'Laura','Díaz','Vargas',27,'644666777',6,2),(7,'Miguel','Gutiérrez','Torres',32,'644999888',7,1),(8,'Isabel','Cruz','Jiménez',26,'644444555',8,2),(9,'Javier','Herrera','Soto',29,'644111222',9,1),(10,'Sofía','Ramírez','Medina',23,'644222333',10,2),(11,'David','Ortega','Luna',31,'644555444',11,1),(12,'Paula','Góngora','Fuentes',24,'644888999',12,2),(13,'Luis','Galindo','Castañeda',33,'644123123',13,1),(14,'Carmen','Navarro','Valencia',28,'644456456',14,2),(15,'Alberto','Santos','Rojas',34,'644789789',15,1),(16,'Raquel','Vega','Serrano',25,'644987654',16,2),(17,'Ricardo','Aguilar','Molina',30,'644111222',17,1),(18,'Gabriela','Paredes','Guerrero',29,'644555444',18,2),(19,'Fernando','Guzmán','Hernández',26,'644333444',19,1),(20,'Silvia','Nava','Mendez',27,'644222333',20,2),(21,'Eduardo','Salgado','García',33,'644666777',21,1),(22,'Valeria','Jiménez','Soto',24,'644789789',22,2),(23,'Arturo','Martínez','Torres',32,'644444555',23,1),(24,'Natalia','Ruiz','Gómez',23,'644987654',24,2),(25,'Héctor','Fuentes','Cruz',28,'644555444',25,1),(26,'Verónica','Hernández','Luna',26,'644123123',26,2),(27,'Oscar','Medina','Vega',31,'644111222',27,1),(28,'Daniela','García','Rojas',30,'644666777',28,2),(29,'Martín','Castañeda','Valencia',29,'644222333',29,1),(30,'Adriana','Valdez','Serrano',27,'644789789',30,2),(31,'Martha','Gonzalez','Lopez',20,'6442138093',31,2),(32,'Roberto','Martinez','Garcia',30,'6442138092',32,1),(33,'Andrea','Rodriguez','Hernandez',34,'6442138091',33,2),(34,'Alejandro','Torres','Ramirez',24,'6442138099',34,1),(35,'Clara','Morales','Jimenez',18,'6442138097',35,2),(36,'Jorge','Ramirez','Ortiz',45,'6442138081',36,1),(37,'Isabel','Sanchez','Perez',34,'6442138082',37,2),(38,'Francisco','Mendoza','Ruiz',30,'6442138083',38,1),(39,'Paula','Castro','Vargas',23,'6442138084',39,2),(40,'Carlos','Rodríguez','Medina',43,'6442138085',40,1),(41,'Laura','Pérez','Torres',53,'6442138086',41,2),(42,'Javier','García','Soto',23,'6442138087',42,1),(43,'Natalia','López','Martínez',19,'6442138088',43,2),(44,'Juan Carlos','Torres','Silva',23,'6442138089',44,1),(45,'Daniela','Flores','García',24,'6442138041',45,2),(46,'Eduardo','González','Núñez',26,'6442138042',46,1),(47,'María','Torres','Gómez',27,'6442138043',47,2),(48,'Felipe','Ramírez','Salazar',29,'6442138044',48,1),(49,'Valentina','Soto','Morales',23,'6442138045',49,2),(50,'Luisa','Martínez','Castro',45,'6442138046',50,2),(51,'Guillermo','Herrera','Ruiz',35,'6442138047',51,1),(52,'Beatriz','Gómez','Flores',26,'6442138048',52,2),(53,'Raúl','Sánchez','García',27,'6442138049',53,1),(54,'Ana','Torres','Martínez',28,'6442138011',54,2),(55,'Mario','Ramírez','Soto',29,'6442138012',55,1),(56,'Gabriela','Morales','Silva',34,'6442138013',56,2),(57,'Ángel','Pérez','Hernández',25,'6442138014',57,1),(58,'Carolina','Torres','Ramírez',25,'6442138015',58,2),(59,'Hugo','Soto','González',27,'6442138016',59,1),(60,'Lucía','García','Mendoza',20,'6442138017',60,2),(61,'Isabel','Del Carpio','Gordillo',25,'6441526682',90,2),(62,'Isabel','Del Carpio','Gordillo',26,'6441526683',89,2),(63,'Isabel','Del Carpio','Gordillo',30,'6441826684',88,2),(64,'Isabel','Del Carpio','Gordillo',38,'6441535885',87,2),(65,'Isabel','Del Carpio','Gordillo',40,'6441674686',86,2),(66,'Javier','Blas','Regis',25,'6441852682',85,1),(67,'Jesus','Galvez','Rangel',26,'6441526159',84,1),(68,'Silvia','Mendoza','Espinoza',32,'6441523262',83,2),(69,'Beatriz','Gonzalez','Valenzuela',35,'6442576682',82,2),(70,'Julio','Gil','Mendoza',41,'6441574682',81,3),(71,'Briseyda','Mendoza','Urbalejo',58,'644216682',80,2),(72,'Juan','Urbalejo','Espinoza',60,'6442876672',69,1),(73,'Francisco','Navarro','Rivera',42,'6441557682',68,1),(74,'Silvia','Garcia','Navarro',41,'6441512382',67,2),(75,'Guadalupe','Rivera','Gonzalez',40,'6442154682',66,2),(76,'Juan','Gonzalez','Mendoza',35,'6441526358',65,1),(77,'Alejandra','Garcia','Rivera',62,'6441521587',64,3),(78,'Maria','Navarro','Gonzalez',45,'6441523265',63,2),(79,'Javier','Gonzalez','Robles',26,'6441521587',62,1),(80,'Monica','Navarro','Rivera',19,'6441522587',61,2),(81,'Natalia','Espinoza','Navarro',52,'6441522369',79,2),(82,'Juan','Garcia','Mendoza',55,'6441521587',70,1),(83,'Julio','Garcia','Meza',60,'6441522547',71,1),(84,'Francisco','Espinoza','Gil',70,'6441523267',72,1),(85,'Alexandra','Garcia','Meza',32,'6441522356',73,2),(86,'Maria','Mendoza','Garcia',65,'6441522145',74,2),(87,'Juan','Robles','Mendoza',34,'6441523698',75,1),(88,'Julio','Mendoza','Meza',33,'6441523652',76,1),(89,'Silvia','Gil','Mendoza',30,'6441522317',77,2),(90,'Maria','Meza','Perez',37,'6441526327',78,2),(91,'Marco','Inzunza','Irineo',21,'6445201545',91,1),(92,'Marco','Inzunza','Irineo',21,'6445206545',92,1),(93,'Marco','Inzunza','Irineo',21,'6445212045',93,1),(94,'Marco','Inzunza','Irineo',21,'6446301545',94,1),(95,'Marco','Inzunza','Irineo',21,'6445206505',95,1),(96,'Jesus','Salcido','Nuñez',26,'6422513654',96,1),(97,'Maria','Valencia','Lopez',25,'6535625142',97,2),(98,'Helena','Gonzalez','Angulo',22,'6425423654',98,2),(99,'Martha','Martinez','Cortez',26,'6545331542',99,2),(100,'Rocio','Flores','Gutierrez',35,'6465656565',100,2),(101,'Gema','Herrera','Gomez',65,'6446464646',101,2),(102,'Alan','Gonzalez','Fernandez',23,'6446464642',102,1),(103,'Jorge','Espinoza','Silva',23,'6444524152',103,1),(104,'German','Saldivar','Inzunza',60,'6445121542',104,1),(105,'Antonio','Zayas','Matinez',26,'6445154265',105,1),(106,'Jesus','Lopez','Gaxiola',32,'6445215412',106,1),(107,'Alex','Valenzuela','Ramos',35,'6445189465',107,1),(108,'Alejandra','Zapata','Hernandez',23,'6445879546',108,2),(109,'Claudia','Martinez','Zavala',23,'6445215897',109,2),(110,'Jovana','Valdenegro','Perez',24,'6445215487',110,2),(111,'Daniel','Murrieta','Dominguez',26,'6445213456',111,1),(112,'Juan','Lopez','Duarte',63,'6445645424',112,1),(113,'Carlos','Abarca','Gutierrez',32,'6445121543',113,1),(114,'Raul','Luna','Suarez',36,'6445521541',114,1),(115,'Luis','Gallego','Flores',45,'6545454215',115,1),(116,'Marisela','Blanco','Ruiz',50,'6644521542',116,2),(117,'Fernanda','Martin','Bravo',21,'6454521541',117,2),(118,'Lizeth','Costa','Moreno',22,'6445215425',118,2),(119,'Esmeralda','Castillo','Diaz',26,'6454421547',119,2),(120,'Diana','Reyes','Mendoza',22,'6445875412',120,2),(121,'Jose Ramon','Flores','Diaz',21,'2121212121',121,1);
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
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
  `estatus_general` enum('ACTIVO','INACTIVO') NOT NULL,
  PRIMARY KEY (`id_tipo_juicio`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_juicios`
--

LOCK TABLES `tipos_juicios` WRITE;
/*!40000 ALTER TABLE `tipos_juicios` DISABLE KEYS */;
INSERT INTO `tipos_juicios` VALUES (1,'Divorcio Incausado','ACTIVO'),(2,'Divorcio Voluntario','ACTIVO'),(3,'J. Vol de Acred. de Hechos de Concubinato','ACTIVO'),(4,'J. Vol de Convenio Judicial (Pensión y Convivencia)','ACTIVO'),(5,'J. Vol. Acred. Hechos de Defunción','ACTIVO'),(6,'J. Vol. Acred. Hechos de Dep. Económica','ACTIVO'),(7,'J. Vol. Acred. Hechos de Nacimiento','ACTIVO'),(8,'J. Vol. de Cancelación de Pensión','ACTIVO'),(9,'J. Vol. de Consignación de Pensión','ACTIVO'),(10,'Nulidad de Acta de Nacimiento','ACTIVO'),(11,'Oral Cuestiones Familiares (Convivencia)','ACTIVO'),(12,'Oral de Alimentos','ACTIVO'),(13,'Sucesorio Intestamentario','ACTIVO'),(14,'Sucesorio Testamentario','ACTIVO');
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
  `id_defensor` int NOT NULL,
  `id_asesoria` int NOT NULL,
  `estatus_general` enum('EN_SEGUIMIENTO','NO_SEGUIMIENTO') DEFAULT NULL,
  PRIMARY KEY (`id_turno`),
  KEY `fk_id_defensor_idx` (`id_defensor`),
  KEY `fk_id_asesoria_idx` (`id_asesoria`),
  CONSTRAINT `fk_id_asesoria` FOREIGN KEY (`id_asesoria`) REFERENCES `asesorias` (`id_asesoria`),
  CONSTRAINT `fk_id_defensor` FOREIGN KEY (`id_defensor`) REFERENCES `defensores` (`id_defensor`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turnos`
--

LOCK TABLES `turnos` WRITE;
/*!40000 ALTER TABLE `turnos` DISABLE KEYS */;
INSERT INTO `turnos` VALUES (1,'2024-04-01','12:12:00',1,121,'NO_SEGUIMIENTO'),(2,'2024-04-03','12:12:00',13,1,'EN_SEGUIMIENTO');
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

-- Dump completed on 2024-04-07 22:25:52
