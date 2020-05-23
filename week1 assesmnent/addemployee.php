<!-- start of the program by Anshi Aggarwal -->

<?php
$detail=$_POST['detail'];
$res=json_decode($detail);
$empid=$res->empid;
$name=$res->name;
$designation=$res->designation;
$salary=$res->salary;

$sql="INSERT INTO employee VALUES('$empid','$name','$designation','$salary')";
$cn=mysqli_connect("localhost","root","","demodb") or die("Unable to connect");
mysqli_query($cn,$sql) or die("Unable to insert details");
mysqli_close($cn);
echo "done";
?>

<!-- end of the program by Anshi Aggarwal -->