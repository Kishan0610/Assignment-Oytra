#!/usr/bin/env bash
# Start Gunicorn with production settings
gunicorn backend.wsgi:application \
  --bind 0.0.0.0:10000 \
  --workers 2 \
  --settings=backend.prod_settings