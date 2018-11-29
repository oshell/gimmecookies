<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiController
{
    public function index()
    {
        return new Response('index reserved for web services');
    }

    public function api()
    {
        return new Response('api is running');
    }

    public function order()
    {
        return new Response('make an order');
    }
}
