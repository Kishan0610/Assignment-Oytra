#!/bin/bash
exec gunicorn backend.wsgi:backend \
  --bind 0.0.0.0:$PORT \
  --workers 3 \
  --pythonpath backend \ 