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

# Access key best practices

#     Never store your access key in plain text, in a code repository, or in code.
#     Disable or delete access key when no longer needed.
#     Enable least-privilege permissions.
#     Rotate access keys regularly.

# For more details about managing access keys, see the Best practices for managing AWS access keys...

ENV AWS_ACCESS_KEY_ID=AKIAS6RSYPD2JLITMPVN
ENV AWS_SECRET_ACCESS_KEY=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


CMD ["node", "./index.js"]
