<?php
	require 'JSSDK.php';
	//$url = $_POST['url'];
	$url = urldecode($_POST["url"]);
	//$sdk = new JSSDK('wx020420374ec4a19f','13c955641bed0dd6d431c79517ed0009',$url);
	$sdk = new JSSDK('wx543be249c2308eaf','6e1cc772222fb06f82b42c9ff706dbe0',$url);
	$sinfo = $sdk->getSignPackage();
	echo json_encode($sinfo);