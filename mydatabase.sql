-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2020 at 02:55 PM
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
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `AttendanceId` int(15) NOT NULL,
  `StudentId` int(15) NOT NULL,
  `CourseId` int(15) NOT NULL,
  `Attendance` tinyint(1) DEFAULT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`AttendanceId`, `StudentId`, `CourseId`, `Attendance`, `Date`) VALUES
(55, 12, 2, 1, '2020-05-14');

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

--
-- Dumping data for table `classroom`
--

INSERT INTO `classroom` (`CourseId`, `CourseName`, `CreatedDate`, `ModifiedDate`) VALUES
(1, 'ECE', '2020-05-05 05:53:21', '2020-05-05 05:53:21'),
(2, 'ME', '2020-05-05 05:53:40', '2020-05-05 05:53:40'),
(3, 'CSE', '2020-05-05 05:53:56', '2020-05-05 05:53:56'),
(4, 'EE', '2020-05-14 05:17:02', '2020-05-14 05:17:02'),
(5, 'CE', '2020-05-14 05:17:02', '2020-05-14 05:17:02'),
(6, 'IT', '2020-05-14 05:17:49', '2020-05-14 05:17:49');

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
(7, 'Concept Of Physics 172', 'HCV', 25, NULL, NULL, NULL),
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

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Id`, `Name`, `CourseId`, `RollNo`, `Year`, `Semester`, `DateOfAdmission`) VALUES
(10, 'Nishant Kumar Srivastava', 1, 1, 1, 1, '2020-05-14'),
(12, 'rahul', 2, 3, 4, 8, '2020-05-11'),
(13, 'sushant', 3, 5, 4, 8, '2020-05-28');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `SubjectId` int(11) NOT NULL,
  `SubjectName` char(50) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`SubjectId`, `SubjectName`, `CreatedDate`, `ModifiedDate`) VALUES
(1, 'Physics', '2020-05-22 07:39:50', '0000-00-00 00:00:00'),
(4, 'Math', '2020-05-22 07:48:29', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `teacherconfiguration`
--

CREATE TABLE `teacherconfiguration` (
  `ConfigurationId` int(11) NOT NULL,
  `SubjectId` int(50) NOT NULL,
  `TeacherId` int(50) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `TeacherId` int(11) NOT NULL,
  `TeacherName` char(50) NOT NULL,
  `Degree` char(50) NOT NULL,
  `TeachingExperiance` int(10) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`TeacherId`, `TeacherName`, `Degree`, `TeachingExperiance`, `CreatedDate`, `ModifiedDate`) VALUES
(1, 'Resnick Hallidey', '', 5, '2020-05-22 08:06:12', '2020-05-22 08:06:12'),
(3, 'H C Verma', '', 5, '2020-05-22 08:14:41', '2020-05-22 08:14:41');

-- --------------------------------------------------------

--
-- Table structure for table `teachersclasroom`
--

CREATE TABLE `teachersclasroom` (
  `Id` int(15) NOT NULL,
  `ConfigurationId` int(15) NOT NULL,
  `CourseId` int(15) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`AttendanceId`) USING BTREE,
  ADD KEY `CourseId` (`CourseId`) USING BTREE,
  ADD KEY `Date` (`Date`) USING BTREE,
  ADD KEY `StudentId` (`StudentId`) USING BTREE;

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
  ADD KEY `student_ibfk_1` (`CourseId`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`SubjectId`);

--
-- Indexes for table `teacherconfiguration`
--
ALTER TABLE `teacherconfiguration`
  ADD PRIMARY KEY (`ConfigurationId`),
  ADD KEY `SubjectId` (`SubjectId`),
  ADD KEY `TeacherId` (`TeacherId`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`TeacherId`);

--
-- Indexes for table `teachersclasroom`
--
ALTER TABLE `teachersclasroom`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `CourseId` (`CourseId`),
  ADD KEY `ConfigurationId` (`ConfigurationId`);

--
-- Indexes for table `todotask`
--
ALTER TABLE `todotask`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `AttendanceId` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `classroom`
--
ALTER TABLE `classroom`
  MODIFY `CourseId` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `BookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `librarycard`
--
ALTER TABLE `librarycard`
  MODIFY `IssueId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `Id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `SubjectId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `TeacherId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teachersclasroom`
--
ALTER TABLE `teachersclasroom`
  MODIFY `Id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `todotask`
--
ALTER TABLE `todotask`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `student` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `classroom` (`CourseId`) ON DELETE CASCADE;

--
-- Constraints for table `librarycard`
--
ALTER TABLE `librarycard`
  ADD CONSTRAINT `librarycard_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `student` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `librarycard_ibfk_2` FOREIGN KEY (`BookId`) REFERENCES `library` (`BookId`) ON DELETE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `classroom` (`CourseId`) ON DELETE CASCADE;

--
-- Constraints for table `teacherconfiguration`
--
ALTER TABLE `teacherconfiguration`
  ADD CONSTRAINT `teacherconfiguration_ibfk_1` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`SubjectId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teacherconfiguration_ibfk_2` FOREIGN KEY (`TeacherId`) REFERENCES `teachers` (`TeacherId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachersclasroom`
--
ALTER TABLE `teachersclasroom`
  ADD CONSTRAINT `teachersclasroom_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `classroom` (`CourseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teachersclasroom_ibfk_2` FOREIGN KEY (`ConfigurationId`) REFERENCES `teacherconfiguration` (`ConfigurationId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
