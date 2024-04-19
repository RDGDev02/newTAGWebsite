// Import necessary libraries and modules
"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Define the StarBackground component
const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Update rotation in the animation frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // Return JSX for the StarBackground component
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false} // Typo: Should be "depthWrite" instead of "dethWrite"
        />
      </Points>
    </group>
  );
};

// Define the StarsCanvas component
const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-3]">
    <Canvas camera={{ position: [0, 0, 1] }} style={{ background: '#02020A' }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

// Export the StarsCanvas component as the default export
export default StarsCanvas;
