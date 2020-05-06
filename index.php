<?php
require_once 'HttpHandler.php';

$httpHandler = new HttpHandler($_GET, $_POST);
$httpHandler->htmlResponse('./public/index.html');