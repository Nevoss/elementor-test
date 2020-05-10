<?php
require_once 'autoload.php';

if ($_GET['fetch_data'] === '1') {
    $handler = new DataFetchingHttpHandler($_GET, $_POST);
} else {
    $handler = new IndexPageHttpHandler($_GET, $_POST);
}

$handler->handle();