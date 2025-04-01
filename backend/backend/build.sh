#!/usr/bin/env bash
# Exit on errors
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate --settings=backend.prod_settings

# Collect static files
python manage.py collectstatic --noinput --settings=backend.prod_settings