-- MySQL Script generated by MySQL Workbench
-- Mo 06 Feb 2023 18:55:06 CET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ad_campaign
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ad_campaign
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ad_campaign` ;
USE `ad_campaign` ;

-- -----------------------------------------------------
-- Table `ad_campaign`.`campaign_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ad_campaign`.`campaign_data` (
  `date` DATETIME NULL DEFAULT NULL,
  `label` TEXT NULL DEFAULT NULL,
  `attributed_conversions` DOUBLE NULL DEFAULT NULL,
  `attributed_revenue` DOUBLE NULL DEFAULT NULL,
  `type` TEXT NULL DEFAULT NULL,
  `spends` DOUBLE NULL DEFAULT NULL,
  `partition_id` TEXT NULL DEFAULT NULL,
  `optimisation_target` TEXT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
