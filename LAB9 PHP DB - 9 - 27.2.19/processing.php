<?php

$reg = $_POST["reg_num"];
$name = $_POST["stud_name"];
$marks = $_POST["stud_marks"];

echo $reg;
echo $name;
echo $marks;

$con=mysqli_connect("localhost","root","","my_db5");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

/* Create database (initial run)
$sql="CREATE DATABASE my_db5";
if (mysqli_query($con,$sql))
  {
  echo "Database my_db3333 created successfully";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }

?>e

$con=mysqli_connect("localhost","root","");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Create database
$sql="CREATE DATABASE my_db5";
if (mysqli_query($con,$sql))
  {
  echo "Database my_db3333 created successfully";
  }
else
  {
  echo "Error creating database: " . mysqli_error($con);
  }
 */
 
$sql = "INSERT INTO Persons(Regno, Name, Marks)
VALUES ('".$reg."', '".$name."',".$marks.")"; 

?>