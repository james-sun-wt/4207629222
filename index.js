const searchParams = new URLSearchParams(window.location.search);
const deepLink = searchParams.get('af_dp');
if (deepLink) {
    window.location.href = "intent://m/#Intent;scheme=" + deepLink + ";package=com.fandango.regal.mock;end";
} else {
    alert('malformed deeplink! missing "af_dp" param');
}