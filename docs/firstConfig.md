---
id: firstConfig
title: First Configuration
sidebar_label: First Configuration
---

The following page will show you how to build the project and run your first feed.
For a more comprehensive explanation of all options, see the (Reference.md).

To run a first example, you need the jar file (see #Build)), an application.conf and some sample data.

## Configure
To run a first example, you need to create a file called **application.conf** in a folder we will call **resource folder** from now on.
Use the following content for your file:

```
dataObjects { 
  ab-csv-org {
    type = CsvFileDataObject
    path = "AB_NYC_2019.csv"
  }
  ab-excel {
    type = ExcelFileDataObject
    path = "~{id}/AB_NYC_2019.xlsx"
    excel-options {
      sheet-name = csvdata
    }
  }
}

actions {
  getting-started {
    type = CopyAction
    inputId = ab-csv-org
    outputId = ab-excel
    metadata {
      feed = getting-started
    }  
  }
}
```

Explanation:  
We defined two data objects in the application.conf.
The first one has an id of **ab-cvs-org** and represents the CSV sample file we will use.
It has a path (with filename) where the file is stored and defines some CSV options like the delimiter used and whether the file has a header or not.  
The second data object has an id of **ab-excel** and represents an Excel file.
Again, with a path to the Excel file and some options, in this case the name of the Excel sheet.
Note that we used a placeholder **~{id}** in the pathname that will get substituted at runtime with the id of the data object.

Next, we define one action that reads from the CSV file (inputId) and writes an Excel file (outputId).
inputId and outputId reference the ids of the data objects defined above.
The type is set to CopyAction so the data will simply be copied without any transformations.
Additionally, we defined some metadata on this action, namely a feed name.
Feed names are used mainly for selecting the tasks to run and to organize your metadata.

As a result, this action will read the data from a CSV file and save them as an Excel file.

## Sample data
You can use any CSV file for this first example.
We used an open data set for these tests which you can download from [Kaggle](https://www.kaggle.com/dgomonov/new-york-city-airbnb-open-data).

