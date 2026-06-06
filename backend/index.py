from app import app

# Vercel serverless function handler
def handler(event, context):
    from flask import request
    # For Vercel, we need to handle the request differently
    # This is a simplified approach - Vercel Python runtime will handle it
    return app
