# WordPressの環境構築

## Usage

```powershell
# start containers
docker-compose up -d

# remove containers
docker-compose down --volumes
```

## ページ
### 管理画面
http://localhost:8082/wp-admin/
### ブログページ
http://localhost:8082/

## 参考サイト

- [【超初心者向け】DockerでWordPressをサクッと構築 | DevelopersIO](https://dev.classmethod.jp/articles/beginner-docker-wordpress/)
- [簡単便利！DockerでWordpressの開発環境を作ろう。方法＆メリット紹介 - Workship MAGAZINE(ワークシップマガジン)](https://goworkship.com/magazine/wordpress-docker/)
- [Docker ComposeでWordPressを構築する[WordPress]](https://noumenon-th.net/programming/2019/04/05/docker-wordpress/)
- [docker-compose を使って WordPress テーマ開発環境を構築しよう – PSYENCE:MEDIA](https://blog.recruit.co.jp/rmp/infrastructure/post-11266/)
- [Quickstart: Compose and WordPress | Docker Documentation](https://docs.docker.com/samples/wordpress/)