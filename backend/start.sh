#!/bin/bash
exec gunicorn backend.wsgi:application \
  --bind 0.0.0.0:$PORT \
  --workers 3 \
  --pythonpath /opt/render/project/src 