<?php

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

date_default_timezone_set('Europe/Rome');

$storageDir = dirname(__FILE__) . '/data';
$storageFile = $storageDir . '/tara-wall.json';
$errors = array();
$success = false;
$storageReady = true;

if (!is_dir($storageDir)) {
	$storageReady = mkdir($storageDir, 0755, true);
}

if ($storageReady) {
	$storageReady = is_file($storageFile) ? is_writable($storageFile) : is_writable($storageDir);
}

function post_value($key)
{
	return isset($_POST[$key]) ? (string) $_POST[$key] : '';
}

function message_value($message, $key, $fallback)
{
	return isset($message[$key]) ? (string) $message[$key] : $fallback;
}

function clean_text($value, $maxLength)
{
	$cleaned = preg_replace('/\s+/', ' ', $value);
	$value = trim($cleaned !== null ? $cleaned : '');
	return function_exists('mb_substr') ? mb_substr($value, 0, $maxLength) : substr($value, 0, $maxLength);
}

function load_messages($storageFile)
{
	if (!is_file($storageFile)) {
		return array();
	}

	$payload = file_get_contents($storageFile);
	$messages = json_decode($payload ? $payload : '[]', true);

	return is_array($messages) ? $messages : array();
}

function add_message($storageFile, $message)
{
	$handle = fopen($storageFile, 'c+');

	if (!$handle) {
		return false;
	}

	flock($handle, LOCK_EX);
	rewind($handle);
	$payload = stream_get_contents($handle);
	$messages = json_decode($payload ? $payload : '[]', true);

	if (!is_array($messages)) {
		$messages = array();
	}

	array_unshift($messages, $message);
	$messages = array_slice($messages, 0, 60);
	$payload = json_encode($messages);

	if ($payload === false) {
		flock($handle, LOCK_UN);
		fclose($handle);
		return false;
	}

	ftruncate($handle, 0);
	rewind($handle);
	$result = fwrite($handle, $payload);
	fflush($handle);
	flock($handle, LOCK_UN);
	fclose($handle);

	return $result !== false;
}

function format_message_date($value)
{
	$timestamp = strtotime($value);

	if ($timestamp === false) {
		$timestamp = time();
	}

	return date('d/m/Y H:i', $timestamp);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = clean_text(post_value('name'), 32);
	$message = clean_text(post_value('message'), 280);

	if (!$storageReady) {
		$errors[] = 'The data folder is not writable. On Aruba, create a data folder next to tara.php and set write permissions on it.';
	}

	if ($name === '') {
		$errors[] = 'Enter your commander name.';
	}

	if ($message === '') {
		$errors[] = 'Write a message for the wall.';
	}

	if (!$errors) {
		$saved = add_message($storageFile, array(
			'name' => $name,
			'message' => $message,
			'created_at' => date(DATE_ATOM),
		));

		if ($saved) {
			header('Location: tara.php?sent=1#wall');
			exit;
		}

		$errors[] = 'The message could not be saved. Check the permissions for the data folder.';
	}
}

$messages = load_messages($storageFile);
$success = isset($_GET['sent']);
?>
<!DOCTYPE HTML>
<html lang="en">

<head>
	<title>TARA Alliance | Last Asylum Fan Website</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<meta name="theme-color" content="#090d10" />
	<meta name="description" content="Fan page dedicated to the TARA alliance in Last Asylum: Plague, with a PHP message wall." />
	<link rel="manifest" href="manifest.webmanifest" />
	<link rel="apple-touch-icon" href="assets/pwa/apple-touch-icon.png" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="stylesheet" href="assets/css/index-custom.css" />
	<noscript>
		<link rel="stylesheet" href="assets/css/noscript.css" />
	</noscript>
</head>

