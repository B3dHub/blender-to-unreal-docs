# Preference

## General

<p><img :src="$withBase('/img/prefs_general.png')" alt='' /></p>

### Prefix

Add and Change the prefix of Static Meshes, Skeletal Meshes, Collisions, Lods, Meterials, Textures.

<p><img :src="$withBase('/img/prefs_general_prefix.png')" alt='' /></p>

- `SM` prefix will add to Static Meshes, Collisions, Sockets and Lods.
  - `Suzanne` = `SM_Suzanne`
  - `UCX_Suzanne` = `UCX_SM_Suzanne`
  - `UBX_Suzanne` = `UBX_SM_Suzanne`
  - `UCP_Suzanne` = `UCP_SM_Suzanne`
  - `USP_Suzanne` = `USP_SM_Suzanne`
  - `Suzanne_LOD1` = `SM_Suzanne_LOD1`

- `SKM` prefix will add to Skeletal Meshes.
  - `Armature` = `SKM_Armature`

- `A` prefix will add to Animation.
  - `Animation` = `A_Animation`

- `T` prefix will add to Material Textures.
  - `Texture` = `T_Texture`

- `M` prefix will add to Materials.
  - `Material` = `M_Material`

### Collision

Change the color of the collision objects.

<p><img :src="$withBase('/img/prefs_general_collision.png')" alt='' /></p>

`UCX_Collision` material for the Convex collision.

`UCB_Collision` material for the Box collision.

`USP_Collision` material for the Sphere collision.

`UCP_Collision` material for the Capsule collision.

### Socket

Display size of the socket.

<p><img :src="$withBase('/img/prefs_general_socket.png')" alt='' /></p>

### LODs

Offset LODs location for better comparison.

<p><img :src="$withBase('/img/prefs_general_lod.png')" alt='' /></p>


### V-HACD

::: tip REQUIRE
- Windows operating system.
<!-- - Version 2 of V-HACD executable. -->
:::
<!-- 
<p><img :src="$withBase('/img/prefs_general_vhacd.png')" alt='' /></p>

- Extract the V-HACD executable from the zip/Blender-to-Unreal/resouce/V-HACD/VHACD_v2.exe
- Locate the executable path then the parameters will available. -->

<p><img :src="$withBase('/img/prefs_general_vhacd.png')" alt='' /></p>

<!-- | Parameter        | Description                                                                                                                                                                               | Range            | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| Voxel Resolution | Maximum number of voxels generated during the voxelization stage                                                                                                                          | 10000 - 64000000 | 100000  |
| Clipping Depth   | Maximum number of clipping stages. During each split stage, all the model parts (with a concavity higher than the user defined threshold) are clipped according the "best" clipping plane | 1 - 32           | 20      |
| Concavity        | Maximum allowed concavity                                                                                                                                                                 | 0.0 - 1.0        | 0.0025  |
| Plane Downsample | Controls the granularity for the "best" clipping plane                                                                                                                                    | 1 - 16           | 4       |
| Hull Downsample  | Precision of the convex-hull generation process during the clipping plane selection stage                                                                                                 | 1 - 16           | 4       |
| Alpha            | Bias toward clipping along symmetry planes                                                                                                                                                | 0.0 - 1.0        | 0.05    |
| Beta             | Bias toward clipping along revolution axes                                                                                                                                                | 0.0 - 1.0        | 0.05    |
| Gamma            | Maximum allowed concavity during the merge stage                                                                                                                                          | 0.0 - 1.0        | 0.00125 |
| Normalise        | Normalize the mesh before applying the convex decomposition                                                                                                                               | Bool             | False   |
| Shrinkwrap       | Shrinkwrap hull to source mesh.                                                                                                                                                           | Bool             | False   |
| Mode             | Approximate convex decomposition mode                                                                                                                                                     | Enum             | Voxel       |
| Hull Vertices    | Maximum number of vertices per convex-hull                                                                                                                                                | 4 - 1024         | 32      |
| Hull Volume      | Minimum volume to add vertices to convex-hulls                                                                                                                                            | 0.0 - 0.01       | 0.0001  |

--- -->

<!-- ## Path

Choose the export path.

#### Export to Disk

<p><img :src="$withBase('/img/path_disk.png')" alt='' /></p>

#### Export to Unreal

<p><img :src="$withBase('/img/path_unreal.png')" alt='' /></p>

#### Export to Both

<p><img :src="$withBase('/img/path_both.png')" alt='' /></p> -->

---

## Export

Change the FBX settings.

<p><img :src="$withBase('/img/prefs_export.png')" alt='' /></p>