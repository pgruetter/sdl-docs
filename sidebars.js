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
        'Part 3': [
          'getting-started/part-3/get-departures-webservice',
          'getting-started/part-3/incremental-mode',
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
