<?php
require_once(ROOT . DS . 'vendor' . DS . 'PHPExcel' . DS . 'Classes' . DS . 'PHPExcel.php');

// Create new PHPExcel object
$objPHPExcel = new PHPExcel();
$objPHPExcel->getProperties()->setCreator("creator name");

//HEADER
$i=1;
$objPHPExcel->setActiveSheetIndex(0);
$objPHPExcel->getActiveSheet()->setCellValue('A'.$i, 'User ID');
$objPHPExcel->getActiveSheet()->setCellValue('B'.$i, 'User Name');

//DATA
$i++;
$objPHPExcel->getActiveSheet()->setCellValue('A'.$i, '1111');
$objPHPExcel->getActiveSheet()->setCellValue('B'.$i, 'Tuấn');

/*
if u have a collection of users just loop
//DATA
foreach($users as $user){
    $i++;
    $objPHPExcel->getActiveSheet()->setCellValue('A'.$i, $user->id);
    $objPHPExcel->getActiveSheet()->setCellValue('B'.$i, $user->name);
}
*/

// Rename sheet
$objPHPExcel->getActiveSheet()->setTitle('User Data');

// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);

//call the function in the controller with $output_type = F and $file with complete path to the file, to generate the file in the server for example attach to email
if (isset($output_type) && $output_type == 'F') {
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save($file);
} else {
    // Redirect output to a client's web browser (Excel2007)
    header('Content-type: application/ms-excel');
    header("Content-Disposition: attachment; filename=abc.xlsx");  //File name extension was wrong
//    header("Expires: 0");
//    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
//    header("Cache-Control: private",false);
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save('php://output');
}