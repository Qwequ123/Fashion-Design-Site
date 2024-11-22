import requests

def obtain_access_token(username, password):
    # Set the API endpoint URL
    token_url = 'http://127.0.0.1:9999/api/token/'

    # Set the user credentials
    data = {
        'username': username,
        'password': password
    }

    try:
        # Make a POST request to obtain the token
        response = requests.post(token_url, data=data)
        
        # Check if request was successful
        if response.status_code == 200:
            # Parse the response JSON and extract the access token
            token_data = response.json()
            access_token = token_data.get('access')
            
            # Return the access token
            return access_token
        else:
            print(f"Failed to obtain access token. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None

# Example usage:
username = 'admin'
password = '*****'
access_token = obtain_access_token(username, password)
if access_token:
    print(f"Access token obtained: {access_token}")
else:
    print("Failed to obtain access token.")


