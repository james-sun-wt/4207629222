const searchParams = new URLSearchParams(window.location.search);
const deepLink = searchParams.get('af_dp');
if (deepLink) {
    window.location.href = decodeURI(deepLink);
} else {
    alert('malformed deeplink! missing "af_dp" param');
}