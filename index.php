<?php
$bool = false;

if(!empty($_GET["test"])) {
	$bool = true;
	print_r('herer');die;
}

if (!$bool) {
	include 'index.html';
}
?>