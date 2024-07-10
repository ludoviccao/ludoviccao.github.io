var response = await fetch("/meme.txt");

if (response.ok) {
  const url = await response.text();
  const cleanUrl = url.replace(/(\r\n|\n|\r)/gm, "").trim();

  window.location.href = cleanUrl;
}
