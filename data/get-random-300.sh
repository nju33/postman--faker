#!/usr/bin/env bash

dirname="$(dirname "$(readlink -f $0)")"

csvq -f json \
  'select * from `data/geolonia/2020-08.csv` order by rand() limit 300' >"$dirname/geolonia/random-300.json"
