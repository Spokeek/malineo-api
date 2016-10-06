-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 06 Octobre 2016 à 00:57
-- Version du serveur :  5.6.25
-- Version de PHP :  5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `malineo`
--

CREATE DATABASE malineo

-- --------------------------------------------------------

--
-- Structure de la table `approval`
--

CREATE TABLE IF NOT EXISTS `approval` (
  `idApproval` int(11) NOT NULL,
  `statusText` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `approval`
--

INSERT INTO `approval` (`idApproval`, `statusText`) VALUES
(1, 'Valider'),
(2, 'Refuser'),
(3, 'En attente');

-- --------------------------------------------------------

--
-- Structure de la table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `idCity` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `postalCode` varchar(45) DEFAULT NULL,
  `region_idRegion` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `city`
--

INSERT INTO `city` (`idCity`, `name`, `postalCode`, `region_idRegion`) VALUES
(1, 'Nantes', '44000', 1),
(2, 'Brest', '29200', 2),
(3, 'Soulvache', '44660', 1),
(4, 'Chateaubriant', '44110', 1),
(5, 'Janze', '35150', 2),
(6, 'Crevin', '35320', 2),
(7, 'Paris', '75000', 3);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `idComment` varchar(36) NOT NULL,
  `content` varchar(45) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `comment`
--

INSERT INTO `comment` (`idComment`, `content`, `date`) VALUES
('1', 'C''est trop beau', '2016-10-05 00:00:00'),
('2', 'Malgrés la pluie, c''etait super', '2016-12-01 00:00:00'),
('3', 'Top', '2016-11-23 00:00:00'),
('4', 'Trop nul', '2008-12-05 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `handicaptype`
--

CREATE TABLE IF NOT EXISTS `handicaptype` (
  `idHandicapType` int(10) unsigned NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `handicaptype`
--

INSERT INTO `handicaptype` (`idHandicapType`, `name`) VALUES
(1, 'Auditif'),
(3, 'Moteur'),
(2, 'Visuel');

-- --------------------------------------------------------

--
-- Structure de la table `handicaptype_has_location`
--

CREATE TABLE IF NOT EXISTS `handicaptype_has_location` (
  `handicapType_idHandicapType` int(10) unsigned NOT NULL,
  `location_idLocation` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `handicaptype_has_location`
--

INSERT INTO `handicaptype_has_location` (`handicapType_idHandicapType`, `location_idLocation`) VALUES
(1, '1'),
(1, '2'),
(1, '3'),
(2, '1'),
(2, '2'),
(3, '1'),
(3, '2');

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `idLocation` varchar(36) NOT NULL,
  `name` varchar(45) NOT NULL,
  `coordonateX` int(11) NOT NULL,
  `coordonateY` int(11) NOT NULL,
  `image` varchar(36) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `city_idCity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `location`
--

INSERT INTO `location` (`idLocation`, `name`, `coordonateX`, `coordonateY`, `image`, `contact`, `city_idCity`) VALUES
('1', 'Hotel Dieu', 20, 30, NULL, '062541352', 1),
('2', 'Tour Eiffel', 0, 0, NULL, '0614756255', 3),
('3', 'Musée du Louvre', 20, 60, NULL, '062514752', 2);

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE IF NOT EXISTS `region` (
  `idRegion` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `region`
--

INSERT INTO `region` (`idRegion`, `name`) VALUES
(2, 'Bretagne'),
(3, 'Ile de France'),
(1, 'Pays de la loire');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `idUser` varchar(36) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `birth` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `mail`, `phoneNumber`, `firstName`, `lastName`, `birth`) VALUES
('alexandre.Belhomme', 'abelhomme', 'admin', 'alexandre.belhomme@epsi.fr', '0648957412', 'Alexandre', 'Belhomme', '1994-12-24 00:00:00'),
('bill.gates', 'bgates', 'admin', 'bill.gates@epsi.fr', '0678954123', 'Bill', 'Gates', '1980-01-01 00:00:00'),
('john.Clayton', 'jclayton', 'admin', 'john.clayton@epsi.fr', '0697852342', 'John', 'Clayton', '1856-01-25 00:00:00'),
('ludovic.appriou', 'lappriou', 'admin', 'ludovic.appriou@epsi.fr', '0625970679', 'ludovic', 'Appriou', '1993-01-24 00:00:00'),
('Mickael.Delrue', 'mdelrue', 'admin', 'mickael.delrue@epsi.fr', '06148495', 'Mickael', 'Delrue', '1990-10-15 00:00:00'),
('nathan.grimaud', 'ngrimaud', 'admin', 'nathan.grimaud@epsi.fr', '0697852156', 'Nathan', 'Grimaud', '1999-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `user_ask_location`
--

CREATE TABLE IF NOT EXISTS `user_ask_location` (
  `user_idUser` varchar(36) NOT NULL,
  `location_idLocation` varchar(36) NOT NULL,
  `approval_idApproval` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_ask_location`
--

INSERT INTO `user_ask_location` (`user_idUser`, `location_idLocation`, `approval_idApproval`) VALUES
('ludovic.appriou', '1', 1),
('ludovic.appriou', '2', 2),
('ludovic.appriou', '3', 3);

-- --------------------------------------------------------

--
-- Structure de la table `user_comment_location`
--

CREATE TABLE IF NOT EXISTS `user_comment_location` (
  `user_idUser` varchar(36) NOT NULL,
  `location_idLocation` varchar(36) NOT NULL,
  `comment_idComment` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_comment_location`
--

INSERT INTO `user_comment_location` (`user_idUser`, `location_idLocation`, `comment_idComment`) VALUES
('ludovic.appriou', '3', '2'),
('alexandre.belhomme', '1', '3'),
('nathan.grimaud', '2', '4');

-- --------------------------------------------------------

--
-- Structure de la table `user_fav_location`
--

CREATE TABLE IF NOT EXISTS `user_fav_location` (
  `user_idUser` varchar(36) NOT NULL,
  `location_idLocation` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_fav_location`
--

INSERT INTO `user_fav_location` (`user_idUser`, `location_idLocation`) VALUES
('alexandre.belhomme', '1'),
('ludovic.appriou', '1'),
('ludovic.appriou', '2'),
('nathan.grimaud', '3');

-- --------------------------------------------------------

--
-- Structure de la table `user_has_handicaptype`
--

CREATE TABLE IF NOT EXISTS `user_has_handicaptype` (
  `user_idUser` varchar(36) NOT NULL,
  `handicapType_idHandicapType` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_has_handicaptype`
--

INSERT INTO `user_has_handicaptype` (`user_idUser`, `handicapType_idHandicapType`) VALUES
('nathan.grimaud', 1),
('ludovic.appriou', 2),
('john.Clayton', 3);

-- --------------------------------------------------------

--
-- Structure de la table `user_note_location`
--

CREATE TABLE IF NOT EXISTS `user_note_location` (
  `user_idUser` varchar(36) NOT NULL,
  `location_idLocation` varchar(36) NOT NULL,
  `note` int(11) NOT NULL COMMENT 'Between 0 and 5'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_note_location`
--

INSERT INTO `user_note_location` (`user_idUser`, `location_idLocation`, `note`) VALUES
('john.Clayton', '1', 3),
('Mickael.Delrue', '2', 5),
('nathan.grimaud', '3', 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `approval`
--
ALTER TABLE `approval`
  ADD PRIMARY KEY (`idApproval`),
  ADD UNIQUE KEY `idaprobation_UNIQUE` (`idApproval`);

--
-- Index pour la table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`idCity`),
  ADD UNIQUE KEY `idcity_UNIQUE` (`idCity`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`),
  ADD KEY `fk_city_region1_idx` (`region_idRegion`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`idComment`),
  ADD UNIQUE KEY `idComment_UNIQUE` (`idComment`);

--
-- Index pour la table `handicaptype`
--
ALTER TABLE `handicaptype`
  ADD PRIMARY KEY (`idHandicapType`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`),
  ADD UNIQUE KEY `idHandicapType_UNIQUE` (`idHandicapType`);

--
-- Index pour la table `handicaptype_has_location`
--
ALTER TABLE `handicaptype_has_location`
  ADD PRIMARY KEY (`handicapType_idHandicapType`,`location_idLocation`),
  ADD KEY `fk_handicapType_has_location_handicapType1_idx` (`handicapType_idHandicapType`),
  ADD KEY `fk_handicapType_has_location_location1_idx` (`location_idLocation`);

--
-- Index pour la table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`idLocation`,`city_idCity`),
  ADD UNIQUE KEY `idlocation_UNIQUE` (`idLocation`),
  ADD KEY `fk_location_city1_idx` (`city_idCity`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idRegion`),
  ADD UNIQUE KEY `idregion_UNIQUE` (`idRegion`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `iduser_UNIQUE` (`idUser`),
  ADD UNIQUE KEY `mail_UNIQUE` (`mail`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- Index pour la table `user_ask_location`
--
ALTER TABLE `user_ask_location`
  ADD PRIMARY KEY (`user_idUser`,`location_idLocation`),
  ADD KEY `fk_user_has_location_location4_idx` (`location_idLocation`),
  ADD KEY `fk_user_has_location_user3_idx` (`user_idUser`),
  ADD KEY `fk_user_create_location_aprobation1_idx` (`approval_idApproval`);

--
-- Index pour la table `user_comment_location`
--
ALTER TABLE `user_comment_location`
  ADD PRIMARY KEY (`user_idUser`,`location_idLocation`),
  ADD KEY `fk_user_has_location_location3_idx` (`location_idLocation`),
  ADD KEY `fk_user_has_location_user2_idx` (`user_idUser`),
  ADD KEY `fk_user_comment_location_comment1_idx` (`comment_idComment`);

--
-- Index pour la table `user_fav_location`
--
ALTER TABLE `user_fav_location`
  ADD PRIMARY KEY (`user_idUser`,`location_idLocation`),
  ADD KEY `fk_user_has_location_location1_idx` (`location_idLocation`),
  ADD KEY `fk_user_has_location_user_idx` (`user_idUser`);

--
-- Index pour la table `user_has_handicaptype`
--
ALTER TABLE `user_has_handicaptype`
  ADD PRIMARY KEY (`user_idUser`,`handicapType_idHandicapType`),
  ADD KEY `fk_user_has_handicapType_handicapType1_idx` (`handicapType_idHandicapType`),
  ADD KEY `fk_user_has_handicapType_user1_idx` (`user_idUser`);

--
-- Index pour la table `user_note_location`
--
ALTER TABLE `user_note_location`
  ADD PRIMARY KEY (`user_idUser`,`location_idLocation`),
  ADD KEY `fk_user_has_location_location2_idx` (`location_idLocation`),
  ADD KEY `fk_user_has_location_user1_idx` (`user_idUser`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `approval`
--
ALTER TABLE `approval`
  MODIFY `idApproval` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `city`
--
ALTER TABLE `city`
  MODIFY `idCity` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `handicaptype`
--
ALTER TABLE `handicaptype`