<?php
function getImagesFromFolder($folder) {
    $images = glob($folder . "/*.{jpg,jpeg,png,gif}", GLOB_BRACE);
    return $images;
}

$realImages = getImagesFromFolder('real');
$fakeImages = getImagesFromFolder('fake');

$response = [
    'real' => $realImages,
    'fake' => $fakeImages,
];

header('Content-Type: application/json');
echo json_encode($response);
?>
