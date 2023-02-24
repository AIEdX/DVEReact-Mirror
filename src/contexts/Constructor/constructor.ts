import { DVEC } from "divine-voxel-engine/dist/Constructor/DivineVoxelEngineConstructor";

(async () => {
  // DVEC.voxelManager.registerVoxel(
  //   DVEC.voxelManager.defaults.box.simple("dve_debug", [
  //     "#dve_solid",
  //     "dve_debug",
  //   ])

  const voxelreg= DVEC.voxelManager.defaults.box.simple("dve_debug", 
     { top: ["#dve_solid", "dve_debug", "top"],
      bottom: ["#dve_solid", "dve_debug", "bottom"],
      north: ["#dve_solid", "dve_debug", "north"],
      south: ["#dve_solid", "dve_debug", "south"],
      east: ["#dve_solid", "dve_debug", "east"],
      west: ["#dve_solid", "dve_debug", "west"],
     }
    );
 console.log ("voxel reg", voxelreg);
 DVEC.voxelManager.registerVoxel(
    DVEC.voxelManager.defaults.box.simple("dve_debug", 
     { top: ["#dve_solid", "dve_debug", "top"],
      bottom: ["#dve_solid", "dve_debug", "bottom"],
      north: ["#dve_solid", "dve_debug", "north"],
      south: ["#dve_solid", "dve_debug", "south"],
      east: ["#dve_solid", "dve_debug", "east"],
      west: ["#dve_solid", "dve_debug", "west"],
     }
    )

  );
  await DVEC.$INIT();
})();
