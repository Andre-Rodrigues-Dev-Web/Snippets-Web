<?php 
// aquicria um arquivo
$fp = fopen("arquivo.txt", "w");
// escreve no arquivo
fwrite($fp, "Olá mundo!");
// fecha o arquivo
fclose($fp);
?>