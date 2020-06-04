<?php

    session_start();

    include("../../config.php");

    if (isset($_SESSION['adm'])) {
        
        if (isset($_REQUEST['title'])) {
            
            // $gossip = new Gossip();

            $gossip->setTitle($title = strip_tags($_REQUEST['title']));
            $gossip->setBody($body = strip_tags($_REQUEST['body']));
            $gossip->setImage($_FILES['image']);
            $gossip->setUserId($_SESSION['adm']);

            $data = $gossip->insert();

            echo json_encode($data);

        }

    }
?>