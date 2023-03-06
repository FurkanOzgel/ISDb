import pandas as pd 

#Deletes all data

'''
df = pd.DataFrame(columns=["name", "artist", "is_popular", "youtube_url",
                           "img_url", "isdb_point"])
df.to_json("demo-data/response.json")
'''

df = pd.read_json("demo-data/response.json")

while True:

    print("\n\n\n\n\n")

    name = input("İsim: ")
    artist = input("Artist: ")
    is_popular = input("Popüler mi? (1,0): ")
    youtube_url = input("Youtube Linki: ")
    img_url = input("Resim Linki: ")
    isdb_point = input("ISDb Puanı: ")
    print("***Eklendi***")
    print("\n")
    

    # # DF test data
    # name = "Delikanlım"
    # artist = "Yıldız Tilbe"
    # is_popular = "0"
    # youtube_link = "https://youtu.be/pZdQ62Qwd2c"
    # isdb_point = "8.4"
    
    df.loc[len(df)] = [name,artist,is_popular,youtube_url, img_url, isdb_point]

    print(df["name"])
    
    with open("demo-data/response.json", 'w', encoding='utf-8') as file:
        df.to_json(file, force_ascii=False)
    