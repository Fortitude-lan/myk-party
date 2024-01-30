/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\Ivysaur.glb -k 
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Ivysaur(props) {
  const group = useRef();
  const { nodes, scene, materials } = useGLTF("/models/Ivysaur.glb");
  // 设置自发光材质
  const emissionMaterial = (ref) => {
    ref.current.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(setEmissive);
        } else {
          const m = child.material;
          m.emissive = m.color;
          m.emissiveMap = m.map;
          m.emissiveIntensity = 0.25;
        }
      }
    });
  };

  useEffect(() => {
    // 遍历模型中的每个材质并设置自发光
    emissionMaterial(group);
  }, []);
  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
      {/* <primitive object={nodes.pm0002_00} />
      <skinnedMesh
        frustumCulled={false}
        name="Ivysaur_1"
        geometry={nodes.Ivysaur_1.geometry}
        material={materials["Material #46"]}
        skeleton={nodes.Ivysaur_1.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        name="Ivysaur_2"
        geometry={nodes.Ivysaur_2.geometry}
        material={materials["Material #47"]}
        skeleton={nodes.Ivysaur_2.skeleton}
      />
      <skinnedMesh
        name="Ivysaur_3"
        frustumCulled={false}
        geometry={nodes.Ivysaur_3.geometry}
        material={materials["Material #48"]}
        skeleton={nodes.Ivysaur_3.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        name="Ivysaur_4"
        geometry={nodes.Ivysaur_4.geometry}
        material={materials["Material #49"]}
        skeleton={nodes.Ivysaur_4.skeleton}
      /> */}
    </group>
  );
}
useGLTF.preload("/models/Ivysaur.glb");