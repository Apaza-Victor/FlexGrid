(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.position.z = 30;

  // Floating geometries
  const geometries = [];
  const colors = [0x6c5ce7, 0xa29bfe, 0xfd79a8, 0x00cec9, 0xfdcb6e];

  for (let i = 0; i < 18; i++) {
    const type = Math.floor(Math.random() * 4);
    let geo;
    switch (type) {
      case 0: geo = new THREE.IcosahedronGeometry(Math.random() * 1.2 + 0.4, 0); break;
      case 1: geo = new THREE.OctahedronGeometry(Math.random() * 1 + 0.3, 0); break;
      case 2: geo = new THREE.TetrahedronGeometry(Math.random() * 0.9 + 0.3, 0); break;
      default: geo = new THREE.TorusGeometry(Math.random() * 0.6 + 0.2, 0.15, 8, 16); break;
    }

    const mat = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20
    );
    mesh.userData = {
      rotSpeed: { x: (Math.random() - 0.5) * 0.015, y: (Math.random() - 0.5) * 0.015 },
      floatSpeed: Math.random() * 0.5 + 0.3,
      floatOffset: Math.random() * Math.PI * 2
    };
    scene.add(mesh);
    geometries.push(mesh);
  }

  // Particles
  const particlesGeo = new THREE.BufferGeometry();
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 60;
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMat = new THREE.PointsMaterial({
    size: 0.08,
    color: 0xa29bfe,
    transparent: true,
    opacity: 0.5
  });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    geometries.forEach((mesh) => {
      mesh.rotation.x += mesh.userData.rotSpeed.x;
      mesh.rotation.y += mesh.userData.rotSpeed.y;
      mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.008;
    });

    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
