import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy, memo } from "react";
import { useInView } from "react-intersection-observer";

/* 🔹 Lazy-load models (CRITICAL) */
const VrHeadset = lazy(() => import("./Oculus_quest_2"));
const Shelby = lazy(() => import("./Shelby_427_cobra"));
const Mustang = lazy(() => import("./Ford_mustang_gtd"));
const FordGt = lazy(() => import("./Ford_gt"));

const MODEL_MAP = {
  vr: VrHeadset,
  shelby: Shelby,
  mustang_gtd: Mustang,
  ford_gt: FordGt,
};

const Work3dExperience = memo(
  ({ model, scale = [1, 1, 1], rotation = [0, 0, 0] }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: "200px", // start loading BEFORE visible
    });

    const ModelComponent = MODEL_MAP[model];

    return (
      <div ref={ref} className="w-full h-[400px]">
        {inView && ModelComponent && (
          <Canvas
            camera={{ position: [0, 3, 7], fov: 45 }}
            dpr={[1, 1.5]} // 🔹 cap pixel ratio
            frameloop="demand" // 🔹 render only on interaction
            gl={{ antialias: true, powerPreference: "high-performance" }}
          >
            <Suspense fallback={null}>
              {/* 🔹 Cheap lighting (no HDR, no env map) */}
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 3]} intensity={1.8} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
              />

              <group scale={scale} rotation={rotation}>
                <ModelComponent />
              </group>
            </Suspense>
          </Canvas>
        )}
      </div>
    );
  }
);

export default Work3dExperience;
