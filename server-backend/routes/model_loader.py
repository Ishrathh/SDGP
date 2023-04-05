# Imports
import sys
import json
import pickle

#Loading the model
# with open('C:/Users/Phanthom/MEGAsync/IIT/SEM 2/SDGP/GitHub/server-backend/routes/addiction_model.pkl', 'rb') as f:
#     model = pickle.load(f)


print("Just testing to see if this shit works ffs!")
# Get the input array from the command-line arguments
input_array = sys.argv[1]
# inputs = json.loads(input_array)
# inputs = [[float(x) for x in inputs[0]]]
print('Received input data:', input_array)

# print(inputs)
# output = model.predict(input_array)

# Print the prediction
# print(output)