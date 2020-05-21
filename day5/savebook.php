<?php
    $bookno=$_POST["bookno"];
    $title=$_POST["title"];
    $author=$_POST["author"];
    $price=$_POST["price"];
    $sql="INSERT INTO books VALUES('$bookno','$title','$author','$price')";
    $cn=mysqli_connect("localhost","root","","library");
    mysqli_query($cn,$sql) or die("unable to insert");
    mysqli_close($cn);

?>