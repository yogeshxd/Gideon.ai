import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js"
//import * as dat from 'dat.gui'
import {OrbitControls} from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js"
//import gsap from "/node-modules/gsap";

//console.log(dat);


// const gui= new dat.GUI();
// const world={
//   plane:{
//     width:17,
//     height:17,
//     widthSegments:1,
//     heightSegments:27

//   }
// }
// gui.add(world.plane,"width",1,20).onChange(genplane);
// gui.add(world.plane,"height",1,30).onChange(genplane);
// gui.add(world.plane,"widthSegments",1,50).onChange(genplane);
// gui.add(world.plane,"heightSegments",1,50).onChange(genplane);

function genplane(){
  mesh.geometry.dispose();
  mesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height,world.plane.widthSegments,world.plane.heightSegments);

  const {array}= mesh.geometry.attributes.position;

for(let i=0; i<array.length; i+=3){
  const x=array[i];
  const y=array[i+1];
  const z=array[i+2];
  
  array[i+2]=z+Math.random();
}
const color=[];

for(let i=0; i<mesh.geometry.attributes.position.count; i++){

  color.push(1,1,1);
}

mesh.geometry.setAttribute("color",
new THREE.BufferAttribute(new Float32Array(color),3));

  
}
const raycaster= new THREE.Raycaster();
const scene= new THREE.Scene();

const camera= new THREE.PerspectiveCamera(75,innerWidth/innerHeight,1,1000);

const renderer= new THREE.WebGLRenderer();


document.body.appendChild(renderer.domElement);



const geometry = new THREE.PlaneGeometry( 5, 1000 ,50,250);
const geometry2 = new THREE.PlaneGeometry( 50, 1000 ,1000,90);




const material= new THREE.MeshPhongMaterial(
  {
  side:THREE.DoubleSide,
  flatShading:THREE.FlatShading,
  vertexColors:true
  }
)
const material2= new THREE.MeshBasicMaterial(
  {
  side:THREE.DoubleSide,
  flatShading:THREE.FlatShading,
  vertexColors:true,
  color:0x1108f

  }
)
const mesh = new THREE.Mesh(geometry,material);
const mesh2 = new THREE.Mesh(geometry,material);
const mesh3 = new THREE.Mesh(geometry2,material2);

const light = new THREE.DirectionalLight(
  0xffffff,0.4
)
const light2 = new THREE.DirectionalLight(
  0xffffff,1
)
light.position.set(0,0,1);
light2.position.set(0,0,-1);

scene.add(light);
scene.add(light2);
console.log(mesh);


const {array}= mesh.geometry.attributes.position;


for(let i=0; i<array.length; i+=3){
  const x=array[i];
  const y=array[i+1];
  const z=array[i+2];
  
  array[i+2]=z+Math.random();
}




scene.add(mesh);
scene.add(mesh2);
scene.add(mesh3);



camera.position.z=6;
new OrbitControls(camera, renderer.domElement)
renderer.render(scene,camera);
const mouse={
  x:undefined,
  y:undefined
}
console.log(mesh.geometry.attributes);
const color=[];

for(let i=0; i<mesh.geometry.attributes.position.count; i++){

  color.push(0,0.19,2);
}

mesh.geometry.setAttribute("color",
new THREE.BufferAttribute(new Float32Array(color),3));

const colorw=[];

for(let i=0; i<mesh3.geometry.attributes.position.count; i++){

  colorw.push(0,0.19,0.4,0,0,0);
}




mesh3.geometry.setAttribute("color",
new THREE.BufferAttribute(new Float32Array(colorw),3));


console.log(mesh.geometry.atrributes);
mesh.position.x-=10;
mesh2.position.x-=-10;

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  raycaster.setFromCamera(mouse,camera)
  const inter=raycaster.intersectObject(mesh);
  const inter2=raycaster.intersectObject(mesh2);
  // camera.rotation.x+=0.003;
  camera.position.y+=0.01; 
  

 
  
  

  document.getElementById("bod").onmousemove=function(){
   
    if(inter.length>0 || inter2.length>0)
 {
  const {color}=inter[0].object.geometry.attributes;
  color.setX(inter[0].face.a,0);
  color.setY(inter[0].face.a,0.19);
  color.setZ(inter[0].face.a,2);

  color.setX(inter[0].face.b,0);
  color.setY(inter[0].face.b,0.19);
  color.setZ(inter[0].face.b,2);

  color.setX(inter[0].face.c,0);
  color.setY(inter[0].face.c,0.19);
  color.setZ(inter[0].face.c,2);
  
  color.needsUpdate=true;
  const initalcolor={
    r:0,
    g:0.19,
    b:1,
 
    
  }
  const hoverColor={
    r:0,
    g:0.19,
    b:2,
   
  }
  gsap.to(hoverColor,{
    r:initalcolor.r,
    g:initalcolor.g,
    b:initalcolor.b,
    onUpdate:()=>{
      color.setX(inter[0].face.a,hoverColor.r);
      color.setY(inter[0].face.a,hoverColor.g);
      color.setZ(inter[0].face.a,hoverColor.b);
    
      color.setX(inter[0].face.b,hoverColor.r);
      color.setY(inter[0].face.b,hoverColor.g);
      color.setZ(inter[0].face.b,hoverColor.b);
    
      color.setX(inter[0].face.c,hoverColor.r);
      color.setY(inter[0].face.c,hoverColor.g);
      color.setZ(inter[0].face.c,hoverColor.b);
      color.needsUpdate=true;
    }
  })
     
 }





  }
  
  
 

  renderer.setSize(innerWidth,innerHeight);
  renderer.setPixelRatio(innerWidth/innerHeight);
 
   
  
  // console.log(delta)
}
animate();

addEventListener("mousemove",(event)=>{
  mouse.x=((event.clientX/innerWidth)*2)-1;
  mouse.y=-(event.clientY/innerHeight)*2+1;
  
 
})


