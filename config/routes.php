<?php
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Route;
use App\Controller\ApiController;

$routes = new RouteCollection();
$actionMapping = [
  ['/', 'index', ['GET']],
  ['/api', 'api', ['GET']],
  ['/api/order', 'order', ['POST', 'OPTIONS']]
];

for ($i = 0; $i < count($actionMapping); $i++) {
  $methods = array_pop($actionMapping[$i]);
  $action = array_pop($actionMapping[$i]);
  $route = array_pop($actionMapping[$i]);

  $routes->add($action, new Route($route, array(
      '_controller' => [ApiController::class, $action]
  ), array(), array(), '', array(), $methods));
}

return $routes;
