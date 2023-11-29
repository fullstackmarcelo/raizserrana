-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: raizserrana
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hierbas`
--

DROP TABLE IF EXISTS `hierbas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hierbas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hierbas`
--

LOCK TABLES `hierbas` WRITE;
/*!40000 ALTER TABLE `hierbas` DISABLE KEYS */;
INSERT INTO `hierbas` VALUES (1,'AMBAY','Para las afecciones respiratorias catarros y problemas en las vías respiratorias como resfríos, tos,asma, bronquitis, pulmonía, neumonía, enfisema y angina. Para el corazón, regulariza los latidos del corazón. Alivia las palpitaciones generadas por los nervios, fortalece el corazón y mejora el funcionamiento del sistema circulatorio. Antiespasmódico. Antioxidantes. Antipirético. Antitusivo. Astringente. Descongestiva. Diurética. Sedante','gvtjfa8bz3mt5oib5kbe'),(2,'COLA DE CABALLO','La Cola de Caballo se destaca por su alto contenido mineral y sus propiedades diuréticas. Se utiliza para tratar las infecciones urinarias como la cistitis y la uretritis, actuando sobre los riñones para liberar cálculos y arenillas. También se utiliza para tratar problemas de próstata, edemas y retención de líquidos. Su acción depurativa es de gran ayuda para el estómago y los intestinos. Asimismo, se utiliza para tratar afecciones del sistema respiratorio, tales como infecciones pulmonares.','kuewevbdyx4sncxcyphc'),(3,'ESPINA COLORADA','Alivia cólicos y afecciones hepáticas, controla la hipertensión arterial, el reumatismo, el ácido úrico, los espasmos hepáticos como la cirrosis, también es un buen diurético. Es ideal para combatir la afecciones de la gastritis, hígado, vesícula, pesadez del estómago, cólicos hepáticos. Puede controlar excelentemente las piedras en la vesícula, controla los dolores reumáticos. Prostatitis. También tiene propiedades abortivas, por eso está prohibido el consumo durante el embarazo','lndh4017rdfeygu9p2dy'),(6,'MALVA','Es un buen remedio natural contra la cistitis – gracias a sus propiedades antiinflamatorias y calmantes, (contienen vitaminas – como la vitamina A, vitaminas B y la vitamina C – sales minerales – incluyendo potasio y calcio – taninos, flavonoides, antocianinas, mucílago, malvina y malvidina) Todos los nutrientes que contiene le dan a esta planta propiedades desinfectantes, laxantes, digestivas, expectorantes, calmantes, antiinflamatorias y relajantes. Acción desinfectante, combate los dolores de estómago y el estreñimiento, expectorante, y antiinflamatoria','ygp9dwrqb9zrkzukan4t'),(12,'CEDRÓN','El Cedrón se destaca por sus propiedades digestivas y relajantes. Es ideal para tratar el insomnio. Colabora con las digestiones lentas, libera de gases y es antidiarreico. Ayuda a calmar el sistema nervioso ya que posee propiedades ansiolíticas. Es antiespasmódico (alivia o calma los espasmos o convulsiones). Controla las reacciones alérgicas y los dolores reumáticos. Puede utilizarse en buches para combatir el mal aliento y si se coloca sobre la mejilla a modo de compresa de hojas machacadas, alivia el dolor de muelas.','vrqswep76rwdfe5ffolg');
/*!40000 ALTER TABLE `hierbas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Marcelo','8b123b7a7cf86f5aa9424d1f379384d8'),(2,'Carlos','8b123b7a7cf86f5aa9424d1f379384d8');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 10:23:50
