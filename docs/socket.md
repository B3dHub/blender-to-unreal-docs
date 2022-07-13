# Socket

::: tip NOTE
Socket will add in 3d cursor location.
:::

Socket to the selected object(s) in 3d cursor location.

<p><img :src="$withBase('/img/socket.png')" alt='' /></p>

---

## Mesh

### Object mode

- Select object(s) to add socket for.

<p><img :src="$withBase('/img/socket.webp')" alt='' /></p>

### Edit mode

- Select vertices to add socket in.

<p><img :src="$withBase('/img/socket_editmode.webp')" alt='' /></p>

### Custom `SHIFT + LMB`

::: tip NOTE
- Need custom empty object(s).
:::

- Select the custom empty object(s).
- Select the object for which you want to make socket.

<p><img :src="$withBase('/img/socket_custom.webp')" alt='' /></p>

::: tip NOTE
- Socket names have the `SOCKET_` prefix stripped out.
- `SOCKET_socket` in Blender becomes `socket` in Unreal.
:::