<?php

spl_autoload_register(function ($class_name) {
    require_once "src/{$class_name}.php";
});