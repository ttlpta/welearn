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
    <?=$this->Html->css('main2');?>
    <?=$this->Html->script('spymaster')?>

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
            
    <?=$this->Html->script('fontawesome')?>
    <?=$this->Html->script('vendor/slick.min');?>
    
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico"/>
    <script>
        if (window.location.hash && window.location.hash == '#_=_') {
            if (window.history && history.pushState) {
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                // Prevent scrolling by storing the page's current scroll offset
                var scroll = {
                    top: document.body.scrollTop,
                    left: document.body.scrollLeft
                };
                window.location.hash = '';
                // Restore the scroll offset, should be flicker free
                document.body.scrollTop = scroll.top;
                document.body.scrollLeft = scroll.left;
            }
        }
    </script>
</head>
<body class='courses_page home_page'>
    <?= $this->element('header_default') ?>
    <?= $this->fetch('content') ?>
    <?= $this->element('footer_default') ?>
</body>
</html>
