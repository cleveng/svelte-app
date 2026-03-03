# 部署

## Nginx 配置

```conf
  location /_app/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  # SPA fallback
  location / {
    try_files $uri /index.html;
  }
```

## [@urql/svelte](https://nearform.com/open-source/urql/docs/basics/svelte/)

## Tauri 配置

```bash
# Tauri
export JEAN_FORCE_X11=0

# Error 71 (Protocol error) dispatching to Wayland display.
export WEBKIT_DISABLE_DMABUF_RENDERER=1
export WEBKIT_DISABLE_COMPOSITING_MODE=1
```
