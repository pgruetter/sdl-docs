---
id: firstConfig
title: First Configuration
sidebar_label: First Configuration
---
On this page we will go through a very basic example. 
It consists of a CSV data object as input and an Excel data object as output. 


## Configuration
Create a file called **application.conf** in a folder we will call **resource folder**.
Use the following content for your file:

```
dataObjects { 
  ab-csv-org {
    type = CsvFileDataObject
    path = "AB_NYC_2019.csv"
    csv-options {
      delimiter = ","
      header = "true"
    }
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

### Explanation
We defined the two data objects. 
The first one has an id of **ab-cvs-org** and represents the CSV sample file we will use.
The CSV file needs a path, but everything else is optional. 
We still included some csv-options to specify the delimiter and make sure the first line is interpreted as header.
 
The second data object has an id of **ab-excel** and represents an Excel file.
Again, only the path is mandatory for ExcelFileDataObject, but we also defined some options, namely the sheet-name used.
Note that we used a special placeholder **~{id}** in the pathname that will get substituted at runtime with the id of the data object.

Next, we define one action that reads from the CSV file (inputId) and writes the Excel file (outputId).
Both inputId and outputId reference the ids of the data objects defined above.
The type is set to CopyAction, so data will be simply copied without any transformation.
Additionally, we defined some metadata on this action, in this case a feed name.

Feed names are used later on to select which actions you want to execute and to organize your metadata. 
You could have more than one action with the same feed name.

Executing this action will read data from the CSV file and save them as an Excel file.

## Sample data
For this first example, we used an open data which you can download from [Kaggle](https://www.kaggle.com/dgomonov/new-york-city-airbnb-open-data). 
Of course, you can use any CSV file for this. If your file doesn't use the same defaults for parameters like header and delimiter, make sure to adjust the csv-options.

