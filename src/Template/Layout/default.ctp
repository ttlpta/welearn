<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welearn <?= $this->fetch('title') ?> </title>
    <!-- Roboto Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=vietnamese'
          rel='stylesheet'>
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!--Main-css-->
    <link rel="shortcut icon" type="image/x-icon"
          href="<?= $this->Url->build('/' . DIR_WEROOT_IMAGE . '/favicon.ico', true) ?>"/>
    <?= $this->Html->css('main2'); ?>
    <!--
    <?= $this->Html->css('main4'); ?>
    <?= $this->Html->css('main5'); ?>
    -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"

    <?= $this->Html->script('fontawesome') ?>
    <?= $this->Html->script('main3'); ?>
    <?= $this->Html->script('checkout'); ?>
</head>
<body class='courses_page home_page page-instructor_profile'>
<?= $this->element('header_default') ?>
<?= $this->fetch('content') ?>
<?= $this->element('footer_default') ?>
</body>
</html>
