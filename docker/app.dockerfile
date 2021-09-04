FROM denoland/deno

ADD . .

CMD ["deno", "run", "--allow-all", "--unstable", "app/server.js"]