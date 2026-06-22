<?php
declare(strict_types=1);

$storageDir = __DIR__ . '/data';
$storageFile = $storageDir . '/tara-wall.json';
$errors = [];
$success = false;

if (!is_dir($storageDir)) {
	mkdir($storageDir, 0755, true);
}

function clean_text(string $value, int $maxLength): string
{
	$value = trim(preg_replace('/\s+/', ' ', $value) ?? '');
	return function_exists('mb_substr') ? mb_substr($value, 0, $maxLength) : substr($value, 0, $maxLength);
}

function load_messages(string $storageFile): array
{
	if (!is_file($storageFile)) {
		return [];
	}

	$payload = file_get_contents($storageFile);
	$messages = json_decode($payload ?: '[]', true);

	return is_array($messages) ? $messages : [];
}

function save_messages(string $storageFile, array $messages): bool
{
	$handle = fopen($storageFile, 'c+');
	$payload = json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

	if (!$handle || $payload === false) {
		return false;
	}

	flock($handle, LOCK_EX);
	ftruncate($handle, 0);
	rewind($handle);
	$result = fwrite($handle, $payload);
	fflush($handle);
	flock($handle, LOCK_UN);
	fclose($handle);

	return $result !== false;
}

function format_message_date(string $value): string
{
	$timestamp = strtotime($value);

	if ($timestamp === false) {
		$timestamp = time();
	}

	return date('d/m/Y H:i', $timestamp);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = clean_text((string) ($_POST['name'] ?? ''), 32);
	$message = clean_text((string) ($_POST['message'] ?? ''), 280);

	if ($name === '') {
		$errors[] = 'Inserisci il tuo nome.';
	}

	if ($message === '') {
		$errors[] = 'Scrivi un messaggio per il muro.';
	}

	if (!$errors) {
		$messages = load_messages($storageFile);
		array_unshift($messages, [
			'name' => $name,
			'message' => $message,
			'created_at' => date(DATE_ATOM),
		]);
		$messages = array_slice($messages, 0, 60);

		if (save_messages($storageFile, $messages)) {
			header('Location: tara.php?sent=1#wall');
			exit;
		}

		$errors[] = 'Non riesco a salvare il messaggio. Controlla i permessi della cartella data.';
	}
}

$messages = load_messages($storageFile);
$success = isset($_GET['sent']);
?>
<!DOCTYPE HTML>
<html lang="it">

<head>
	<title>Alleanza TARA | Last Asylum Fan Website</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<meta name="theme-color" content="#090d10" />
	<meta name="description" content="Pagina fan dedicata all'alleanza TARA di Last Asylum: Plague, con muro messaggi in PHP." />
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
				<ul class="hero-badges">
					<li>Alliance Hub</li>
					<li>TARA</li>
					<li>Fan Page</li>
				</ul>
				<h2>TARA Alliance</h2>
				<p>Un piccolo avamposto per lasciare saluti, coordinate, promemoria evento e messaggi rapidi per gli alleati.</p>
				<ul class="actions">
					<li><a href="#wall" class="button primary scrolly">Lascia un messaggio</a></li>
					<li><a href="index.html" class="button secondary">Torna alla base</a></li>
				</ul>
			</div>
		</section>

		<section class="wrapper style1 special fade-up tara-intel">
			<div class="container">
				<header class="major">
					<span class="section-tag">Alliance Board</span>
					<h2>Il punto di ritrovo TARA.</h2>
					<p>Usalo come bacheca semplice: i messaggi vengono salvati in locale dal PHP e mostrati dal piu recente al piu vecchio.</p>
				</header>
				<div class="tara-cards">
					<section>
						<span class="icon solid alt major fa-shield-alt"></span>
						<h3>Difesa</h3>
						<p>Segnala attacchi, rally e richieste di rinforzo prima che la mappa diventi ingestibile.</p>
					</section>
					<section>
						<span class="icon solid alt major fa-users"></span>
						<h3>Coordinamento</h3>
						<p>Lascia orari, obiettivi comuni e note rapide per chi entra dopo.</p>
					</section>
					<section>
						<span class="icon solid alt major fa-fire"></span>
						<h3>Eventi</h3>
						<p>Tieni traccia di boss, reward e priorita dell'alleanza durante gli eventi live.</p>
					</section>
				</div>
			</div>
		</section>

		<section id="wall" class="wrapper style2 special fade tara-wall-section">
			<div class="container">
				<header>
					<span class="section-tag">TARA Wall</span>
					<h2>Muro messaggi alleanza.</h2>
					<p>Scrivi un messaggio breve. Sono accettati massimo 32 caratteri per il nome e 280 per il testo.</p>
				</header>

				<div class="tara-wall-layout">
					<form class="tara-wall-form" method="post" action="tara.php#wall">
						<?php if ($success) : ?>
							<p class="tara-alert success">Messaggio pubblicato sul muro TARA.</p>
						<?php endif; ?>

						<?php if ($errors) : ?>
							<div class="tara-alert error">
								<?php foreach ($errors as $error) : ?>
									<p><?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?></p>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>

						<label for="name">Nome comandante</label>
						<input id="name" type="text" name="name" maxlength="32" required placeholder="Es. Cro" value="<?php echo htmlspecialchars((string) ($_POST['name'] ?? ''), ENT_QUOTES, 'UTF-8'); ?>" />

						<label for="message">Messaggio</label>
						<textarea id="message" name="message" maxlength="280" rows="5" required placeholder="Scrivi qui il tuo messaggio per TARA..."><?php echo htmlspecialchars((string) ($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8'); ?></textarea>

						<button class="button primary fit" type="submit">Pubblica</button>
					</form>

					<div class="tara-message-list" aria-live="polite">
						<?php if (!$messages) : ?>
							<article class="tara-message empty">
								<h3>Nessun messaggio ancora.</h3>
								<p>Il primo messaggio sul muro TARA puo essere il tuo.</p>
							</article>
						<?php endif; ?>

						<?php foreach ($messages as $message) : ?>
							<article class="tara-message">
								<div class="tara-message-head">
									<h3><?php echo htmlspecialchars((string) ($message['name'] ?? 'Comandante'), ENT_QUOTES, 'UTF-8'); ?></h3>
									<time datetime="<?php echo htmlspecialchars((string) ($message['created_at'] ?? ''), ENT_QUOTES, 'UTF-8'); ?>">
										<?php echo htmlspecialchars(format_message_date((string) ($message['created_at'] ?? 'now')), ENT_QUOTES, 'UTF-8'); ?>
									</time>
								</div>
								<p><?php echo nl2br(htmlspecialchars((string) ($message['message'] ?? ''), ENT_QUOTES, 'UTF-8')); ?></p>
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
