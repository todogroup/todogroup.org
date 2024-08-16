#!/bin/bash

TODO_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run -it --rm --name hugo-todo \
  -v ${TODO_DIR}:/src/ \
  -v ${TODO_DIR}/run-hugo.sh:/run-hugo.sh \
  -w /src/ \
  -p 1313:1313 \
  eclipsefdn/hugo-node:h0.120.4-n18.19.1 \
  /run-hugo.sh
