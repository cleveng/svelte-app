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

## 登录逻辑说明

1. 登录使用action在服务端进行，并存储cookies（用于服务端查询数据）
2. 登录后跳转到/dashboard，存储数据到sessionStorage，页面请求时使用这个数据
3. 退出后全局判断是否还存活
