<!-- start of the program by Anshi Aggarwal -->

<?php
$empid=$_POST['empid'];
$sql="SELECT * FROM employee WHERE empid='$empid'";
$cn=mysqli_connect("localhost","root","","demodb");
$result=mysqli_query($cn,$sql);
$cnt=mysqli_num_rows($result);
if($cnt==0){
    echo "Sorry! Invalid Roll Number";
}
else{
    $row=mysqli_fetch_array($result);
    $obj=(object)[];
    $obj->name=$row["name"];
    $obj->designation=$row["designation"];
    $obj->salary=$row["salary"];
    $detail=json_encode($obj);
    echo $detail;
}
mysqli_close($cn);
?>

<!-- end of the program by Anshi Aggarwal -->