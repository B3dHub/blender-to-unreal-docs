# Collision

Auto and custom collision to the selected object(s).

<p><img :src="$withBase('/img/ui_collision.png')" alt='' /></p>

---

## Box

Collision will create based on the bounding box of the selection.

### Object mode

<p><img :src="$withBase('/img/box.webp')" alt='' /></p>

### Edit mode

- Select vertices to add box collision

<p><img :src="$withBase('/img/box_editmode.webp')" alt='' /></p>

### Custom `SHIFT + LMB`

::: tip NOTE
- Need custom box object(s).
:::

- Select the custom box object(s).
- Select the object for which you want to make collision.

<p><img :src="$withBase('/img/box_custom.webp')" alt='' /></p>

---

## Capsule

Collision will create based on the bounding box and depth of the selection.

### Object mode

<p><img :src="$withBase('/img/capsule.webp')" alt='' /></p>

### Edit mode

- Select vertices to add capsule collision

<p><img :src="$withBase('/img/capsule_editmode.webp')" alt='' /></p>

### Custom `SHIFT + LMB`

::: tip NOTE
- Need custom capsule object(s).
:::

- Select the custom capsule object(s).
- Select the object for which you want to make collision.

<p><img :src="$withBase('/img/capsule_custom.webp')" alt='' /></p>

---

## Sphere

Collision will create based on the bounding box of the selection.

### Object mode

<p><img :src="$withBase('/img/sphere.webp')" alt='' /></p>

### Edit mode

- Select vertices to add sphere collision

<p><img :src="$withBase('/img/sphere_editmode.webp')" alt='' /></p>

### Custom `SHIFT + LMB`

::: tip NOTE
- Need custom sphere(8 segment) object(s).
:::

- Select the custom sphere object(s).
- Select the object for which you want to make collision.

<p><img :src="$withBase('/img/sphere_custom.webp')" alt='' /></p>

---

## Cylinder

Collision will create based on the bounding box and depth of the selection.

### Object mode

<p><img :src="$withBase('/img/cylinder.webp')" alt='' /></p>

#### Redo

Change the cylinder collision segments for precision.

<p><img :src="$withBase('/img/cylinder_redo.png')" alt='' /></p>

### Edit mode

- Select vertices to add cylinder collision

<p><img :src="$withBase('/img/cylinder_editmode.webp')" alt='' /></p>

---

## Convex

Collision will create based on the selection.

### Object mode

<p><img :src="$withBase('/img/convex.webp')" alt='' /></p>

> [V-HACD](/preference.html#v-hacd) Enabled

<p><img :src="$withBase('/img/convex_vhacd.webp')" alt='' /></p>

[Parameters](/preference.html#v-hacd)

<p><img :src="$withBase('/img/vhacd_operator.png')" alt='' /></p>

### Edit mode

- Select vertices to add convex hull

<p><img :src="$withBase('/img/convex_editmode.webp')" alt='' /></p>

### Custom `SHIFT + LMB`

::: tip NOTE
- Need custom convex object(s).
:::

- Select the custom convex object(s).
- Select the object for which you want to make collision.

<p><img :src="$withBase('/img/convex_custom.webp')" alt='' /></p>