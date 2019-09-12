import os
from flight_search.settings import BASE_DIR
import pandas as pd
from flights.models import Airport

# data importation and cleaning from airport_codes.csv to database

def load():
    print('starting data importation using pandas')

    path = os.path.join(BASE_DIR, 'airport_codes.csv')

    data_set = pd.read_csv(path, header=None)
    data_set.columns = ['AirportId', 'Name', 'City', 'Country', 'IATA', 'ICAO', 'Latitude',
                        'Longitude', 'Altitude', 'Timezone', 'DST', 'Tz', 'Type', 'Source']

    print('initial data set\n', data_set.head())

    dataset = data_set.loc[:, ['Name', 'City', 'Country', 'IATA', 'ICAO']]

    def turn_to_empty_string(val):
        if val == '\\N':
            return ''
        return val
    
    dataset = dataset[dataset['IATA'] != '\\N']
    print('new dataset after cleaning \n',dataset.head())

    counter = 1
    for _, row in dataset.iterrows():
        print('adding {} of {} in database'.format(counter, dataset.shape[0]))
        Airport.objects.create(name=row['Name'],
        city=row['City'], country=row['Country'],
        iata_code=row['IATA'], icao_code=row['ICAO'])
        counter += 1

    print('added {} airport to the database'.format(dataset.shape[0]))

