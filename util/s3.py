import logging

import boto3
from botocore.exceptions import ClientError

from settings import settings

s3_client = boto3.client(
    "s3",
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
)


def create_presigned_url_expanded(
    client_method_name="put_object",
    method_parameters=None,
    expiration=3600,
    http_method="PUT",
):
    try:
        response = s3_client.generate_presigned_url(
            ClientMethod=client_method_name,
            Params=method_parameters,
            ExpiresIn=expiration,
            HttpMethod=http_method,
        )
    except ClientError as e:
        logging.error(e)
        return "Please try again"

    # The response contains the presigned URL
    return response
