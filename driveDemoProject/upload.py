from __future__ import print_function

import os.path
from unicodedata import name

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from googleapiclient.http import MediaFileUpload

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/drive']


def main():
   
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    try:
        service = build('drive', 'v3', credentials=creds)
        folder_id = '1OP67FeS4ndojuSHSJTmZVTdVpqvHnuMg'
        

        # Call the Drive v3 API
        file_metadata = {'name': 'download.png' , 'parents': [folder_id]}
        #if file already exists
        if (file_metadata['name'] == "download.png"):
            print("ERROR: A file with this name already exists")
            exit()
        #upload the file
        media = MediaFileUpload('r/download.png',
                                mimetype='image/png')
        file = service.files().create(body=file_metadata, media_body=media,
                                      fields='id').execute()
        #print(F'File ID: {file.get("id")}')
        #print('done')

    except HttpError as error:
         #errors from drive API.
        print(f'An error occurred: {error}')


if __name__ == '__main__':
    main()