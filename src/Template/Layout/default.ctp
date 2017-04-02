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
    <!--Main-css-->
    <!--<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">-->
    <?= $this->Html->css('main2'); ?>
    <!--
    <?= $this->Html->css('main4'); ?>
    <?= $this->Html->css('main5'); ?>
    -->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    <?= $this->Html->script('fontawesome') ?>
    <?= $this->Html->script('main3'); ?>

    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico"/>
</head>
<body class='courses_page home_page page-instructor_profile'>
<?= $this->element('header_default') ?>
<?= $this->fetch('content') ?>
<?= $this->element('footer_default') ?>
</body>
</html>
