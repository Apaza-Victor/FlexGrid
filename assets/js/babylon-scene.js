(function () {
  const canvas = document.getElementById('babylonCanvas');
  if (!canvas || typeof BABYLON === 'undefined') return;

  const engine = new BABYLON.Engine(canvas, true, { antialias: true });
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 4, Math.PI / 3, 12, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = 6;
  camera.upperRadiusLimit = 20;
  camera.wheelPrecision = 50;

  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 2, 0), scene);
  light.intensity = 0.9;
  light.diffuse = new BABYLON.Color3(0.67, 0.36, 0.9);
  light.groundColor = new BABYLON.Color3(0.98, 0.47, 0.66);

  const pointLight = new BABYLON.PointLight('pointLight', new BABYLON.Vector3(3, 3, -3), scene);
  pointLight.diffuse = new BABYLON.Color3(0, 0.81, 0.79);

  // Main icosahedron
  const ico = BABYLON.MeshBuilder.CreateIcosahedron('ico', { radius: 2.5, flat: true }, scene);
  const icoMat = new BABYLON.StandardMaterial('icoMat', scene);
  icoMat.diffuseColor = new BABYLON.Color3(0.42, 0.36, 0.91);
  icoMat.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
  icoMat.alpha = 0.7;
  ico.material = icoMat;
  ico.enableEdgesRendering();
  ico.edgesWidth = 2.0;
  ico.edgesColor = new BABYLON.Color4(0.64, 0.61, 0.99, 1);

  // Orbiting torus
  const torus = BABYLON.MeshBuilder.CreateTorus('torus', { diameter: 5, thickness: 0.3, tessellation: 32 }, scene);
  const torusMat = new BABYLON.StandardMaterial('torusMat', scene);
  torusMat.diffuseColor = new BABYLON.Color3(0.98, 0.47, 0.66);
  torusMat.alpha = 0.5;
  torus.material = torusMat;
  torus.enableEdgesRendering();
  torus.edgesWidth = 1.5;
  torus.edgesColor = new BABYLON.Color4(0.98, 0.47, 0.66, 0.8);

  // Orbiting spheres
  const spheres = [];
  for (let i = 0; i < 6; i++) {
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere' + i, { diameter: 0.5, segments: 16 }, scene);
    const sMat = new BABYLON.StandardMaterial('sMat' + i, scene);
    const hue = i / 6;
    sMat.diffuseColor = new BABYLON.Color3(
      0.42 + hue * 0.56,
      0.36 + (1 - hue) * 0.45,
      0.91 - hue * 0.25
    );
    sMat.emissiveColor = sMat.diffuseColor.scale(0.3);
    sphere.material = sMat;
    sphere.enableEdgesRendering();
    sphere.edgesWidth = 1.0;
    sphere.edgesColor = new BABYLON.Color4(1, 1, 1, 0.4);
    spheres.push({ mesh: sphere, index: i });
  }

  // Glow
  const gl = new BABYLON.GlowLayer('glow', scene);
  gl.intensity = 0.6;

  // Animation
  let time = 0;
  scene.registerBeforeRender(() => {
    time += 0.01;
    ico.rotation.x += 0.005;
    ico.rotation.y += 0.008;

    torus.rotation.x = Math.sin(time * 0.5) * 0.5;
    torus.rotation.z = time * 0.3;

    spheres.forEach(({ mesh, index }) => {
      const angle = time * 0.8 + (index * Math.PI * 2) / 6;
      const radius = 4 + Math.sin(time + index) * 0.5;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.z = Math.sin(angle) * radius;
      mesh.position.y = Math.sin(time * 1.2 + index * 0.8) * 1.5;
      mesh.rotation.x += 0.02;
      mesh.rotation.y += 0.03;
    });

    pointLight.position.x = Math.sin(time * 0.7) * 5;
    pointLight.position.z = Math.cos(time * 0.7) * 5;
  });

  engine.runRenderLoop(() => scene.render());
  window.addEventListener('resize', () => engine.resize());
})();
