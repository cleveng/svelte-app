# 部署

## Nginx 配置

```conf
# 静态资源
  location ^~ /_app/ {
      alias /dist/client/_app/;

      expires 30d;
      access_log off;
      add_header Cache-Control "public, max-age=2592000, immutable";
  }

  # svelte 代理
  location / {
    proxy_pass http://127.0.0.1:3003;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_redirect off;

    # 502 Bad Gateway
    proxy_buffer_size 16k;
    proxy_buffers 4 32k;
    proxy_busy_buffers_size 64k;

    # 增加超时设置
    proxy_read_timeout 90;
    proxy_connect_timeout 90;
    proxy_send_timeout 90;
  }
```

## 自定义服务

```markdown
# vim svelte-example.service

[Unit]
Description=Svelte example
After=network.target

[Service]
Type=simple
WorkingDirectory=/directory
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/node /dist/index.js
Restart=on-failure
RestartSec=5s
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=svelte-example
KillMode=mixed
TimeoutStopSec=5

[Install]
WantedBy=multi-user.target
```
