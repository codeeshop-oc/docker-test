<?php
$bool = false;

if (1) {
	// if(!empty($_SERVER["REMOTE_ADDR"]) && $_SERVER["REMOTE_ADDR"] == '49.36.223.126') {
	foreach (['Twitterbot', 'SkypeUriPreview', 'Java/1.7.0_45', 'XING', 'Applebot', 'LinkedInBot', 'ia_archiver', 'facebot', 'Konqueror', 'Exabot', 'Sogou', 'YandexBot', 'Baiduspider', 'DuckDuckBot', 'yahoo', 'Slurp', 'Bingbot', 'Googlebot', 'Google-Structured', 'facebookexternalhit', 'facebook', 'WhatsApp', 'facebookexternalhit/1.1'] as $agent) {
		if (stripos($_SERVER['HTTP_USER_AGENT'], $agent) !== false) {
			$bool = true;
			break;
		}
	}
	// print_r($_SERVER);die;
	if ($bool) {
		$is_profile_page = strpos($_SERVER['REQUEST_URI'], "/profile/") === 0;
		$is_post_page = (strpos($_SERVER['REQUEST_URI'], "/posts/") === 0) || (strpos($_SERVER['REQUEST_URI'], "/post-details/") === 0);
		$is_help_support_page = (strpos($_SERVER['REQUEST_URI'], "/help-support/") === 0);

		if ($is_profile_page) {
			$username = str_replace(["/profile/", '/'], "", $_SERVER['REQUEST_URI']);
			echo file_get_contents('https://freethefirst.com/profile/' . $username);
			?>
				<?php
die;
			// print_r($username);die;
		} elseif ($is_post_page) {
			$id_post = str_replace(["/posts/", "/post-details/", '/'], "", $_SERVER['REQUEST_URI']);
			echo file_get_contents('https://freethefirst.com/posts/' . $id_post);
			?>
				<?php
die;
		} elseif ($is_help_support_page) {
			$id_slug = str_replace(["/help-support/", '/'], "", $_SERVER['REQUEST_URI']);
			echo file_get_contents('https://freethefirst.com/help-support/' . $id_slug);
			?>
				<?php
die;
			// print_r($username);die;
		} else {
			$bool = false;
		}
	}
}

if (!$bool) {
	include 'index.html';
}