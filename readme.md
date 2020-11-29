# wydfa-json2csv

## Installation

``` bash
## using npm
npm i wydfa-json2csv

## using yarn
yarn add wydfa-json2csv
```


## Usage

import package in yoru project
``` javascript
import {genereteCsv} from 'wydfa-json2csv'

```
``` javascript
const download=()=>{

const country=[
    {"id":1,"name":"Indonesia"},
    {"id":2,"name":"Australia"},
    {"id":3,"name":"Palau"},
    {"id":4,"name":"Rumania"},
    {"id":5,"name":"Japan"},
    {"id":6,"name":"New Zealand"},
]
genereteCsv(country,"countryvisiting.csv")

}

```

full code 

``` javascript

import {genereteCsv} from 'wydfa-json2csv'

const downloadHandler=()=>{

const country=[
    {"id":1,"name":"Indonesia"},
    {"id":2,"name":"Australia"},
    {"id":3,"name":"Palau"},
    {"id":4,"name":"Rumania"},
    {"id":5,"name":"Japan"},
    {"id":6,"name":"New Zealand"},
]
    genereteCsv(country,"countryvisiting.csv")

}
```
just trigger `downloadHandler()` will generate and download json to csv filr

## Contributing
you can open issues or open request to modify and improvment this package