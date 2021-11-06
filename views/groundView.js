import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js';
    let scene,camera,renderer;
function init(){  
    scene = new THREE.Scene;

    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
    camera.position.set(-900,-200,-900);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 1500;  // ethan could use these to not allow people to zoom out so far

    
    let texture_bk;
    let texture_ft;
    let texture_up;
    let texture_dn;
    let texture_rt;
    let texture_lf;
    let materialArray = [];

    //need to call in app.js
    function showPlanet(currentPlanet){
        if(currentPlanet=="mercury"){
            texture_bk = new THREE.TextureLoader().load('Images/mercury_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/mercury_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/mercury_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/mercury_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/mercury_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/mercury_lf.jpg');
        }
        else if(currentPlanet=="venus"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="earth"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="mars"){
            texture_bk = new THREE.TextureLoader().load('Images/mars_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/mars_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/mars_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/mars_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/mars_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/mars_lf.jpg');
        }
        else if(currentPlanet=="jupiter"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="saturn"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="uranus"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="neptune"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
        else if(currentPlanet=="pluto"){
            texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
            texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
            texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
            texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
            texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
            texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
        }
    }

    
     texture_bk = new THREE.TextureLoader().load('Images/earth_bk.jpg');
     texture_ft = new THREE.TextureLoader().load('Images/earth_ft.jpg');
     texture_up = new THREE.TextureLoader().load('Images/earth_up.jpg');
     texture_dn = new THREE.TextureLoader().load('Images/earth_dn.jpg');
     texture_rt = new THREE.TextureLoader().load('Images/earth_rt.jpg');
     texture_lf = new THREE.TextureLoader().load('Images/earth_lf.jpg');
   

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

    for(let i =0; i<6;i ++){
        materialArray[i].side = THREE.BackSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    animate();
}
function animate(){
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}
init();
