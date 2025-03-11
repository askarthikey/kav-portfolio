import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Delay initialization to manage WebGL contexts better
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Create an intersection observer to only render when visible
    if (canvasRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(canvasRef.current);
      
      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        clearTimeout(timer);
      };
    }

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timer);
    };
  }, []);

  // Clean up WebGL resources with useGLTF
  useEffect(() => {
    return () => {
      // Cleanup function
      if (typeof window !== 'undefined') {
        useGLTF.preload("./desktop_pc/scene.gltf");
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full">
      {isVisible && (
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 1.5]} // Reduced from [1, 2] to improve performance
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ 
            preserveDrawingBuffer: true,
            powerPreference: 'high-performance',
            antialias: false, // Disable antialiasing for better performance
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate={false} // Disable auto-rotation to reduce GPU usage
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas;
