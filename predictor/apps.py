from django.apps import AppConfig
from django.conf import settings
import os
import pickle

def load(src):
    with open(src, 'rb') as handle:
        b = pickle.load(handle)
        return b

class PredictorConfig(AppConfig):
    path = os.path.join(settings.MODELS, 'models')
    models = load(path)
    m_industrie, m_phbmr, m_autres = models["industrie"], models["phbmr"], models["autres"]