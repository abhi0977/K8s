docker build -t abhi0977/tokyo -f ./tokyo/Dockerfile ./tokyo
docker build -t abhi0977/delhi -f ./delhi/Dockerfile ./delhi
docker build -t abhi0977/dubai -f./dubai/Dockerfile ./dubai
docker build -t abhi0977/paris -f ./paris/Dockerfile ./paris
docker build -t abhi0977/london -f ./london/Dockerfile ./london

# docker push abhi0977/tokyo
# docker push abhi0977/delhi
# docker push abhi0977/dubai
# docker push abhi0977/paris
# docker push abhi0977/london

kubectl apply -f deployments

kubectl set image deployments/tokyo-deployment tokyo=abhi0977/tokyo
kubectl set image deployments/delhi-deployment delhi=abhi0977/delhi
kubectl set image deployments/dubai-deployment dubai=abhi0977/dubai
kubectl set image deployments/paris-deployment paris=abhi0977/paris
kubectl set image deployments/london-deployment london=abhi0977/london



        # \          SORRY            /
        #  \                         /
        #   \    This page does     /
        #    ]   not exist yet.    [    ,'|
        #    ]                     [   /  |
        #    ]___               ___[ ,'   |
        #    ]  ]\             /[  [ |:   |
        #    ]  ] \           / [  [ |:   |
        #    ]  ]  ]         [  [  [ |:   |
        #    ]  ]  ]__     __[  [  [ |:   |
        #    ]  ]  ] ]\ _ /[ [  [  [ |:   |
        #    ]  ]  ] ] (#) [ [  [  [ :===='
        #    ]  ]  ]_].nHn.[_[  [  [
        #    ]  ]  ]  HHHHH. [  [  [
        #    ]  ] /   `HH("N  \ [  [
        #    ]__]/     HHH  "  \[__[
        #    ]         NNN         [
        #    ]         N/"         [
        #    ]         N H         [
        #   /          N            \
        #  /           q,            \
        # /                           \

