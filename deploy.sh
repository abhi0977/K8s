docker build -t abhi0977/tokyo:latest -t abhi0977/tokyo:$SHA -f ./tokyo/Dockerfile ./tokyo
docker build -t abhi0977/delhi:latest -t abhi0977/delhi:$SHA -f ./delhi/Dockerfile ./delhi
docker build -t abhi0977/dubai:latest -t abhi0977/dubai:$SHA -f./dubai/Dockerfile ./dubai
docker build -t abhi0977/paris:latest -t abhi0977/paris:$SHA -f ./paris/Dockerfile ./paris
docker build -t abhi0977/london:latest -t abhi0977/london:$SHA -f ./london/Dockerfile ./london

docker push abhi0977/tokyo:latest
docker push abhi0977/delhi:latest
docker push abhi0977/dubai:latest
docker push abhi0977/paris:latest
docker push abhi0977/london:latest

docker push abhi0977/tokyo:$SHA
docker push abhi0977/delhi:$SHA
docker push abhi0977/dubai:$SHA
docker push abhi0977/paris:$SHA
docker push abhi0977/london:$SHA

kubectl apply -f deployments

kubectl set image deployments/tokyo-deployment tokyo=abhi0977/tokyo:$SHA
kubectl set image deployments/delhi-deployment delhi=abhi0977/delhi:$SHA
kubectl set image deployments/dubai-deployment dubai=abhi0977/dubai:$SHA
kubectl set image deployments/paris-deployment paris=abhi0977/paris:$SHA
kubectl set image deployments/london-deployment london=abhi0977/london:$SHA