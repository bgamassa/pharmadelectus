# Pharmadelectus

## How to setup environment
1. Clone repo
2. `cd pharmadelectus`
3. Create virtual environment : `python3 -v venv env`
4. Activate venv: `source env/bin/activate`
5. Install packages `pip install -r requirements.txt`
6. Run server: `python manage.py runserver`

## How to use API
- The only endpoint available on this API is `/predict/`.
- To use it, send a `POST` request with the following parameters in the body:
{ "type" : "industie", "data" : [0,1,1,...,0,0,1]}.
- The output is a dictionnary with job as key and matching percentage as value.

## More about the request parameters
- The `type` parameter can only be "industrie", "phbmr" or "autres".
- The `data` parameter is a list of 0s and 1s corresponding to the qualities selected by the user.
- According to the test type, the list length will NOT be the same { "industrie" : 80, "phbmr" : 86, "autres": 96 }
- In the file `api/thanh.py`, you will find the list of qualities for each test type with their corresponding index.
- For example, if you read { "Autonome" : 7 }, it means that you must set the 7th element to your input list as 1. 
