from django.shortcuts import render
from .load_airport_to_db import load
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from .models import Airport
import requests
import json
from datetime import date, timedelta


# Create your views here.
def load_database(request):
    load()
    return HttpResponse('Hello world')

class GetSuggestion(APIView):

    def get(self, request):
        q = request.GET.get('q')
        queryset = Airport.objects.filter(
            Q(name__icontains=q) |
            Q(country__icontains=q) |
            Q(city__icontains=q)
        ).distinct()
        queryset = queryset[:15]
        serializable_list = []
        for query in queryset:
            airport_description = query.name + ', '+query.city + ', '+query.country
            airport_description = airport_description.replace('\\', '')
            serializable_list.append(airport_description)
        return Response({"result": serializable_list}, status=status.HTTP_200_OK)

class SearchFlight(APIView):

    def post(self, request):

        # fetch data from search-flight using the data coming from front end = request.data
        url = 'http://www.ije-api.tcore.xyz/v1/flight/search-flight'
        headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        'cookie': 'J8JBNpPEVEjx3QA4zTpn'
        }
        post_data = request.data
        departure_city = post_data.get('departure_city')
        destination_city = post_data.get('destination_city')
        departure_date = post_data.get('departure_date')
        return_date = post_data.get('return_date')
        cabin_class = post_data.get('cabin_class')
        no_of_adults = post_data.get('no_of_adults')
        no_of_children = post_data.get('no_of_children')
        no_of_infants = post_data.get('no_of_infants')

        errors = []
        # validating departure_city
        try:
            airport_city_country = departure_city.split(', ')
            airport_name = airport_city_country[0]
            dep_city = Airport.objects.get(name=airport_name)
            if dep_city is not None:
                departure_city = dep_city.iata_code
        except:
            errors.append('Invalid depature airport name, Enter a valid airport name')
        # validating departure_city
        try:
            airport_city_country = destination_city.split(', ')
            airport_name = airport_city_country[0]
            des_city = Airport.objects.get(name=airport_name)
            if des_city is not None:
                destination_city = des_city.iata_code
        except:
            errors.append('Invalid destination airport name, Enter a valid airport name')
        # validating departure_date
        departure_date_list = departure_date.split('-')
        departure_date = date(int(departure_date_list[0]), int(departure_date_list[1]), int(departure_date_list[2])) + timedelta(1)
        todays_date = date.today()
        if not departure_date >= todays_date:
            errors.append("Departure date must be greater or equals today's date")
        # validating return date
        if return_date != '':
            return_date_list = return_date.split('-')
            return_date = date(int(return_date_list[0]), int(return_date_list[1]), int(return_date_list[2]))
            if not return_date > departure_date:
                errors.append("Departure date must be greater than departure's date")
            else:
                return_date = return_date.strftime('%m/%d/%Y')

        # validating cabin_class = First,Economy,Business,Premium,All
        cclass = ['First', 'Economy', 'Business', 'Premium', 'All']
        if not cabin_class in cclass:
            errors.append("Invalid cabin class can on be any of First,Economy,Business,Premium,All")
        
        # validating no_of_aldults
        if int(no_of_adults) > 9:
            errors.append("Maximum number of adults is 9")
        
        # validating no_of_infants
        if int(no_of_infants) > int(no_of_adults):
            errors.append({"no_of_infants": "Number of infants cannot be greater than number of aldults"})
        
        # validate total no of passangers
        if (int(no_of_adults)+int(no_of_children)+int(no_of_infants)) > 9:
            errors.append("Total number of passangers cannot be more than 9")

        if len(errors) > 0:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)

        url = 'http://www.ije-api.tcore.xyz/v1/flight/search-flight'
        payload = {
                "header": {
                    "cookie": "8nFhSjBjky6BoFb8VtLQ"
                },
                "body": {
                    "origin_destinations": [
                        {
                            "departure_city": departure_city,
                            "destination_city": destination_city,
                            "departure_date": departure_date.strftime('%m/%d/%Y'),
                            "return_date": return_date
                        }
                    ],
                    "search_param": {
                        "no_of_adult": no_of_adults,
                        "no_of_child": no_of_children,
                        "no_of_infant": no_of_infants,
                        "preferred_airline_code" : "",
                        "calendar" : False,
                        "cabin": cabin_class
                    }
                }
        }
        headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        'cookie': 'J8JBNpPEVEjx3QA4zTpn'
        }
        response = requests.request('POST', url, headers = headers, data = json.dumps(payload), allow_redirects=False, timeout=None)
        # res = json.loads(response.text['body']['data']['itineraries'][0]['origin_destinations'][0]['segments'][0]['arrival']
        res = json.loads(response.text)['body']['data']['itineraries']
        my_res = []
        for r in res:
            a = r['origin_destinations']
            for b in a:
                for c in b['segments']:
                    my_res.append(c)
        

        return Response(my_res)