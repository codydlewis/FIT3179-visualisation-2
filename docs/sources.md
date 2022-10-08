# Data sources

## Ambulance Victoria response time preformance

Ambulance Victoria has two official response time targets: *Respond to Code 1 incidents within 15 minutes for 85% of incidents state-wide*, and *Respond to Code 1 incidents within 15 minutes for 90% of incidents in centres with populations greater than 7,500*.

Response times are an important measure of the service we provide, but are only one of a number of measures used to gauge the effective delivery of an ambulance service. Our response times are measured from the receipt of the triple zero (000) call until paramedics arrive on scene. Response times are
influenced by many factors including traffic, distance required to travel, availability of ambulances and demand for our services.

We designate those patients that require urgent paramedic and hospital care as "Code 1," and these patients receive a "lights and sirens" response. The datasets provide information about our Code 1 response time performance by both Local Government Area (LGA) and Urban Centres and Localities (UCL). Code 2 incidents are acute, but not time critical and do not require a lights and sirens response. AV's average Code 2 response time performance has also been provided.

As part of our process of continual improvement, the response time performance shown below has been calculated using data sourced from the Computer Aided Dispatch (CAD) system used across Victoria. Local government in Victoria comprises of 79 municipal districts. They are often referred to as local government areas (LGAs). The number of LGAs and their boundaries can change over time. LGAs are as defined by Local Government Victoria, which is part of the Department of Transport, Planning and Local Infrastructure.

Dataset source: [data.vic.gov.au](https://discover.data.vic.gov.au/dataset/ambulance-victoria-lga-response-time-performance/historical)

### Attributes

- `year`: time range of dataset (e.g., '2017-2018')
- `lga_name`: name of the Local Government Area (e.g., 'Knox')
- `dispatch_code`: 'Code 1' (lights and sirens) or 'Code 2' (acute but not time critical)
- `percent_within_15min`: percentage of calls which were responded to within 15 minutes (e.g., '87.9%')
- `avg_rt`: average response time in seconds (e.g., '1126')
- `total`: total number of responses (e.g., '8,364')

### Visualisations

- [example of visualisation which could be used]
