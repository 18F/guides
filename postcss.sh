#!/bin/bash

postcss \
  _site/assets/styles/*.css \
  _site/assets/methods/styles/*.css \
  _site/assets/brand/styles/*.css \
  _site/assets/derisking/styles/*.css \
  -r --use autoprefixer
