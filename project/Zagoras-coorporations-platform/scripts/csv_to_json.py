import pandas as pd
import json
import re
import os
from googletrans import Translator 


translator = Translator()

# read CSV
csv_file = os.path.join(os.path.dirname(__file__), "sheet.csv" )
df = pd.read_csv(csv_file,dtype=str).fillna("")

# create list from events 
events =  []
for i in range(len(df)):
    
    title_gr        = str(df.get("Όνομα Επιχείρησης (title)", [""])[i]).strip()
    date            = str(df.get("Ημερομηνία Δραστηριότητας (date)", [""])[i]).strip()
    location        = str(df.get("Τοποθεσία (location)", [""])[i]).strip()
    location_url    = str(df.get("Τοποθεσία (Google Maps URL)", [""])[i]).strip()
    description_gr  = str(df.get("Περιγραφή (description)", [""])[i]).strip()
    image           = str(df.get("URL Εικόνας (image)", [""])[i]).strip()
    coondinates     = str(df.get("Τοποθεσία (coondinates)", [""])[i]).strip()
    
    # lat, lng
    if coondinates:
        parts=[p.strip() for p in coondinates.split(",")]
        lat = float(parts[0])
        lng = float(parts[1])
                                 
    # default image
    if not image:
        image = "photos/default-photo.avif"
    
    
    # translate in english 
    title_en = translator.translate(str(title_gr), src='el', dest='en').text
    description_en = translator.translate(str(description_gr), src='el', dest='en').text
    
    event = {
        "title"             : title_gr,
        "title_en"          : title_en,
        "date"              : date,
        "location"          : location,
        "location_url"      : location_url,
        "description"       : description_gr,
        "description_en"    : description_en,
        "image"             : image,
        "lat"               : lat,
        "lng"               : lng
    }
    events.append(event)
    
    
out_dir = os.path.join(os.path.dirname(__file__), "..", "src", "data")
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "events.json")

# save as JSON
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(events, f, ensure_ascii=False, indent=2)