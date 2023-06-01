# https://stackoverflow.com/questions/74979542/how-to-get-telegram-audio-music-album-cover-using-telethon-api-client

# this one is not gonna work in pyscript since requests module requires the operating system’s TCP socket API. so i have to use other solution... T-T

import requests

def get_cover(msg, limit=1, small=False):
    # if not (f := msg.file) and not all((f.title, f.performer)): return
    # performer, title = f.performer, f.title 

    performer, title = 'Sixthells', 'Mayhem'
    url = f"https://itunes.apple.com/search?term={performer} - {title}&entity=song&limit={limit}"
    headers = {"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1"}

    req = requests.post(url, headers=headers)
    if 200 >= req.status_code < 300:
        if (x := req.json())['resultCount']:
            small_url = x['results'][0]['artworkUrl100']
            file_url = small_url if small\
                       else small_url.replace('100x100', '600x600') 
                       # Telegram default. can increase 600x600. 
            return small_url, file_url

print(*get_cover(msg=None), sep='\n')