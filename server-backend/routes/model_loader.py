# Imports
import sys
import json
import pickle

#Loading the model
with open('addiction_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Get the input array from the command-line arguments
input_str = sys.argv[1]
inputs = json.loads(input_str)

print(inputs)

output = model.predict(inputs)

# Print the prediction
print(output[0])