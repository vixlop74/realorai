<?php
function getImagesFromFolder($folder) {
    // Добавляем .webp к списку поддерживаемых форматов
    $images = glob($folder . "/*.{webp}", GLOB_BRACE);
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
