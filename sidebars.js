module.exports = {
  docs: {
    'Smart Data Lake' : ['intro','overview'],
    'Getting Started_Old' : ['build','firstConfig','firstRun','nextSteps'],
    'Getting Started' : [
      'getting-started/setup',
      'getting-started/get-input-data',
      {
        'Part 1': [
          'getting-started/get-airports',
          'getting-started/get-departures',
          'getting-started/joining-it-together',
          'getting-started/joining-and-arrivals',
          'getting-started/compute_distances'
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
