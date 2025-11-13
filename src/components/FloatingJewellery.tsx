import { useScroll, useTransform, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Ring3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <group>
      {/* Ring band */}
      <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.15, 16, 50]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Diamond stone */}
      <mesh position={[0, 0.5, 0]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.05}
          transmission={0.9}
          thickness={0.5}
          ior={2.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#FFD700" />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#ffffff" />
    </group>
  );
};

const FloatingJewellery = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.3, 1], ["-10%", "50%", "150%"]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [0.6, 1.2, 0.9, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "20%", "80%"]);

  return (
    <motion.div
      style={{ y, x, scale, opacity, rotateZ }}
      className="fixed top-1/4 right-[10%] w-48 h-48 md:w-64 md:h-64 pointer-events-none z-20"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Ring3D />
      </Canvas>
    </motion.div>
  );
};

export default FloatingJewellery;
