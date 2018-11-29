<?php
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Route;
use App\Controller\ApiController;

$routes = new RouteCollection();
$actionMapping = [
  ['/', 'index'],
  ['/api', 'api'],
  ['/api/order', 'index']
];

for ($i = 0; $i < count($actionMapping); $i++) {
  $action = array_pop($actionMapping[$i]);
  $route = array_pop($actionMapping[$i]);

  $routes->add($action, new Route($route, array(
      '_controller' => [ApiController::class, $action]
  )));
}

return $routes;
