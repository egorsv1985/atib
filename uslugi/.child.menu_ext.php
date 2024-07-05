<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

global $APPLICATION;

$aMenuLinksExt = $APPLICATION->IncludeComponent(
    "millcom:menu",
    "",
    Array(
        "IBLOCK_ID" => "2", 
        "DEPTH_LEVEL" => "2", 
        "CACHE_TYPE" => "A", 
        "CACHE_TIME" => "3600" 
    ),
    false,
	Array('HIDE_ICONS' => 'Y')
);

$aMenuLinks = array_merge($aMenuLinksExt, $aMenuLinks);

?>