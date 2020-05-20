<?php
if(isset($_POST["name"] , $_POST["age"])){
    $name=$_POST["name"];
    $age=$_POST["age"];
    if($age>=18){
        echo "dear $name you can vote.";

        $sql="INSERT INTO voter VALUES('$name','$age')";
        $cn=mysqli_connect("localhost","root","","india");
        mysqli_query($cn,$sql);
        mysqli_close($cn);
    }
    else{
        echo "dear $name you cannot vote.";
    }

}

?>