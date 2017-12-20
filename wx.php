<?php
	require 'JSSDK.php';
	$url = urldecode($_POST["url"]);
	$sdk = new JSSDK('openid','openkey',$url);
	$sinfo = $sdk->getSignPackage();
	echo json_encode($sinfo);
