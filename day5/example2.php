<?php
    $rollno=$_POST["rollno"];
    $sql="SELECT * FROM student where rollno=$rollno";
    $cn=mysqli_connect("localhost","root","","abes");
    $result=mysqli_query($cn,$sql);
    $cnt=mysqli_num_rows($result);
    if($cnt==0){
        echo "invalid roll no!!";
    }
    else{
        $row=mysqli_fetch_array($result);
        echo "name is $row[1] and course is $row[2]";
    }
    mysqli_close($cn);

?>