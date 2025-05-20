<?php
$usuario_correto = "admin@oca.com";
$senha_correta = "123456";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usu"] ?? "";
    $senha = $_POST["sen"] ?? "";

    if ($usuario === $usuario_correto && $senha === $senha_correta) {
        header("Location: painel.html");
        exit;
    } else {
        header("Location: index.html?erro=1");
        exit;
    }
}
?>
