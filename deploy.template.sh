#!/bin/bash

# Example deployment script (fill in your own config)
# Don't use in production!

rsync -avz --delete dist/ user@your-server:/path/to/project
ssh user@your-server "sudo chown -R www-data:www-data /path/to/project && sudo chmod -R 755 /path/to/project"
