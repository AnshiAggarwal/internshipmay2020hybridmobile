<?php
    $bookno=$_POST["bookno"];
    $sql="SELECT * FROM books where bookno=$bookno";
    $cn=mysqli_connect("localhost","root","","library");
    $result=mysqli_query($cn,$sql);
    $cnt=mysqli_num_rows($result);
    if($cnt==0){
        echo "invalid book no!!";
    }
    else{
        $row=mysqli_fetch_array($result);
        echo "$row[1],$row[2],$row[3]";
    }
    mysqli_close($cn);

?>