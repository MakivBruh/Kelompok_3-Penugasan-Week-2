import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import LoadingContext from "./LoadingContext";

const MODEL_PATH = "/models/drum_washing_machine.glb";

const WashingMachine3D = () => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const finishPageLoading = useContext(LoadingContext);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let disposed = false;
    let animationFrame;
    let model;
    let modelRadius = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.12, 6);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      queueMicrotask(() => {
        if (!disposed) {
          setStatus("unsupported");
          finishPageLoading();
        }
      });
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const roomEnvironment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const environmentTarget = pmremGenerator.fromScene(roomEnvironment);
    scene.environment = environmentTarget.texture;
    roomEnvironment.traverse((object) => {
      if (!object.isMesh) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    });
    pmremGenerator.dispose();

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8995a3, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xcce5ff, 1.5);
    fillLight.position.set(-5, 1, 3);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0x89f5e7, 2);
    rimLight.position.set(1, 3, -5);
    scene.add(rimLight);

    const fitCameraToModel = () => {
      if (!model || !modelRadius) return;
      const verticalFov = THREE.MathUtils.degToRad(camera.fov);
      const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
      const limitingHalfFov = Math.min(verticalFov, horizontalFov) / 2;
      const distance = (modelRadius / Math.sin(limitingHalfFov)) * 1;
      camera.position.set(0, 0.12, distance);
      camera.lookAt(0, 0, 0);
    };

    let scrollRotation = { x: 0, y: 0, z: 0 };
    const syncModelRotationWithScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const progress = THREE.MathUtils.clamp(scrollProgress, 0, 1);
      const journey = progress * Math.PI * 2;

      // Scroll drives a smooth product showcase: full horizontal turn plus restrained tilt.
      scrollRotation = {
        y: journey,
        x: Math.sin(journey) * 0.12,
        z: Math.sin(journey * 2) * 0.045,
      };
    };
    window.addEventListener("scroll", syncModelRotationWithScroll, { passive: true });
    syncModelRotationWithScroll();

    const resizeRenderer = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      fitCameraToModel();
    };
    const resizeObserver = new ResizeObserver(resizeRenderer);
    resizeObserver.observe(container);
    resizeRenderer();

    const clock = new THREE.Clock();
    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      if (model) {
        model.rotation.x = THREE.MathUtils.damp(model.rotation.x, scrollRotation.x, 4, delta);
        model.rotation.y = THREE.MathUtils.damp(model.rotation.y, scrollRotation.y, 4, delta);
        model.rotation.z = THREE.MathUtils.damp(model.rotation.z, scrollRotation.z, 4, delta);
      }
      renderer.render(scene, camera);
    };
    animate();

    new GLTFLoader().load(
      MODEL_PATH,
      (gltf) => {
        if (disposed) return;
        model = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        const size = bounds.getSize(new THREE.Vector3());
        const largestDimension = Math.max(size.x, size.y, size.z);
        const sphere = bounds.getBoundingSphere(new THREE.Sphere());
        if (!largestDimension) {
          setStatus("error");
          finishPageLoading();
          return;
        }

        const scale = 2.8 / largestDimension;
        model.scale.setScalar(scale);
        model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        modelRadius = sphere.radius * scale;
        model.traverse((object) => {
          if (!object.isMesh) return;
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (!material.isMeshStandardMaterial) return;
            material.metalness = 0.05;
            material.roughness = Math.max(material.roughness, 0.45);
            material.envMapIntensity = 1.8;
          });
        });
        scene.add(model);
        fitCameraToModel();
        setStatus("ready");
        finishPageLoading();
      },
      undefined,
      () => {
        if (!disposed) {
          setStatus("error");
          finishPageLoading();
        }
      },
    );

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", syncModelRotationWithScroll);
      environmentTarget.dispose();
      if (model) {
        model.traverse((node) => {
          if (!node.isMesh) return;
          node.geometry.dispose();
          const materials = Array.isArray(node.material) ? node.material : [node.material];
          materials.forEach((material) => material.dispose());
        });
      }
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [finishPageLoading]);

  const statusMessage = {
    loading: "Memuat model 3D...",
    error: "Model tidak bisa dimuat.",
    unsupported: "Browser ini tidak mendukung tampilan 3D WebGL.",
  }[status];

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      aria-label="Model 3D mesin cuci"
    >
      {status !== "ready" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm text-[#3f4850]">
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default WashingMachine3D;
