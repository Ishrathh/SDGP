# Imports
import sys
import json
import pickle

try: 
    #Loading the model
    with open('addiction_model.pkl', 'rb') as f:
        model = pickle.load(f)

    # Reading input data from stdin
    input_data = json.loads(sys.stdin.readline())

    # Making predictions
    output = model.predict(input_data)

    # Writing predictions to stdout
    sys.stdout.write(json.dumps(output.tolist()))

except Exception as e:
    print("An error occurred:", e)