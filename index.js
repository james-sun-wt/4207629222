const searchParams = new URLSearchParams(window.location.search);
const deepLink = searchParams.get('af_dp');
if (deepLink) {
//    window.location.href = decodeURI(deepLink);
    window.location.href = "intent://m/#Intent;scheme=" + deepLink + ";package=com.fandango.regal.mock;end";
   /* NativeAppLauncher.init({
        appLauncherElId: 'open-app-link', // Element Id of App Launcher button.
        notSupportedMessage: 'Sorry, you’ll need to use a different browser to do this.', // Defaults to 'Not Supported!'
        universalLinkUrl: 'https://www.regmovies.com/',
        appUri: decodeURI(deepLink),
        androidAppId: 'com.fandango.regal.mock',
        iOsAppStore: 'https://apps.apple.com/us/app/regal-movie-tickets-made-easy/id502912815?mt=8',
        debug: true // Optional
    });*/
} else {
    alert('malformed deeplink! missing "af_dp" param');
}