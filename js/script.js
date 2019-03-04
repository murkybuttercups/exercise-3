var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth/window.innerHeight, 
  0.1, 
  1000
);

// place the camera at z of 100
camera.position.z = 100;

// add a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// add the renderer element to the DOM so it is in our page
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(20, 20, 20);
var material = new THREE.MeshLambertMaterial({color: 0xfd59d7});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/* we need to add a light so we can see our cube - its almost
as if we're turning on a lightbulb within the room */
var light = new THREE.PointLight(0xFFFF00);
/* position the light so it shines on the cube (x, y, z) */
light.position.set(10, 0, 25);
scene.add(light);

// create some geometry - this is how you create some square 
// geometry using the BoxGeometry method
var geometry = new THREE.BoxGeometry( 20, 20, 20);
// create a material
var material = new THREE.MeshNormalMaterial();
// add the geometry to the mesh - and apply the material to it
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// rotate cube
cube.rotation.x = 0.45;
cube.rotation.y = -0.25;

// shift cube on the x axis
cube.position.x = -30;

// update cube vertices
for (var i = 0, l = geometry.vertices.length; i<l; i++) {
    // we'll move the x & y position of each vertice by a random amount
  geometry.vertices[i].x += -10 + Math.random()*20;
  geometry.vertices[i].y += -10 + Math.random()*20;
}
