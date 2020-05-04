-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2020 at 02:58 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `CourseId` int(15) NOT NULL,
  `CourseName` varchar(150) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `BookId` int(11) NOT NULL,
  `BookName` char(100) DEFAULT NULL,
  `Author` char(100) DEFAULT NULL,
  `NumberOfBooks` int(15) DEFAULT NULL,
  `NumberOfIssuedBooks` int(15) DEFAULT NULL,
  `CreatedDate` timestamp NULL DEFAULT NULL,
  `LastModifiedDate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`BookId`, `BookName`, `Author`, `NumberOfBooks`, `NumberOfIssuedBooks`, `CreatedDate`, `LastModifiedDate`) VALUES
(7, 'Concept Of Physics 171', 'HCV', 25, NULL, NULL, NULL),
(8, 'let us c', 'yashwant kanetkar', 45, NULL, NULL, NULL),
(9, 'fvd', 'fffvfv', 34, NULL, NULL, NULL),
(10, 'A', 'author A', 12, NULL, NULL, NULL),
(11, 'B', 'author B', 13, NULL, NULL, NULL),
(12, 'c', 'author c', 14, NULL, NULL, NULL),
(13, 'd', 'author d', 15, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `librarycard`
--

CREATE TABLE `librarycard` (
  `IssueId` int(11) NOT NULL,
  `StudentId` int(11) DEFAULT NULL,
  `BookId` int(11) DEFAULT NULL,
  `ReturnDate` date DEFAULT NULL,
  `IssuedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Id` int(15) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `CourseId` int(15) DEFAULT NULL,
  `RollNo` int(15) DEFAULT NULL,
  `Year` tinyint(10) DEFAULT NULL,
  `Semester` tinyint(10) DEFAULT NULL,
  `DateOfAdmission` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `todotask`
--

CREATE TABLE `todotask` (
  `Id` int(11) NOT NULL,
  `Subject` varchar(255) DEFAULT NULL,
  `Description` text,
  `Time` timestamp NULL DEFAULT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LastModifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todotask`
--

INSERT INTO `todotask` (`Id`, `Subject`, `Description`, `Time`, `CreatedDate`, `LastModifiedDate`) VALUES
(1, 'take vegtables', 'twkw vegetables from stores. hvgjvjh', '2022-07-13 18:30:00', '2020-05-03 18:30:00', '2020-03-30 05:22:36'),
(3, 'subject after update', 'description after update', '2034-11-06 18:30:00', '2020-05-03 18:30:00', '2020-03-30 06:33:57'),
(4, 'cgvhgkjgugjgjh ', 'gfkfluyfliy;ohhuuoh', '2025-03-15 18:30:00', '2020-05-03 18:30:00', '2020-03-30 05:25:12'),
(5, 'cgvhgkjgugjgjh ', 'gfkfluyfliy;ohhuuoh', '0000-00-00 00:00:00', '2020-03-30 05:40:48', '2020-03-30 05:40:48'),
(6, 'xfghokjhgfigfdhkljhgffhgfdjhgfhhgjhghjhghjjjjjjjjjjjhjhjhjhjhjhjhj ', 'njnjnjnlknklnknknklnlnlknlknknklnknnlknknlnlnlnlnnnnnnknknknnknk', '0000-00-00 00:00:00', '2020-03-30 05:42:08', '2020-03-30 05:42:08'),
(7, 'xfghokjhgfigfdhkljhgffhgfdjhgfhhgjhghjhghjjjjjjjjjjjhjhjhjhjhjhjhj ', 'njnjnjnlknklnknknklnlnlknlknknklnknnlknknlnlnlnlnnnnnnknknknnknk', '0000-00-00 00:00:00', '2020-03-30 05:42:54', '2020-03-30 05:42:54'),
(8, 'xfghokjhgfigfdhkljhgffhgfdjhgfhhgjhghjhghjjjjjjjjjjjhjhjhjhjhjhjhj ', 'njnjnjnlknklnknknklnlnlknlknknklnknnlknknlnlnlnlnnnnnnknknknnknk', '0000-00-00 00:00:00', '2020-03-30 05:43:47', '2020-03-30 05:43:47'),
(9, 'xfghokjhgfigfdhkljhgffhgfdjhgfhhgjhghjhghjjjjjjjjjjjhjhjhjhjhjhjhj ', 'njnjnjnlknklnknknklnlnlknlknknklnknnlknknlnlnlnlnnnnnnknknknnknk', '0000-00-00 00:00:00', '2020-03-30 05:44:48', '2020-03-30 05:44:48'),
(10, 'xfghokjhgfigfdhkljhgffhgfdjhgfhhgjhghjhghjjjjjjjjjjjhjhjhjhjhjhjhj ', 'njnjnjnlknklnknknklnlnlknlknknklnknnlknknlnlnlnlnnnnnnknknknnknk', '2034-11-06 18:30:00', '2020-03-30 05:48:16', '2020-03-30 05:48:16'),
(11, 'updated subject ', 'updated description', '2034-11-06 18:30:00', '2020-03-30 05:49:28', '2020-03-30 05:49:28'),
(12, 'updated subject ', 'updated description', '2034-11-06 18:30:00', '2020-03-30 06:12:22', '2020-03-30 06:12:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`CourseId`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`BookId`),
  ADD UNIQUE KEY `BookName_2` (`BookName`),
  ADD KEY `BookName` (`BookName`);

--
-- Indexes for table `librarycard`
--
ALTER TABLE `librarycard`
  ADD PRIMARY KEY (`IssueId`),
  ADD KEY `librarycard_ibfk_1` (`StudentId`),
  ADD KEY `librarycard_ibfk_2` (`BookId`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RollNo` (`RollNo`),
  ADD KEY `CourseId` (`CourseId`);

--
-- Indexes for table `todotask`
--
ALTER TABLE `todotask`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `BookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `librarycard`
--
ALTER TABLE `librarycard`
  MODIFY `IssueId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `Id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `todotask`
--
ALTER TABLE `todotask`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `librarycard`
--
ALTER TABLE `librarycard`
  ADD CONSTRAINT `librarycard_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `student` (`Id`),
  ADD CONSTRAINT `librarycard_ibfk_2` FOREIGN KEY (`BookId`) REFERENCES `library` (`BookId`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `classroom` (`CourseId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
