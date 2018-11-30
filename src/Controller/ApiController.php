<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use \Datetime;

use App\Entity\Orders as Order;

class ApiController extends AbstractController
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
        $entityManager = $this->getDoctrine()->getManager();
        $order = new Order();
        $order->setTimestamp(new DateTime());
        $entityManager->persist($order);
        $entityManager->flush();

        return $this->createResponse($order, ['timestamp']);
    }

    private function createResponse($obj, $attributes = [])
    {
      $values = [];

      if (count($attributes)) {
        for($i=0; $i < count($attributes); $i++) {
          $key = $attributes[$i];
          $getter = 'get' . ucfirst($key);
          $values[$key] = $obj->$getter();
        }
      }

      // save reference, so we can array_pop() the class name
      $names = explode("\\", get_class($obj));

      $response = [
        'data'=> [
          'type'=> array_pop($names),
          'id'=> $obj->getId(),
          'attributes'=> $values
        ]
      ];

      $response = $this->json($response);
      
      // to prevent CORB problems for development on localhost
      $response->headers->set('Access-Control-Allow-Origin', '*');
      $response->headers->set('Access-Control-Allow-Method', '*');

      return $response;
    }
}
