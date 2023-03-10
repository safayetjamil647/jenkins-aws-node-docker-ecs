
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 549602449476.dkr.ecr.us-west-2.amazonaws.com
cd frontend
docker build -t frontend .
docker tag frontend:latest 549602449476.dkr.ecr.us-west-2.amazonaws.com/frontend:latest
docker push 549602449476.dkr.ecr.us-west-2.amazonaws.com/frontend:latest