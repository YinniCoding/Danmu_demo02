<?php
$con = mysql_connect("localhost","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  
/*if (mysql_query("CREATE DATABASE danmu",$con))
  {
  echo "Database created";
  }
else
  {
  echo "Error creating database: " . mysql_error();
  }*/
  // Create table in my_db database
mysql_select_db("danmu", $con);
$sql = "CREATE TABLE danmu01
(
弹幕内容 varchar(20)
)";
mysql_query($sql,$con);
$sql = "CREATE TABLE danmu01
(
personID int NOT NULL AUTO_INCREMENT, 
PRIMARY KEY(personID),
弹幕内容 varchar(20)
)";
mysql_select_db("danmu", $con);

$sql="INSERT INTO danmu01 (弹幕内容)
VALUES ('$_POST[text]')";
if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "弹幕内容添加至数据库中成功!";
echo "<script>alert('弹幕发表成功！')</script>";
mysql_close($con);
?>

