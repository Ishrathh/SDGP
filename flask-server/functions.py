# Importing dependencies
import pandas as pd
import numpy as np
import os
import random

# Define the path to the CSV file
csv_file = 'hobby_dataset_rated.csv'

# Check if the CSV file exists
if os.path.isfile(csv_file):
    # Load the dataset into a pandas dataframe
    df = pd.read_csv(csv_file)

    # Check if the base_rating column already exists in the dataframe
    if 'base_rating' not in df.columns:
        # Assign a base rating of 15 to each hobby in the dataframe
        df['base_rating'] = 15

        # Save the updated dataset to a CSV file
        df.to_csv('hobby_dataset_rated.csv', index=False)
else:
    # Log missing rated file and create one using original dataset
    df = pd.read_csv('hobby_dataset_original.csv')
    df['base_rating'] = 15
    df.to_csv('hobby_dataset_rated.csv', index=False)

df.head(2)

# Function to get all hobbies of a given type (Private Method)
def get_hobbies_by_type(hobby_type):
    return df[df['Type of Hobby'] == hobby_type]['Hobby'].values

# Function to randomly suggest a hobby of a given type
def suggest_hobby(hobby_type):
        hobbies = get_hobbies_by_type(hobby_type)
        return np.random.choice(hobbies)
   
# Function to update the base rating of a hobby based on user feedback
def update_rating(hobby, liked):
    if liked:
        df.loc[df['Hobby'] == hobby, 'base_rating'] += 1
        print(df.loc[df['Hobby'] == hobby]['base_rating'])
    else:
        df.loc[df['Hobby'] == hobby, 'base_rating'] -= 1
        print(df.loc[df['Hobby'] == hobby]['base_rating'])
        if df.loc[df['Hobby'] == hobby, 'base_rating'].values[0] < 0:
            df.drop(df[df['Hobby'] == hobby].index, inplace=True)

    # Save the updated dataset to a CSV file
    df.to_csv('hobby_dataset_rated.csv', index=False)

# Function to get recommended hobbies
def get_recommendations(n=5):
    # Calculate the weighted rating for each hobby based on its base rating
    weighted_ratings = []
    for hobby in df['Hobby'].unique():
        if hobby in df['Hobby'].values:
            weighted_rating = df.loc[df['Hobby'] == hobby, 'base_rating'].values[0]
            weighted_ratings.append((hobby, weighted_rating))

    # Sort the hobbies by weighted rating in descending order
    sorted_ratings = sorted(weighted_ratings, key=lambda x: x[1], reverse=True)

    # Return the top n hobbies with the highest weighted rating
    recommendations = []
    for hobby, rating in sorted_ratings:
        recommendations.append(hobby)
        if len(recommendations) == n:
            break
    print(recommendations)
    recommended_hobby = random.choice(recommendations)
    return recommended_hobby

# Testing functions - random hobby
print(suggest_hobby('Creative'))

# Testing functions - update hobby liking
update_rating('Pottery', False)

# Testing functions - get recommendation
rec_hobby = get_recommendations()
print(rec_hobby)

# Reset all hobbies to base rating
def reset_rating():
    df['base_rating'] = 15
    df.to_csv('hobby_dataset_rated.csv', index=False)

