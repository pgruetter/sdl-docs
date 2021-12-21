module.exports = {
  docs: {
    'Smart Data Lake' : ['intro'],
    'Getting Started' : [
      'getting-started/setup',
      'getting-started/get-input-data',
      {
        'Part 1': [
          'getting-started/get-departures',
          'getting-started/get-airports',
          'getting-started/select-columns',
          'getting-started/joining-it-together',
          'getting-started/joining-departures-and-arrivals',
          'getting-started/compute-distances'
        ],
        'Part 2': [
            'getting-started/industrializing',
            'getting-started/delta-lake-format',
            'getting-started/historical-data'
        ],
        'Part 3': [
          'getting-started/part-3/custom-webservice',
          'getting-started/part-3/incremental-mode'
        ],
        'Troubleshooting': [
          'getting-started/common-problems',
          'getting-started/docker-on-windows'
        ]
      }

    ]//,
    //'HOCON Configuration' : ['hoconOverview','hoconDataObjects','hoconActions'],
    //'Concepts': ['dag','executionPhases'],
    //'Features': ['featuresOverview'],
    //'Architecture': ['archConcepts','archRunInCloud'],
    //'Troubleshooting': ['troubleOverview']
  }
};
