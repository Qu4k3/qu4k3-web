<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>Formulario enviado</title>
    
    <meta name="theme-color" content="#30679a">
    <link rel="shortcut icon" href="../public/img/logomnb.png">

    <link rel="stylesheet" href="../public/css/b.min.css">
    <link rel="stylesheet" href="../public/css/f-a.min.css">
    <link rel="stylesheet" href="../public/css/styles.css">

    <script type="text/javascript" src="../public/js/jquery.min.js"></script>
    <script type="text/javascript" src="../public/js/b.min.js"></script>    
    <script type="text/javascript" src="../public/js/main.js"></script>

    <style>
        body {
            text-align: center;            
        }
        
        .alert {           
            font-size: 20px;
        }

        .btn {
            border-bottom: 3px solid #adadad;
        }

        
    </style>
    
</head>
<body>

    <section class="container">
        <section class="row" style="margin-top:20%;">
            <section class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                <?php

                    if(isset($_POST['submit'])){
                        $mail_final = "contacto@medicalnutribalance.com";
                        $mail_user = $_POST['email'];
                        $name = $_POST['name'];
                        $subject = "Nuevo mensaje de medicalnutribalance.com";
                        $subject_copy = "Copia del mensaje enviado a medicalnutribalance.com";
                        $message = $name . " ha escrito lo siguiente:" . "\n\n" . $_POST['message'];
                        $message_copy = "Aquí está una copia de su mensaje " . $name . "\n\n" . $_POST['message'];

                        $headers = "From: " . $name . " <" . $mail_user . ">";
                        $headers_copy = "From: " . "Medical Nutribalance" . " <" . $mail_final. ">";
                        mail($mail_final,$subject,$message,$headers);
                        mail($mail_user,$subject_copy,$message_copy,$headers_copy);       

                        echo "<section class='block'>";
                        echo "<section class='block_msg'>";
                        echo "<section class='alert alert-success' role='alert'><strong>Formulario enviado</strong><br><br>Gracias " . $name . ", contactaremos con usted en breve.</section>";
                        echo "</section>";
                        echo "<br>";
                        echo "<a href='http://qu4k3.com/medicalnutribalance/#contact' class='btn btn-default' role='button'><i class='fa fa-home' aria-hidden='true'></i> Volver a la página</a>";        
                        echo "</section>";
                    }

                ?>
                
            </section>
        </section>
    </section>
    
</body>
</html>

