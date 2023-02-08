FROM node:16-alpine AS build

WORKDIR /app
COPY . /app

RUN set -ex \
  # Build JS-Application
  && npm install --production \
  && rm -rf /var/cache/apk/* \
  # Delete unnecessary files
  && rm package* \
  # Correct User's file access
  && chown -R node:node /app 

FROM node:16-alpine AS final
WORKDIR /app
COPY --from=build /app /app
ENV HTTP_PORT=8080 HTTPS_PORT=8443
EXPOSE $HTTP_PORT $HTTPS_PORT
USER 1000
CMD ["node", "./index.js"]