<body class="is-preload landing tara-page">
	<div id="page-wrapper">
		<header id="header">
			<h1 id="logo"><a href="index.html">Last Asylum</a></h1>
			<nav id="nav">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="#wall" class="button primary">Muro TARA</a></li>
				</ul>
			</nav>
		</header>

		<section class="tara-hero">
			<div class="tara-hero-inner">
				<img class="tara-logo" src="assets/ally/TAra_logo.png" alt="TARA alliance logo" />
				<ul class="hero-badges">
					<li>Alliance Hub</li>
					<li>TARA</li>
					<li>Fan Page</li>
				</ul>
				<h2>TARA Alliance</h2>
				<p>A small outpost for greetings, coordinates, event reminders, and quick notes for alliance members.</p>
				<ul class="actions">
					<li><a href="#wall" class="button primary scrolly">Leave a Message</a></li>
					<li><a href="index.html" class="button secondary">Back to Base</a></li>
				</ul>
			</div>
		</section>

		<section class="wrapper style1 special fade-up tara-intel">
			<div class="container">
				<header class="major">
					<span class="section-tag">Alliance Board</span>
					<h2>The TARA meeting point.</h2>
					<p>Use it as a simple board: messages are saved locally by PHP and shown from newest to oldest.</p>
				</header>
				<div class="tara-cards">
					<section>
						<span class="icon solid alt major fa-shield-alt"></span>
						<h3>Defense</h3>
						<p>Report attacks, rallies, and reinforcement requests before the map gets out of control.</p>
					</section>
					<section>
						<span class="icon solid alt major fa-users"></span>
						<h3>Coordination</h3>
						<p>Leave schedules, shared objectives, and quick notes for players who join later.</p>
					</section>
					<section>
						<span class="icon solid alt major fa-fire"></span>
						<h3>Events</h3>
						<p>Track bosses, rewards, and alliance priorities during live events.</p>
					</section>
				</div>
			</div>
		</section>

		<section id="wall" class="wrapper style2 special fade tara-wall-section">
			<div class="container">
				<header>
					<span class="section-tag">TARA Wall</span>
					<h2>Alliance message wall.</h2>
					<p>Write a short message. Names can use up to 32 characters and messages up to 280.</p>
				</header>

				<div class="tara-wall-layout">
					<form class="tara-wall-form" method="post" action="tara.php#wall">
						<?php if (!$storageReady) : ?>
							<div class="tara-alert error">
								<p>Storage is not writable. On Aruba, create the <strong>data</strong> folder next to <strong>tara.php</strong> and enable write permissions.</p>
							</div>
						<?php endif; ?>

						<?php if ($success) : ?>
							<p class="tara-alert success">Message posted on the TARA wall.</p>
						<?php endif; ?>

						<?php if ($errors) : ?>
							<div class="tara-alert error">
								<?php foreach ($errors as $error) : ?>
									<p><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></p>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>

						<label for="name">Commander Name</label>
						<input id="name" type="text" name="name" maxlength="32" required placeholder="e.g. Cro" value="<?php echo htmlspecialchars(post_value('name'), ENT_QUOTES, 'UTF-8'); ?>" />

						<label for="message">Message</label>
						<textarea id="message" name="message" maxlength="280" rows="5" required placeholder="Write your message for TARA here..."><?php echo htmlspecialchars(post_value('message'), ENT_QUOTES, 'UTF-8'); ?></textarea>

						<button class="button primary fit" type="submit">Publish</button>
					</form>

					<div class="tara-message-list" aria-live="polite">
						<?php if (!$messages) : ?>
							<article class="tara-message empty">
								<h3>No messages yet.</h3>
								<p>The first message on the TARA wall can be yours.</p>
							</article>
						<?php endif; ?>

						<?php foreach ($messages as $message) : ?>
							<article class="tara-message">
								<div class="tara-message-head">
									<h3><?php echo htmlspecialchars(message_value($message, 'name', 'Commander'), ENT_QUOTES, 'UTF-8'); ?></h3>
									<time datetime="<?php echo htmlspecialchars(message_value($message, 'created_at', ''), ENT_QUOTES, 'UTF-8'); ?>">
										<?php echo htmlspecialchars(format_message_date(message_value($message, 'created_at', 'now')), ENT_QUOTES, 'UTF-8'); ?>
									</time>
								</div>
								<p><?php echo nl2br(htmlspecialchars(message_value($message, 'message', ''), ENT_QUOTES, 'UTF-8')); ?></p>
							</article>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</section>

		<footer id="footer">
			<ul class="icons">
				<li><a href="#" class="icon brands alt fa-discord"><span class="label">Discord</span></a></li>
				<li><a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
			</ul>
			<ul class="copyright">
				<li>&copy; Last Asylum Plague Fan Website</li>
				<li>Alliance: TARA</li>
			</ul>
		</footer>
	</div>

	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/jquery.scrolly.min.js"></script>
	<script src="assets/js/jquery.dropotron.min.js"></script>
	<script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/browser.min.js"></script>
	<script src="assets/js/breakpoints.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
</body>

</html>
