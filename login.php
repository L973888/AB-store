
<?php
  $name = $_POST['name'];
  $password = $_POST['password'];

                $server = "localhost";
                $username="new_user";
                $password="new_user@123";
                $dbname="uthentication_db";
                $con= new mysqli($server,$username,$password,$dbname);
                 if(mysqli_connect_error()){
                   die('connect error('.mysqli_connect_error().')'.mysqli_connect_error()); 
                 }
                 else{
                    $sql = "INSERT INTO users(email,password) values('$email','$password') ";
                    if($con->query($sql)){
                        echo"new record is inserted successfully";
                    }else{
                        echo "error:";
                    }
                 }
        mysqli_close($con);
?>
