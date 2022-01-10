module.exports = {
  docs: {
    'Smart Data Lake' : ['intro', 'features'],
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
        'Troubleshooting': [
          'getting-started/common-problems',
          'getting-started/docker-on-windows',
        ]
      }

    ],
    'Reference' : [
        'reference/build',
        'reference/commandLine',
        'reference/hoconOverview',
        'reference/hoconElements',
        'reference/dag',
        'reference/executionPhases',
        'reference/executionModes',
        'reference/transformations',
        'reference/schemaEvolution',
        'reference/housekeeping',
        'reference/streaming',
        'reference/metrics',
        'reference/deploymentOptions',
        'reference/testing',
        'reference/troubleshooting',
        'reference/glossary'
    ],
  }
};
