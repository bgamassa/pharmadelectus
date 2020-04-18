from django.shortcuts import render
from .apps import PredictorConfig

from rest_framework.decorators import api_view
from rest_framework.response import Response

import numpy as np

from .helper import *
# Create your views here.

model_dict = {
    "industrie" : (PredictorConfig.m_industrie, industrie_dict),
    "phbmr" : (PredictorConfig.m_phbmr, phbmr_dict),
    "autres" : (PredictorConfig.m_autres, autres_dict)
}

def sort_dict(x):
    return {k: v for k, v in sorted(x.items(), key=lambda item: item[1], reverse=True)}

@api_view(["POST"])
def predict(request):
    test_type = request.data["type"]
    data = request.data["data"]
    model, legend = model_dict[test_type]
    X = np.asarray(list(data)).reshape(1, -1)
    pred = model.predict_proba(X)
    resp_aux = sort_dict({ legend[x] : (pred[0][x]) * 100 for x in (-pred).argsort()[0] })
    response = [ { "key" : k, "value" : int(v) } for k, v in resp_aux.items() ]
    return Response(response)

