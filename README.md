![banner](https://github.com/psparsa/dockerland/assets/57572461/6a6b20a6-abfc-4a78-9dde-e06f0081d92b)


<p align="center">
DockerLand is a super-minimal fullstack project that showcases the use of Docker for deployment and development in an isolated environment.
</p>

## 🏗 Development:

```bash
docker compose -f docker-compose.dev.yml up
```

Open http://127.0.0.1:5173 with your browser to see the result.

You can start editing the client project by modifying `source/client/src/app.tsx`, or `source/server/src/index.ts` if you want to edit the server project.

## 🏡 Deployment:

```bash
docker compose up
```

Open http://127.0.0.1:4173 with your browser to see the result.
