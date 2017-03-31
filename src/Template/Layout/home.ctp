<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welearn <?= $this->fetch('title') ?> </title>
    <!-- Roboto Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=vietnamese' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
    <?=$this->Html->css('vendor/slick')?>
    <!--Main-css-->
    <?=$this->Html->css('main');?> 

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
            
    <?=$this->Html->script('fontawesome')?>
    <?=$this->Html->script('main');?>

    <?php
        echo $this->fetch('meta');
        echo $this->fetch('css');
        echo $this->fetch('script');
    ?>
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico"/>
</head>
<body class='home_page'>
    <?= $this->element('header') ?>
    <?= $this->fetch('content') ?>
    <?= $this->element('footer') ?>
</body>
</html>
